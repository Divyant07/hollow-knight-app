from django.db import models

class CheckListItems(models.Model):
    title = models.CharField(max_length=75)
    location = models.CharField(max_length=100)
    done = models.BooleanField(default= False)
    category = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.title} - {self.location}"
    
    class Meta:
        abstract = True

class Boss(CheckListItems):
    optional = models.BooleanField(default=False)
    difficulty = models.CharField(max_length=50)
    total_health = models.CharField(max_length=5)
    class Meta:
        verbose_name_plural = "Bosses"

class Charm(CheckListItems):
    cost = models.IntegerField()
    required_ability = models.CharField(max_length=100)
    class Meta:
        verbose_name_plural = "Charms"

class Grub(CheckListItems):
    count = models.IntegerField()
    required_ability = models.CharField(max_length=100)
    class Meta:
        verbose_name_plural = "Grubs"

class Equipment(CheckListItems):
    description = models.TextField()
    required_resource = models.CharField(max_length=100)
    required_ability = models.CharField(max_length=100)

class CharmNotch(CheckListItems):
    description = models.TextField()
    cost = models.IntegerField()
    required_boss = models.CharField(max_length=100)
    required_equipment = models.CharField(max_length=100)
    required_ability = models.CharField(max_length=100)
    class Meta:
        verbose_name_plural = "Charm Notches"
        
class MaskShard(CheckListItems):
    cost = models.IntegerField()
    required_boss = models.CharField(max_length=100)
    required_equipment = models.CharField(max_length=100)
    required_ability = models.CharField(max_length=100)

class VesselFragment(CheckListItems):
    cost = models.IntegerField()
    required_boss = models.CharField(max_length=100)
    required_equipment = models.CharField(max_length=100)
    required_ability = models.CharField(max_length=100)

class Colloseum(CheckListItems):
    difficulty = models.CharField(max_length=50)
    total_rounds = models.IntegerField()
    rewards = models.TextField()

class Dreamer(CheckListItems):
    required_bosses = models.TextField()

class Pantheon(CheckListItems):
    difficulty = models.CharField(max_length=50)
    total_challenges = models.IntegerField()