# #from rest_framework.generics import ListAPIView,RetrieveAPIView
# from firstapp.models import RentDetails
# from rest_framework.decorators import api_view
# from rest_framework.response import Response
# from .serializers import RentDetailsSerializer
# from rest_framework.generics import ListAPIView,RetrieveAPIView,CreateAPIView

from rest_framework.parsers import FileUploadParser
from rest_framework import viewsets
from .serializers import RentDetailsSerializer
from  firstapp.models import RentDetails
from rest_framework import permissions
from rest_framework.parsers import MultiPartParser, FormParser

class RentDetailsViewSet(viewsets.ModelViewSet):
    serializer_class=RentDetailsSerializer
    queryset=RentDetails.objects.all();
    # parser_classes = [MultiPartParser, FormParser]
    # permission_classes = [
    #     permissions.IsAuthenticatedOrReadOnly]
    
    # def perform_create(self, serializer):
    #     serializer.save(creator=self.request.user)







# @api_view(['GET'])
# def getdata(request):
#     queryset=RentDetails.objects.all()
#     serializer=RentDetailsSerializer(queryset,many=True)
#     return Response(serializer.data)

# class RentDetailsCreateView(CreateAPIView):
#     queryset=RentDetails.objects.all()
#     serializer_class=RentDetailsSerializer
    