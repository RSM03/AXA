function loadFastPayJS() {
	var DOMContentLoaded_event = document.createEvent("Event")
	DOMContentLoaded_event.initEvent("DOMContentLoaded", true, true)
	window.document.dispatchEvent(DOMContentLoaded_event)
	 
	Fastpay.customize({
				colors: {
				title: '#FFFFFF',
				description: '#FFFFFF',
				header_line: '#738D87',
				inputs_lines: '#333333',
				icon: '#333333',	
				info: '#333333',
				button: '#00008F',
				cvv_info: '#333333',
				header_color: '#738D87',
				}
			});	
}

function callbackFunction(data){	
	if(data){	
		document.getElementById("pagarBotonNext").textContent = 'Realizar Pago';
		window.jQuery('#text').val(data.request_id);
		const e = new Event("change");
		const element = document.querySelector('#text');
		element.dispatchEvent(e);
	}	
}