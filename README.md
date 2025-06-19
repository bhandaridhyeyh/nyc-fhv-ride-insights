# 🚕💡 𝗕𝗶𝗴 𝗗𝗮𝘁𝗮 + 𝗔𝗪𝗦 = 𝗦𝗺𝗮𝗿𝘁 𝗗𝗲𝗰𝗶𝘀𝗶𝗼𝗻𝘀 𝗶𝗻 𝗨𝗿𝗯𝗮𝗻 𝗠𝗼𝗯𝗶𝗹𝗶𝘁𝘆!

### Dashboard Link: _https://fhv-ride-insights.vercel.app_

This project is a data-driven business intelligence dashboard developed to optimize ride-hailing operations and improve urban service planning. Using the massive **5.4 GB NYC For-Hire Vehicle (FHV)** dataset containing **~239 million records**, it uncovers actionable insights on passenger demand, peak hours, route patterns, revenue distribution, and operational efficiency through **big data analysis**, **interactive visualizations**, and **predictive modeling** with **time series forecasting**.

---

## 🛠️ Tech Stack & Tools

- **Python** (Pandas, PyAthena, Matplotlib, Seaborn, Plotly)
- **AWS S3** – Storage for large Parquet dataset
- **AWS Athena** – Scalable querying over big data using SQL
- **AWS Cloud9 + Jupyter Notebook** – For interactive data visualization
- **AWS SageMaker AI** – For predictive ML modeling
- **Exponential Smoothing / ML Models** – For time series forecasting

---

## 📊 Features & Highlights

- 🔍 **Exploratory Data Analysis & Trends:**
  - Hourly, Daily, Weekly, Monthly trip patterns
  - Peak zones and time slots for pickups/dropoffs
  - Revenue and driver compensation trends

- 🧠 **Predictive Modeling Insights:**
  - 🔢 **Demand Forecasting**: Optimal driver dispatch for zones
  - 💸 **Fare Anomaly Detection**: Detect suspicious pricing
  - 💼 **Company-wise Revenue Forecasting**: 24-hr business prediction
  - 🕒 **Trip Duration Prediction**: Estimated arrival time per trip

- 📈 **Interactive Visual Dashboards:**
  - Built using Jupyter & visualization libraries to present data in intuitive formats

---

## 📦 Dataset Overview

- Source: [NYC Taxi & Limousine Commission](https://www.nyc.gov/site/tlc/about/tlc-trip-record-data.page)
- Format: **Parquet**
- Size: **5.4 GB** | Rows: **239 million+** | Columns: **15**
- Dataset captures:
  - Dispatching base (e.g., Uber, Lyft)
  - Timestamps (pickup/dropoff)
  - Pickup/dropoff zones
  - Trip miles, duration
  - Fare breakdown (taxes, tolls, surcharges, tips)
  - Final driver pay

### 🧮 Key Columns

| Column | Description |
|--------|-------------|
| `dispatching_base_num` | FHV base/company (e.g., Uber, Lyft) |
| `pickup_datetime` / `dropoff_datetime` | Trip start/end time |
| `pulocationid` / `dolocationid` | Pickup/Dropoff zone ID |
| `trip_miles` / `trip_time` | Trip length and duration |
| `base_passenger_fare` | Core fare excluding extras |
| `tolls`, `tips`, `sales_tax`, `airport_fee`, `congestion_surcharge`, `bcf` | Additional charges |
| `driver_pay` | Final driver payout |

---

## 📌 Business Insights & Actions

| 📊 Metric | 💡 Insight | ✅ Action |
|----------|------------|----------|
| **Hourly Trip Volume** | Peak demand at 6–8 AM and 5–7 PM | Dispatch more drivers during commute hours |
| **Busiest Days** | Fridays & Saturdays top in trips & revenue | Scale staff and dynamic pricing on weekends |
| **Top Zones** | JFK Airport, Midtown Manhattan | Allocate fleet near airports and downtown |
| **Trip Duration Pattern** | Stable except longer durations on weekends | Inform ETA predictions and surge planning |
| **Revenue Trends** | Dec & summer months lead in revenue | Plan promos around seasonal highs |
| **Tips Behavior** | Tips spike on weekend nights | Promote premium services during these hours |
| **Uber vs Lyft** | Uber dominates in trips & revenue | Analyze Lyft’s pricing strategy |
| **WAV Usage** | Steady demand near hospitals/daytime | Ensure accessibility vehicle availability |
| **Anomaly Detection** | Fare mismatches spotted | Flag for billing or policy review |

---

## 🧪 Predictive Modeling with AWS SageMaker

| Model | Goal | Sample Outcome |
|-------|------|----------------|
| 📍 **Demand Forecasting** | Estimate ride requests by zone/time | “2571 rides expected from zone 132 at 5 PM” |
| ⚠️ **Fare Anomaly Detection** | Spot incorrect fare entries | “$42 for 64-min/155 miles → undercharged” |
| 💼 **Revenue Forecasting** | Company-wise 24hr prediction | “Uber peaks 5–7 PM, Lyft surges at 6 AM” |
| ⏱️ **ETA Prediction** | Predict trip duration | “ETA: 1024 secs ~ 17.07 mins” |

---

## 🗂 AWS Setup Summary

- **S3 Bucket**: `nyc-fhv-data-bucket` | Region: `us-east-1`
- **Athena DB/Table**: `nyc_fhv.trips`
- **Cloud9 Environment**: `fhv-big-data-viz` | Instance: `t3.small`
- **SageMaker Instance**: `MyNotebook` | Type: `ml.m4.large`

---

## 🧑‍💻 Author

<table>
  <tr>
    <td>
      <strong>Dhyey Bhandari</strong><br/>
      📬 <a href="mailto:bhandaridhyeyh@gmail.com">bhandaridhyeyh@gmail.com</a><br/>
      🌐 <a href="https://www.linkedin.com/in/dhyey-bhandari-a7070b245/" target="_blank">LinkedIn</a><br/>
    </td>
  </tr>
</table>

---
