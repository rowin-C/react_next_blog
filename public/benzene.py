import bpy
from math import sin, cos, radians
from mathutils import Vector

# Define the positions of the carbon atoms
carbon_coords = [Vector((cos(radians(60 * i)), sin(radians(60 * i)), 0)) for i in range(6)]

# Define the positions of the hydrogen atoms
hydrogen_coords = [Vector((1.2 * cos(radians(60 * i + 30)), 1.2 * sin(radians(60 * i + 30)), 0)) for i in range(6)]

# Add the carbon atoms as black spheres
for i, coord in enumerate(carbon_coords):
    bpy.ops.mesh.primitive_uv_sphere_add(location=coord, radius=0.35)
    carbon_obj = bpy.context.object
    carbon_obj.name = f"Carbon{i + 1}"
    carbon_obj.data.materials.append(bpy.data.materials.new(name="Black"))
    carbon_obj.active_material.diffuse_color = (1, 0, 0, 1)

# Add the hydrogen atoms as white spheres
for i, coord in enumerate(hydrogen_coords):
    bpy.ops.mesh.primitive_uv_sphere_add(location=coord, radius=0.15)
    hydrogen_obj = bpy.context.object
    hydrogen_obj.name = f"Hydrogen{i + 1}"
    hydrogen_obj.data.materials.append(bpy.data.materials.new(name="White"))
    hydrogen_obj.active_material.diffuse_color = (0,0,0, 1)

# Add cylinders between the atoms as bonds
for i in range(6):
    # Carbon-carbon bonds
    start = carbon_coords[i]
    end = carbon_coords[(i + 1) % 6]
    bpy.ops.mesh.primitive_cylinder_add(vertices=32, radius=0.1, depth=(end - start).length)
    bond_obj = bpy.context.object
    bond_obj.name = f"CC_Bond{i + 1}"
    bond_obj.location = (start + end) / 2
    bond_obj.rotation_euler = (end - start).to_track_quat('Z', 'Y').to_euler()
    bond_obj.data.materials.append(bpy.data.materials.new(name="Black"))
    bond_obj.active_material.diffuse_color = (1, 1, 1, 1)

    # Carbon-hydrogen bonds
    start = carbon_coords[i]
    end = hydrogen_coords[i]
    bpy.ops.mesh.primitive_cylinder_add(vertices=32, radius=0.05, depth=(end - start).length)
    bond_obj = bpy.context.object
    bond_obj.name = f"CH_Bond{i + 1}"
    bond_obj.location = (start + end) / 2
    bond_obj.rotation_euler = (end - start).to_track_quat('Z', 'Y').to_euler()
    bond_obj.data.materials.append(bpy.data.materials.new(name="Black"))
    bond_obj.active_material.diffuse_color = (1, 1, 1, 1)