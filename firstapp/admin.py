from django.contrib import admin

# Register your models here.

from .models import RentDetails
from .models import RenterInfo
from .models import RenteeInfo

admin.site.register(RenterInfo)
admin.site.register(RentDetails)
admin.site.register(RenteeInfo)
