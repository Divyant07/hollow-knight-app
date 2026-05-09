from django.contrib import admin

# Register your models here.
from .models import (Boss, Charm, Grub, Equipment, CharmNotch, 
                     MaskShard, VesselFragment, Colloseum, Dreamer, 
                     Pantheon)

@admin.register(Boss)
class BossesAdmin(admin.ModelAdmin):
    list_display = ('title', 'location', 'difficulty', 'optional', 'done')
    search_fields = ('title', 'location', 'difficulty')
    list_filter = ('difficulty', 'optional', 'done')

@admin.register(Charm)
class CharmsAdmin(admin.ModelAdmin):
    list_display = ('title', 'location', 'cost', 'done')
    search_fields = ('title', 'location')
    list_filter = ('location', 'done')

@admin.register(Grub)
class GrubsAdmin(admin.ModelAdmin):
    list_display = ('title', 'location', 'count', 'done')
    search_fields = ('count', 'location')
    list_filter = ('location', 'done')

@admin.register(Equipment)
class EquipmentAdmin(admin.ModelAdmin):
    list_display = ('title', 'location', 'done')
    search_fields = ('title', 'location')
    list_filter = ('location', 'done')

@admin.register(CharmNotch)
class CharmNotchesAdmin(admin.ModelAdmin):
    list_display = ('title', 'location', 'cost', 'done')
    search_fields = ('title', 'location')
    list_filter = ('location', 'done')

@admin.register(MaskShard)
class MaskShardsAdmin(admin.ModelAdmin):
    list_display = ('title', 'location', 'cost', 'done')
    search_fields = ('title', 'location')
    list_filter = ('location', 'done')

@admin.register(VesselFragment)
class VesselFragmentsAdmin(admin.ModelAdmin):
    list_display = ('title', 'location', 'cost', 'done')
    search_fields = ('title', 'location')
    list_filter = ('location', 'done')

@admin.register(Colloseum)
class ColloseumAdmin(admin.ModelAdmin):
    list_display = ('title', 'location', 'difficulty', 'done')
    search_fields = ('title', 'location', 'difficulty')
    list_filter = ('difficulty', 'done')
    class Meta:
        verbose_name_plural = "Colloseum Trials"

@admin.register(Dreamer)
class DreamersAdmin(admin.ModelAdmin):
    list_display = ('title', 'location', 'done')
    search_fields = ('title', 'location')
    list_filter = ('location', 'done')

@admin.register(Pantheon)
class PantheonsAdmin(admin.ModelAdmin):
    list_display = ('title', 'difficulty', 'total_challenges', 'done')
    search_fields = ('title', 'difficulty')
    list_filter = ('difficulty', 'done')