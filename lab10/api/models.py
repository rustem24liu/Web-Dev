from django.db import models


# Create your models here.


class Company(models.Model):
    name = models.CharField(max_length=100, null=False, blank=False, verbose_name='Name')
    description = models.TextField(null=True, blank=True, verbose_name="Description")
    city = models.CharField(max_length=100, null=False, blank=False, verbose_name='City')
    address = models.TextField(null=True, blank=True, verbose_name='Address')

    def __str__(self):
        return f'{self.id} - {self.name}'


class Vacancy(models.Model):
    name = models.CharField(max_length=100, null=False, blank=False, verbose_name='Vacancy Name')
    description = models.TextField(null=True, blank=True, verbose_name="Description")
    salary = models.FloatField(null=True, blank=False, verbose_name='Salary')
    company = models.ForeignKey(Company, on_delete=models.PROTECT, null=False, blank=False, related_name='vacancies')


    def __str__(self):
        return f'{self.id} - {self.name}'
