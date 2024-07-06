import {Component} from 'react'
import VaccinationByAge from '../VaccinationByAge'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationCoverage from '../VaccinationCoverage'
import Loader from 'react-loader-spinner'
import './index.css'

const apiStatusChange = [
  {initial: 'INITIAL'},
  {success: 'SUCCESS'},
  {failure: 'FAILURE'},
  {loading: 'LOADING'},
]

class CowinDashboard extends Component {
  state = {
    apiStatus: apiStatusChange[0].initial,
    vaccineReport: '',
    vaccinationAge: '',
    vaccinationGender: '',
  }

  componentDidMount() {
    this.getProducts()
  }

  getProducts = async () => {
    this.setState({apiStatus: apiStatusChange[3].loading})
    const vaccinationDataApiUrl = 'https://apis.ccbp.in/covid-vaccination-data'
    const element = await fetch(vaccinationDataApiUrl)
    const data = await element.json()

    console.log(data)

    if (element.ok === true) {
      const {
        last_7_days_vaccination,
        vaccination_by_age,
        vaccination_by_gender,
      } = data
      const recentVaccinationreport = last_7_days_vaccination.map(item => ({
        vaccineDate: item.vaccine_date,
        dose1: item.dose_1,
        dose2: item.dose_2,
      }))
      this.setState({
        apiStatus: apiStatusChange[1].success,
        vaccineReport: recentVaccinationreport,
        vaccinationAge: vaccination_by_age,
        vaccinationGender: vaccination_by_gender,
      })
    } else {
      this.setState({apiStatus: apiStatusChange[2].failure})
    }
  }

  renderStatistics = () => {
    const {vaccineReport, vaccinationAge, vaccinationGender} = this.state
    return (
      <div className="data-container">
        <VaccinationCoverage content={vaccineReport} />
        <VaccinationByGender content={vaccinationGender} />
        <VaccinationByAge content={vaccinationAge} />
      </div>
    )
  }

  renderFailure = () => (
    <div className="failure-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure-icon"
      />
      <h1 className="sub-heading">Something went wrong</h1>
    </div>
  )

  renderLoading = () => (
    <div className="products-loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  selectOne = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusChange[1].success:
        return this.renderStatistics()
      case apiStatusChange[2].failure:
        return this.renderFailure()
      case apiStatusChange[3].loading:
        return this.renderLoading()
      default:
        return <></>
    }
  }

  render() {
    return (
      <div className="graph-container">
        <div className="sub">
          <div className="horizantal">
            <img
              src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
              alt="website logo"
              className="website-logo"
            />
            <p className="website-text">Co-Win</p>
          </div>
          <h1 className="description">CoWIN Vaccination in India</h1>
          {this.selectOne()}
        </div>
      </div>
    )
  }
}

export default CowinDashboard
