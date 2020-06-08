from rest_framework import serializers

from .models import News



class NewsSerializer(serializers.ModelSerializer):
    was_published_recently = serializers.BooleanField(read_only=True)
    class Meta:
        model = News
        fields = '__all__'