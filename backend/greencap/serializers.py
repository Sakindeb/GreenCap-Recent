# serializers.py

from rest_framework import serializers
from .models import User, CarbonOffsetProject, Transaction

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'account_balance']

class CarbonOffsetProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = CarbonOffsetProject
        fields = '__all__'

class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = '__all__'
