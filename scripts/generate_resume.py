from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.utils import ImageReader
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "client" / "public" / "media" / "Ankit_Kumar_Singh_Resume.pdf"
PHOTO = ROOT / "client" / "public" / "media" / "ankit-profile-formal.jpeg"


def draw_wrapped_text(pdf, text, x, y, max_width, font_name="Helvetica", font_size=10, leading=15):
    words = text.split()
    line = ""
    pdf.setFont(font_name, font_size)

    for word in words:
        candidate = f"{line} {word}".strip()
        if pdf.stringWidth(candidate, font_name, font_size) <= max_width:
            line = candidate
        else:
            pdf.drawString(x, y, line)
            y -= leading
            line = word

    if line:
        pdf.drawString(x, y, line)
        y -= leading

    return y


def section_title(pdf, text, x, y):
    pdf.setFillColor(colors.HexColor("#0E8F73"))
    pdf.setFont("Helvetica-Bold", 12.5)
    pdf.drawString(x, y, text.upper())
    pdf.setStrokeColor(colors.HexColor("#D4E6E1"))
    pdf.setLineWidth(1)
    pdf.line(x, y - 5, 560, y - 5)
    return y - 22


def bullet_list(pdf, items, x, y, max_width):
    for item in items:
        pdf.setFillColor(colors.HexColor("#142033"))
        pdf.circle(x, y + 4, 2, stroke=0, fill=1)
        y = draw_wrapped_text(pdf, item, x + 10, y, max_width - 10)
        y -= 5
    return y


def main():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    pdf = canvas.Canvas(str(OUTPUT), pagesize=A4)
    width, height = A4

    pdf.setFillColor(colors.HexColor("#F7F2EA"))
    pdf.rect(0, 0, width, height, fill=1, stroke=0)

    pdf.setFillColor(colors.HexColor("#15263D"))
    pdf.rect(0, height - 140, width, 140, fill=1, stroke=0)

    if PHOTO.exists():
        image = ImageReader(str(PHOTO))
        pdf.drawImage(
            image,
            428,
            height - 118,
            width=98,
            height=108,
            mask="auto",
            preserveAspectRatio=True,
            anchor="c",
        )

    pdf.setFillColor(colors.white)
    pdf.setFont("Helvetica-Bold", 24)
    pdf.drawString(42, height - 52, "Ankit Kumar Singh")
    pdf.setFont("Helvetica", 12)
    pdf.drawString(42, height - 75, "Web Developer and Accounting Professional")
    pdf.drawString(42, height - 95, "Email: Ankitdevx1@gmail.com | Phone: +91 9241930806")
    pdf.drawString(42, height - 114, "Current role: Bright Paper Products | DOB: 14 November 2004")

    y = height - 166
    y = section_title(pdf, "Professional Summary", 40, y)
    y = draw_wrapped_text(
        pdf,
        "Motivated early-career professional with web development learning, DSA practice, and two years of accounting experience. Focused on building premium-looking websites, useful dashboards, invoicing tools, and business-oriented interfaces that combine clean UI with practical workflow thinking.",
        40,
        y,
        520,
        font_size=10.3,
        leading=15,
    )

    y -= 8
    y = section_title(pdf, "Skills", 40, y)
    skills = [
        "Web: HTML, CSS, Java, C++, DSA fundamentals, responsive UI thinking",
        "Accounting: Tally, Microsoft Excel, ledger handling, invoice support, reporting support",
        "Professional: communication, accuracy, business understanding, disciplined execution"
    ]
    y = bullet_list(pdf, skills, 46, y, 514)

    y = section_title(pdf, "Experience", 40, y)
    y = draw_wrapped_text(
        pdf,
        "Bright Paper Products - currently contributing to accounting and operational workflows with two years of practical business exposure in records, calculations, worksheet support, and organized day-to-day process handling.",
        40,
        y,
        520,
        font_name="Helvetica-Bold",
        font_size=10.3,
        leading=15,
    )

    y -= 8
    y = section_title(pdf, "Education and Training", 40, y)
    education = [
        "10th from St. Joseph's High School, Maharajganj",
        "12th from Ram Jaipal College, Chhapra",
        "B.A. English Honours ongoing",
        "DSA and web development from a private institute",
        "Accounting studies from institute training"
    ]
    y = bullet_list(pdf, education, 46, y, 514)

    y = section_title(pdf, "Project Highlights", 40, y)
    projects = [
        "Aksis AI Desk - personalized assistant concept for interview prep, learning guidance, and workflow support",
        "OpsBoard Pro - operations dashboard for task ownership, priority handling, and progress visibility",
        "BrightBooks Control - accounting dashboard with category tracking, totals, and balance insights",
        "Invoice Studio Pro - billing interface with client details, GST, and export-ready invoice summary",
        "Revenue Insight Lab - business utility suite for GST, margin, EMI, and savings calculations"
    ]
    bullet_list(pdf, projects, 46, y, 514)

    pdf.showPage()
    pdf.save()


if __name__ == "__main__":
    main()
