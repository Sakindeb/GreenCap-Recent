# models.py

from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    account_balance = models.DecimalField(max_digits=10, decimal_places=2, default=0)

class CarbonOffsetProject(models.Model):
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    description = models.TextField()
    total_credits = models.IntegerField(default=0)
    # Add other fields as needed

class Transaction(models.Model):
    TRANSACTION_TYPES = (
        ('PURCHASE', 'Purchase'),
        ('SALE', 'Sale'),
    )
    
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    project = models.ForeignKey(CarbonOffsetProject, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    transaction_type = models.CharField(max_length=20, choices=TRANSACTION_TYPES)
    timestamp = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        if self.transaction_type == 'PURCHASE':
            # Deduct credits from project
            self.project.total_credits -= self.quantity
            self.project.save()
            
            # Add credits to user
            self.user.account_balance += self.quantity
            self.user.save()
        elif self.transaction_type == 'SALE':
            # Deduct credits from user
            self.user.account_balance -= self.quantity
            self.user.save()

            # Add credits to project
            self.project.total_credits += self.quantity
            self.project.save()

        super().save(*args, **kwargs)

