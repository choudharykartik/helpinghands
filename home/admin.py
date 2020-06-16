from django.contrib import admin
from .models import Person, Helper, Help, Token

# Register your models here.
class PersonAdmin(admin.ModelAdmin):
    list_display = ('name', 'city', 'mobile_no', 'status')
    list_filter = ('timestamp',)

admin.site.register(Person, PersonAdmin)



class HelperAdmin(admin.ModelAdmin):
    list_display = ('name', 'mobile')

admin.site.register(Helper, HelperAdmin)


admin.site.register(Help)


class TokenAdmin(admin.ModelAdmin):
    list_display = ('id', 'access_token', 'created_at')
    list_filter = ('created_at',)

admin.site.register(Token, TokenAdmin)
