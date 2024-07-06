import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'
import './index.css'

const VaccinationByGender = props => {
  const {content} = props
  return (
    <div className="graph">
      <h1 className="sub-heading">Vaccination by gender</h1>
      <div className="sub-graph">
          <PieChart width={1000} height={300}>
            <Pie
              cx="50%"
              cy="50%"
              data={content}
              startAngle={180}
              endAngle={0}
              innerRadius="50%"
              outerRadius="100%"
              dataKey="count"
            >
              <Cell name="Male" fill="#f54394" />
              <Cell name="Female" fill="#5a8dee" />
              <Cell name="Others" fill="#2cc6c6" />
            </Pie>
            <Legend iconType="circle" />
          </PieChart>
      </div>
    </div>
  )
}

export default VaccinationByGender
