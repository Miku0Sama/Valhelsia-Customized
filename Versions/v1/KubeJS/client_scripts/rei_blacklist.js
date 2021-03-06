// priority: 0

onEvent('rei.hide.items', event => {
  event.hide([
    'additionaladditions:gilded_netherite_axe',
    'additionaladditions:gilded_netherite_boots',
    'additionaladditions:gilded_netherite_chestplate',
    'additionaladditions:gilded_netherite_helmet',
    'additionaladditions:gilded_netherite_hoe',
    'additionaladditions:gilded_netherite_leggings',
    'additionaladditions:gilded_netherite_pickaxe',
    'additionaladditions:gilded_netherite_shovel',
    'additionaladditions:gilded_netherite_sword',
    'additionaladditions:gold_ring',
    'blockus:ender_block',
    'blockus:legacy_bricks',
    'blockus:legacy_coal_block',
    'blockus:legacy_cobblestone',
    'blockus:legacy_crying_obsidian',
    'blockus:legacy_diamond_block',
    'blockus:legacy_explosion_proof_gold_block',
    'blockus:legacy_first_cobblestone',
    'blockus:legacy_first_grass_block',
    'blockus:legacy_glowing_obsidian',
    'blockus:legacy_glowstone',
    'blockus:legacy_gold_block',
    'blockus:legacy_grass_block',
    'blockus:legacy_gravel',
    'blockus:legacy_iron_block',
    'blockus:legacy_lapis_block',
    'blockus:legacy_leaves',
    'blockus:legacy_mossy_cobblestone',
    'blockus:legacy_nether_reactor_core',
    'blockus:legacy_planks',
    'blockus:legacy_sponge',
    'blockus:legacy_stonecutter',
    'harvest_scythes:creative_machete',
    'harvest_scythes:creative_scythe',
    'minecraft:barrier',
    'minecraft:jigsaw',
    'minecraft:light',
    'minecraft:structure_block',
    'minecraft:structure_void',
    'oxidized:copper_nugget',
    'oxidized:rose_gold_axe',
    'oxidized:rose_gold_hoe',
    'oxidized:rose_gold_pickaxe',
    'oxidized:rose_gold_shovel',
    'oxidized:rose_gold_sword',
    'quarryplus:adv_pump',
    Item.of('quarryplus:adv_pump').enchant('minecraft:efficiency', 5).enchant('minecraft:unbreaking', 3).enchant('minecraft:fortune', 3),
    'quarryplus:adv_quarry',
    Item.of('quarryplus:adv_quarry').enchant('minecraft:efficiency', 5).enchant('minecraft:unbreaking', 3).enchant('minecraft:fortune', 3),
    Item.of('quarryplus:adv_quarry').enchant('minecraft:efficiency', 5).enchant('minecraft:unbreaking', 3).enchant('minecraft:silk_touch', 1),
    'quarryplus:creative_generator',
    'quarryplus:dummy',
    'quarryplus:frame',
    'quarryplus:remove_bedrock_module', 
  ])
})