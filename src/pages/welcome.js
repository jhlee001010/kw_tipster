import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Welcome.css"; // css import

function Welcome() {
  const [studentId, setStudentId] = useState("");
  const [year, setYear] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (studentId && year) {
      navigate("/Dashboard"); // 입력 후 다음 페이지로 이동
    } else {
      alert("학번과 학년을 입력해주세요.");
    }
  };

  return (
    <div className="welcome-container">
      <h1 className="kredit-title">KREDIT</h1>
      <form onSubmit={handleSubmit}>

        <div className="stdnum-container">

          <label>학번</label>
          <select value={studentId} onChange={(e) => setStudentId(e.target.value)} required>
            <option value="">학번</option>
            <option value="21">21학번</option>

          </select>

        </div>
        <div className="gradeyear-container">
          <label>현재 학년</label>
          <select value={year} onChange={(e) => setYear(e.target.value)} required>
            <option value="">학년</option>
            <option value="1">1학년</option>
            <option value="2">2학년</option>
            <option value="3">3학년</option>
            <option value="4">4학년</option>
            <option value="ect">추가 학기</option>
          </select>
        </div>
        <button type="submit">다음</button>

      </form>
    </div >
  );
}

export default Welcome;
