from django.contrib import admin
from .models import User, CarbonOffsetProject, Transaction
# Register your models here.
class GreencapAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'location', 'total_credits')
class AccountAdmin(admin.ModelAdmin):
    list_display = ('username', 'account_balance')

class TransactionAdmin(admin.ModelAdmin):
    list_display = ('user', 'project', 'quantity', 'transaction_type', 'timestamp')
admin.site.register(CarbonOffsetProject, GreencapAdmin)
admin.site.register(User, AccountAdmin)
admin.site.register(Transaction, TransactionAdmin)