from rest_framework import serializers

from .models import Ticket



class TicketSerializer(serializers.ModelSerializer):
    was_published_recently = serializers.BooleanField(read_only=True)
    class Meta:
        model = Ticket
        fields = '__all__'

class TicketCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ticket
        fields = ['arival','departure','date','child']
