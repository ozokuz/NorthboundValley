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
                amount: 25,
                fluid: "minecraft:lava"
            }
        ],
        results: [
            {
                item: "minecraft:netherrack"
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
                amount: 25,
                fluid: "minecraft:lava"
            }
        ],
        results: [
            {
                item: "minecraft:cobbled_deepslate"
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
                amount: 25,
                fluid: "minecraft:water"
            }
        ],
        results: [
            {
                item: "minecraft:tuff"
            }
        ]
    });

    event.custom({
        type: "create:compacting",
        ingredients: [
            {
                item: "minecraft:gravel"
            },
            {
                amount: 3,
                item: "minecraft:bonemeal"
            },
            {
                amount: 25,
                fluid: "minecraft:lava"
            }
        ],
        results: [
            {
                item: "minecraft:calcite"
            }
        ]
    });
});