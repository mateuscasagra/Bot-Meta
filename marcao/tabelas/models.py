from django.db import models


# Create your models here

class cardapio(models.Model):
    lanche  =models.CharField(max_length=100, blank=False, null=False, verbose_name="Dog")
    descricao = models.TextField(verbose_name="Descriçao", blank=False, null=False)
    valor = models.DecimalField(verbose_name="Valor",max_digits=5 , decimal_places=2)

    class Meta:
        verbose_name_plural = "Lanches"
        verbose_name = "Lanche"

    def __str__(self):
        return f'{self.lanche}'
