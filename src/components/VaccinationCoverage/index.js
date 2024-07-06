import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'

import './index.css'

const VaccinationCoverage = props => {
  const {content} = props

  return (
    <div className="graph">
      <h1 className="sub-heading">Vaccination Coverage</h1>
      <div className="sub-graph">
          <BarChart
            data={content}
            margin={{
              top: 5,
            }}
            width={1000}
            height={300}
          >
            <XAxis
              dataKey="vaccineDate"
              tick={{
                stroke: '#9483b8',
                strokeWidth: 1,
              }}
            />
            <YAxis
              tick={{
                stroke: '#9483b8',
                strokeWidth: 0,
              }}
            />
            <Legend
              wrapperStyle={{
                padding: 30,
              }}
            />
            <Bar dataKey="dose1" name="Dose1" fill="#5a8dee" barSize="20%" />
            <Bar dataKey="dose2" name="Dose2" fill="#f54394" barSize="20%" />
          </BarChart>
      </div>
    </div>
  )
}

export default VaccinationCoverage
