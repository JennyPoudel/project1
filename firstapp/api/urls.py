from django.urls import path,include
from firstapp.api.views import RentDetailsViewSet
from rest_framework.routers import DefaultRouter
# from .views import RentDetailsCreateView
#from rest_framework import routers
router=DefaultRouter()
router.register(r'',RentDetailsViewSet)
urlpatterns = router.urls



# urlpatterns = [
#     path('', views.getdata),
#     path('create/',RentDetailsCreateView.as_view()),

#    # path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
# ]