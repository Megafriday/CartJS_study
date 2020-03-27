'use strict';

const data = {
	labels: ['青木', '池田', '宇山', '榎本', '大森'],
	datasets: [{
		label: '国語のテスト',
		data: [78, 64, 35, 90, 83],
		backgroundColor: 'rgba(255,100,100, 0.5)'
	}, {
		label: '社会のテスト',
		data: [80, 52, 29, 80, 93],
		backgroundColor: 'rgba(100,100,2550, 0.5)'
	}]
}

// グラフを描画
const ctx = document.getElementById('chart_cv')
const chart_cv = new Chart(ctx, {
	type: 'bar', // グラフの種類
	data: data, // データ
	options: {}
})