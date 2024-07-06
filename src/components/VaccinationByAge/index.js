import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'
import './index.css'

const VaccinationByAge = props => {
  const {content} = props
  return (
    <div className="graph">
      <h1 className="sub-heading">Vaccination by Age</h1>
      <div className="sub-graph">
          <PieChart width={1000} height={300}>
            <Pie
              data={content}
              startAngle={0}
              endAngle={360}
              innerRadius="0%"
              outerRadius="100%"
              dataKey="count"
            >
              <Cell name="18-44" fill="#2d87bb" />
              <Cell name="44-60" fill="#a3df9f" />
              <Cell name="Above 60" fill="#2cc6c6" />
            </Pie>
            <Legend
              iconType="circle"
              wrapperStyle={{
                paddingTop: 80,
              }}
            />
          </PieChart>
      </div>
    </div>
  )
}

export default VaccinationByAge
