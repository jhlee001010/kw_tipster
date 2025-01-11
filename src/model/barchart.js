import React, { useRef, useEffect } from "react";

function BarChart({ data, labels, width = 500, height = 300 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Canvas 크기 설정
    canvas.width = width;
    canvas.height = height;

    // 기본 설정
    const barWidth = 40;
    const barSpacing = 20;
    const maxValue = Math.max(...data);
    const chartHeight = height - 50; // 아래 여백
    const chartWidth = width - 50; // 왼쪽 여백

    // 배경 초기화
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, width, height);

    // 축 그리기
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(40, 10); // Y축 시작점
    ctx.lineTo(40, chartHeight); // Y축 끝점
    ctx.lineTo(chartWidth, chartHeight); // X축
    ctx.stroke();

    // 막대 그리기
    data.forEach((value, index) => {
      const barHeight = (value / maxValue) * (chartHeight - 20); // 비율 계산
      const x = 50 + index * (barWidth + barSpacing); // 막대 X좌표
      const y = chartHeight - barHeight;

      // 막대
      ctx.fillStyle = "#36A2EB";
      ctx.fillRect(x, y, barWidth, barHeight);

      // 값 텍스트
      ctx.fillStyle = "#000000";
      ctx.font = "14px Arial";
      ctx.fillText(value, x + barWidth / 4, y - 10);

      // 라벨 텍스트
      ctx.fillText(labels[index], x + barWidth / 4, chartHeight + 20);
    });
  }, [data, labels, width, height]);

  return <canvas ref={canvasRef} style={{ border: "1px solid #ddd" }} />;
}

export default BarChart;
