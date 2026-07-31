(function() {
  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim();
  var accent2 = style.getPropertyValue('--accent2').trim();
  var accent3 = style.getPropertyValue('--accent3').trim();
  var ink = style.getPropertyValue('--ink').trim();
  var muted = style.getPropertyValue('--muted').trim();
  var rule = style.getPropertyValue('--rule').trim();
  var bg2 = style.getPropertyValue('--bg2').trim();
  var bg = style.getPropertyValue('--bg').trim();

  // --- Chart: Gamification Metrics ---
  var chartGam = document.getElementById('chart-gamification');
  if (chartGam) {
    var chart1 = echarts.init(chartGam, null, { renderer: 'svg' });
    chart1.setOption({
      animation: false,
      tooltip: {
        trigger: 'axis',
        appendToBody: true,
        backgroundColor: bg2,
        borderColor: rule,
        textStyle: { color: ink, fontSize: 13 },
        axisPointer: { type: 'shadow' }
      },
      grid: { left: '3%', right: '8%', bottom: '3%', top: '10%', containLabel: true },
      xAxis: {
        type: 'value',
        axisLabel: { color: muted, fontSize: 12 },
        axisLine: { lineStyle: { color: rule } },
        splitLine: { lineStyle: { color: rule, type: 'dashed' } }
      },
      yAxis: {
        type: 'category',
        data: [
          '低参与用户占比下降',
          '留存效率提升',
          '游戏贡献参与时间占比',
          'Bingo 参与时间倍数',
          '比赛型游戏回归率倍数',
          'Tap-a-Kite 参与率'
        ],
        axisLabel: { color: ink, fontSize: 13 },
        axisLine: { lineStyle: { color: rule } }
      },
      series: [{
        type: 'bar',
        data: [
          { value: 20, itemStyle: { color: accent2 }, label: { formatter: '从70%→<50%', position: 'right', color: muted, fontSize: 12 } } },
          { value: 20, itemStyle: { color: accent3 }, label: { formatter: '高达20%', position: 'right', color: muted, fontSize: 12 } } },
          { value: 22.5, itemStyle: { color: accent }, label: { formatter: '20-25%', position: 'right', color: muted, fontSize: 12 } } },
          { value: 200, itemStyle: { color: accent }, label: { formatter: '约2倍', position: 'right', color: muted, fontSize: 12 } } },
          { value: 200, itemStyle: { color: accent2 }, label: { formatter: '约2倍', position: 'right', color: muted, fontSize: 12 } } },
          { value: 46.5, itemStyle: { color: accent3 }, label: { formatter: '46.5%', position: 'right', color: muted, fontSize: 12 } } }
        ],
        barWidth: '50%',
        label: {
          show: true,
          position: 'right',
          color: ink,
          fontSize: 13,
          fontWeight: 600
        },
        itemStyle: {
          borderRadius: [0, 4, 4, 0]
        }
      }]
    });
    window.addEventListener('resize', function() { chart1.resize(); });
  }

  // --- Chart: Core Metrics Growth ---
  var chartMetrics = document.getElementById('chart-metrics');
  if (chartMetrics) {
    var chart2 = echarts.init(chartMetrics, null, { renderer: 'svg' });
    chart2.setOption({
      animation: false,
      tooltip: {
        trigger: 'axis',
        appendToBody: true,
        backgroundColor: bg2,
        borderColor: rule,
        textStyle: { color: ink, fontSize: 13 },
        axisPointer: { type: 'shadow' }
      },
      grid: { left: '3%', right: '10%', bottom: '3%', top: '5%', containLabel: true },
      xAxis: {
        type: 'value',
        axisLabel: { color: muted, fontSize: 12, formatter: '{value}%' },
        axisLine: { lineStyle: { color: rule } },
        splitLine: { lineStyle: { color: rule, type: 'dashed' } }
      },
      yAxis: {
        type: 'category',
        data: [
          'Push 总量',
          '注册转化率',
          '平均日活 DAU',
          'App 屏幕浏览'
        ],
        axisLabel: { color: ink, fontSize: 14 },
        axisLine: { lineStyle: { color: rule } }
      },
      series: [{
        type: 'bar',
        data: [
          { value: 250, itemStyle: { color: accent2 } },
          { value: 36.72, itemStyle: { color: accent3 } },
          { value: 62.45, itemStyle: { color: accent } },
          { value: 93.89, itemStyle: { color: accent } }
        ],
        barWidth: '45%',
        label: {
          show: true,
          position: 'right',
          color: ink,
          fontSize: 14,
          fontWeight: 700,
          formatter: '+{c}%'
        },
        itemStyle: {
          borderRadius: [0, 6, 6, 0]
        }
      }]
    });
    window.addEventListener('resize', function() { chart2.resize(); });
  }
})();