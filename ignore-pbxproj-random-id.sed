s![0-9A-F]{24}( /[*])!RANDOM_ID_REPLACED\1!g
s!(baseConfigurationReference = )[0-9A-F]{24};$!\1RANDOM_ID_REPLACED;!g
