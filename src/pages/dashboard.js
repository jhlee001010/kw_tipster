import "../style/Dashboard.css"; // css import

function Dashboard() {
    return (
        <div>
            {/* 상단 배너 */}
            <header className="header-banner">
                <div className="logo-container">
                    <img src="/mdImage/mascot_.png" alt="Left Logo" className="logo-leftimage" />
                    
                    <div className="logo-text">
                        <a href="http://osskwboj.ap-northeast-2.elasticbeanstalk.com/">K B S</a>
                    </div>

                    <img 
                        src="/mdImage/mascot2_.png" 
                        alt="Right Logo" 
                        className="logo-rightimage" 
                        style={{ marginRight: "30px" }} 
                    />

                    <div className="rank_link">
                        <a href="medalranking" className="rank_link"> {/* 올바른 링크 추가해야 함 */}
                            랭킹
                        </a>
                    </div>

                    <div className="margin_1"></div>

                    <div className="problem_link">
                        <a href="todayranking" className="problem_link"> {/* 올바른 링크 추가해야 함 */}
                            오늘의 문제
                        </a>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Dashboard;
