const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');
const { mergeConfig } = require('metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const baseConfig = getDefaultConfig(__dirname)

const extraConfig = {
    resolver: {
      sourceExts: [...baseConfig.resolver.sourceExts, "cjs", "mjs"],
      assetExts: [...baseConfig.resolver.assetExts, "glb", "gltf", "png", "jpg", "ttf"],
    },
};

const merged = mergeConfig(baseConfig, extraConfig);
const finalConfig = withNativeWind(merged, { input: "./src/styles/global.css" });

module.exports = finalConfig;