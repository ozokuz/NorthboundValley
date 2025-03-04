ServerEvents.recipes((event) => {
    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                item: "create:cinder_flour"
            },
            {
                item: "minecraft:cobblestone"
            },
            {
                type: "fluid_stack",
                amount: 25,
                fluid: "minecraft:lava"
            }
        ],
        results: [
            {
                item: {
                    id: "minecraft:netherrack"
                }
            }
        ]
    });

    event.custom({
        type: "create:mixing",
        ingredients: [
            {
                item: "minecraft:gravel"
            },
            {
                amount: 3,
                item: "minecraft:bonemeal"
            },
            {
                type: "fluid_stack",
                amount: 25,
                fluid: "minecraft:lava"
            }
        ],
        results: [
            {
                item: {
                    id: "minecraft:calcite"
                }
            }
        ]
    });

    event.custom({
        type: "create:compacting",
        ingredients: [
            {
                item: "minecraft:cobblestone"
            },
            {
                type: "fluid_stack",
                amount: 25,
                fluid: "minecraft:lava"
            }
        ],
        results: [
            {
                item: {
                    id: "minecraft:cobbled_deepslate"
                }
            }
        ]
    });

    event.custom({
        type: "create:compacting",
        ingredients: [
            {
                amount: 2,
                item: "minecraft:cobblestone"
            },
            {
                type: "fluid_stack",
                amount: 25,
                fluid: "minecraft:water"
            }
        ],
        results: [
            {
                item: {
                    id: "minecraft:tuff"
                }
            }
        ]
    });
});