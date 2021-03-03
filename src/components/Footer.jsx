import "../css/footer.css"

export default function Footer() {
    return (
        <div className="footer">
            <a href="https://rs.school/react/"
                rel="noreferrer"
                target="_blank">
                <img src="https://rs.school/images/rs_school_js.svg"
                    alt="course-logo" />
            </a>
            <div className="text">2021</div>
            <a href="https://github.com/petrgali"
                rel="noreferrer"
                target="_blank">
                <img src="https://cdn.iconscout.com/icon/free/png-256/github-153-675523.png" />
            </a>
        </div>
    )
}