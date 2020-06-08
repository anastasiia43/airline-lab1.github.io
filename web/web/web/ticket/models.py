from django.contrib.auth.base_user import BaseUserManager
from django.db import models

class TicketManager(BaseUserManager):
  def create_ticket(self, arival,departure,date, child):
    ticket = self.model(
        arival = arival,
        departure = departure,
        date = date,
        child = child
    )
    ticket.save(using=self._db)
    return ticket

class Ticket (models.Model):
    arival = models.CharField(verbose_name="arival", max_length=50)
    departure = models.CharField(verbose_name="departure", max_length=50)
    date = models.DateField(verbose_name="date", max_length=50)
    child = models.BooleanField(verbose_name="child")

    object = TicketManager()