from django.contrib import admin
from .models import cardapio

# Register your models here.


class CardapioAdmin(admin.ModelAdmin):
    list_display = [
        'lanche',
        'descricao',
        'valor'
    ]

    search_fields = [
        'lanche',
        'descricao',
        'valor'
    ]

admin.site.register(cardapio, CardapioAdmin)
