getText(data_view){
		var extra = "";
		if (data.onchange != undefined) {
			extra += ` onchange="${data.onchange}"`
		}
		if (data.onkeyup != undefined) {
			extra += ` onkeyup="${data.onkeyup}(this)"`
		}
		if (data.placeholder != undefined) {
			extra += ` placeholder="${data.placeholder}"`
		}
		if (data.data_value != undefined) {
			extra += ` value="${data.data_value}"`
		}
		var class_css = "input-full mt-1 mb-3";

		if (data.css != undefined) {
			class_css = data.css;
		}
		this.id_form.push(data.id);
		return `
			<input type="text" id="${data.id}" class="${class_css}"${extra} autocomplete="off">
		`
}
