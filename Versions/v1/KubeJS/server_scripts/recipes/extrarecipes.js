// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Loading Recipes')

onEvent('recipes', event => {
	// Change recipes here
	event.remove({output: 'kibe:angel_ring'})
	event.remove({output: 'kibe:diamond_lasso'})
	event.remove({output: 'bosses_of_mass_destruction:levitation_block'})
	event.shaped('bosses_of_mass_destruction:levitation_block', [
		' A ',
		'GBG',
		'OEO'
	], {
		A: 'bosses_of_mass_destruction:ancient_anima',
		G: '#forge:ingots/gold',
		B: 'bosses_of_mass_destruction:blazing_eye',
		O: 'minecraft:obsidian',
		E: 'minecraft:end_crystal'
	})
	event.shaped('kibe:angel_ring', [
		'NTN',
		'ERE',
		'NTN'
	], {
		N: 'minecraft:nether_star',
		T: 'bosses_of_mass_destruction:levitation_block',
		E: 'minecraft:elytra',
		R: 'gobber2:gobber2_ring_end'
	})
	event.shaped('kibe:diamond_lasso', [
		' G ',
		'DND',
		' C '
	], {
		G: 'kibe:golden_lasso',
		D: 'minecraft:diamond',
		N: 'minecraft:nether_star',
		C: 'kibe:cursed_lasso'
	})
	event.shaped('16x minecraft:stick', [
		'L',
		'L',
	], {
		L: '#minecraft:logs'
	})
	event.shaped('8x ae2:sky_stone_block', [
		'SSS',
		'SCS',
		'SSS',
	], {
		S: 'minecraft:stone',
		C: 'minecraft:coal_block'
	})
	event.custom({
		"type": "ae2:inscriber",
		"mode": "press",
		"result": {
			"item": "ae2:silicon_press"
		},
		"ingredients": {
			"top": {
				"item": "ae2:silicon"
			},
			"middle": {
				"item": "minecraft:iron_block"
			},
			"bottom": {
				"item": "ae2:silicon"
			}
		}
	})
	event.custom({
		"type": "ae2:inscriber",
		"mode": "press",
		"result": {
			"item": "ae2:logic_processor_press"
		},
		"ingredients": {
			"top": {
				"item": "minecraft:gold_ingot"
			},
			"middle": {
				"item": "minecraft:iron_block"
			},
			"bottom": {
				"item": "minecraft:gold_ingot"
			}
		}
	})
	event.custom({
		"type": "ae2:inscriber",
		"mode": "press",
		"result": {
			"item": "ae2:calculation_processor_press"
		},
		"ingredients": {
			"top": {
				"item": "ae2:certus_quartz_crystal"
			},
			"middle": {
				"item": "minecraft:iron_block"
			},
			"bottom": {
				"item": "ae2:certus_quartz_crystal"
			}
		}
	})
	event.custom({
		"type": "ae2:inscriber",
		"mode": "press",
		"result": {
			"item": "ae2:engineering_processor_press"
		},
		"ingredients": {
			"top": {
				"item": "minecraft:diamond"
			},
			"middle": {
				"item": "minecraft:iron_block"
			},
			"bottom": {
				"item": "minecraft:diamond"
			}
		}
	})
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})

console.info('Recipes Loaded')