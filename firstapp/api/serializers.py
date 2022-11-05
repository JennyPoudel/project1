from rest_framework import  serializers
from firstapp.models import RentDetails

class RentDetailsSerializer(serializers.ModelSerializer):
      
      class Meta:
        model = RentDetails
       
        fields = ['floor_no','distance','location','area','no_of_rooms','price','property_type']