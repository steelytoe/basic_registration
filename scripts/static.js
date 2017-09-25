/* expected output 
[
	{data : {evpaName: 'saya 1'}, category: 1, attributes : {evpaAddress: 'bumi'}},
	{data : {evpaName: 'saya 2'}, category: 1, attributes : {evpaAddress: 'bumi'}}
]
*/
var participantFields = {
	"data" : {
		"evpaName": {
			"type": "text",
			"validate": "string",
			"title": "Nama Peserta",
			"minLength": "5",
			"maxLength": "100",
			"mandatory": "1",
			"dataIndex": "1"
		},
		"evpaPhone": {
			"type": "text",
			"validate": "phone",
			"title": "Nomor Handphone",
			"minLength": "6",
			"maxLength": "16",
			"mandatory": "1",
			"dataIndex": "2"
		},
		"evpaEmail": {
			"type": "email",
			"validate": "email",
			"title": "Email",
			"minLength": "5",
			"maxLength": "50",
			"mandatory": "1",
			"dataIndex": "1"
		},
		"evpaGender": {
			"type": "options",
			"title": "Jenis Kelamin",
			"mandatory": "1",
			"dataIndex": "1",
			"options" : {
				"data" : {
					1 : "Pria",
					2 : "Wanita"	
				}
			}
		},
		"evpaEvncId": {
			"title": "Kategori"
		}
	},
	"attributes" : {
		"evpaBirthPlace": {
			"type": "text",
			"validate": "string",
			"title": "Tempat Lahir",
			"minLength": "5",
			"maxLength": "25",
			"mandatory": "1",
			"dataIndex": "1"
		},
		"evpaBirthDate": {
			"type": "date",
			"validate": "YYYYMMDD",
			"title": "Tanggal Lahir",
			"dataIndex": "1"
		},
		"evpaJersey": {
			"type": "options",
			"title": "Jersey",
			"dataIndex": "1",
			"mandatory": "1",
			"options" : {
				"data" : {
					1 : "S",
					2 : "M"	
				}
			},
		},
		"evpaNationality": {
			"type": "options",
			"title": "Warga Negara",
			"mandatory": "1",
			"dataIndex": "1",
			"options" : {
				"data" : {
					1 : "Indonesia",
					2 : "Inggris"	
				}
			}
		}
	}
};