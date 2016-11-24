module.exports = {
	floca: {
		appName: 'Trader',
		entityName: 'Assistant'
	},
	server: {
		active: false,
		port: 8080
	},
	harcon: {
		bender: {
			enabled: true
		},
		FireBender: {
			defs: require('./bending')
		}
	},
	radiation: {
		rest: {
			harconrpcPath: '/Assistant'
		},
		websocket: {
			socketPath: '/Assistant'
		}
	}
}
