import { ArrowDownSVG } from '../../../assets/icons/index'
import {
  BasicColors,
  // linechartDaysOfWeek,
  periodTimeDropdown,
  strings,
  windowW,
  log,
} from '../../../common/index'
import { Text } from '../../../components/index'
import { scale, toFarsiNumber } from '../../../helper/index'
import React, { useEffect, useState } from 'react'
import { showMessage } from 'react-native-flash-message'
import { View } from 'react-native'
import { getFormatedDate } from 'react-native-modern-datepicker'
import { LineChart } from 'react-native-chart-kit'
import { Dropdown } from 'react-native-material-dropdown'
import styles from '../styles'
import { useAPI, useRedux } from '../../../hooks/index'
let startJalali : any
let endJalali : any
let chartId : any

export const useComponent = (props) => {

const { navigation , route } = props
let id =  route.params ?  route.params.id : ''

  const {
    containerDropdown,
    styleDropdown,
    itemTextDropdown,
    pickerDropdown,
    arrowDownSvg,
    numberText,
    dropdownView,
    timeText,
  } = styles

  const { athleteChartAPI, trainerChartAPI } = useAPI()
  const [selectedPeriod, setSelectedPeriod] = useState(strings.Aweek)
  const [chartData, setChartData] = useState([0])
  const { Get } = useRedux()
  const { profileId , userType } = Get().user

  useEffect(() => {
    // calculateDates()
    if ( selectedPeriod ==strings.Ayear){
      setChartData([
        100,50 ,60, 50 , 40 , 30 , 20 , 40 ,50 , 60 
      ])
    }else if ( selectedPeriod ==strings.Amonth){
      setChartData([
        50 , 40 ,40 ,20 ,30 ,40 ,70 ,60
      ])
    }else if ( selectedPeriod==strings.Aweek) {
      setChartData([
     20 ,40 ,40 ,50 ,50 , 70 ,90
      ])
    }
  }, [selectedPeriod])

  const renderPeriodTime = (key) => {
    switch (key) {
      case strings.Aweek:
        return 7;
      case strings.Ayear:
        return 365;
      case strings.Amonth:
        return 30;
      default:
        return;
    }
  }

  const calculateDates = () => {
    let endDate = new Date().getFullYear() + '-' + `${new Date().getMonth() + 1}` + '-' + new Date().getDate()
    let startMiliSecondDay = new Date().getTime() - renderPeriodTime(selectedPeriod) * 86400000
    let newDate = new Date(startMiliSecondDay)
    let startDate = newDate.getFullYear() + '-' + `${newDate.getMonth() + 1}` + '-' + newDate.getDate()
    startJalali = getFormatedDate(new Date(startMiliSecondDay),'jYYYY/jMM/jDD')
    endJalali = getFormatedDate(new Date(), 'jYYYY/jMM/jDD')
    getChartData(startDate, endDate)
  }

  const chartBadRequest=(err)=>{
    log(err.response,'sdfsdfjsdkjh')
    if (Number(err.response.status)==405){
      navigation.navigate('AthleteServices')
    }
  }

  const getChartData = async (start_date: string, end_date: string) => {
    let chartData = {
      start_date: start_date ,
      end_date: end_date ,
    }
    if ( userType=='Athlete' ){
      chartId = profileId
    }else if ( userType=='Trainer' ){
      log('trainer inja')
      chartId = id
    }
    log(chartId,'chartId3423')
    const chartDataVar = await athleteChartAPI(chartId, chartData , chartBadRequest)
    log(chartDataVar,'chartDataVar7987')
    makeArrayForChart(chartDataVar)
  }

  const makeArrayForChart = (data) => {
    let dataArray = []
    for (let perRecord of data) {
      dataArray.push(Number(perRecord.record))
    }
    if ( dataArray==[] ){
      showMessage({
        message: `${strings.noRecordFound}\n${strings.addNewRecordToServer}`,
        type: 'danger',
        duration: 2500,
      })
    }
    dataArray.length!==0 ? setChartData(dataArray) : setChartData([0])
  }

  const CustomDropdown = () => {
    return (
      <View style={dropdownView}>
        <Dropdown
          fontSize={14}
          style={styleDropdown}
          pickerStyle={pickerDropdown}
          itemTextStyle={itemTextDropdown}
          selectedItemColor={selectedPeriod}
          inputContainerStyle={{
            borderBottomColor: 'transparent',
            borderColor: 'transparent',
            borderWith: 0,
          }}
          containerStyle={containerDropdown}
          // baseColor={BasicColors.white}
          labelFontSize={0}
          dropdownOffset={{ top: 0, left: 17 }}
          onChangeText={(value: string) => {
            console.log(value,'value');
            
            setSelectedPeriod(value)
          }}
          value={selectedPeriod}
          renderAccessory={renderAccessoryDropdown}
          dropdownPosition={-3.9}
          data={periodTimeDropdown}
        />
      </View>
    )
  }

  const renderAccessoryDropdown = () => {
    return <ArrowDownSVG width={8.75} height={18.45} style={arrowDownSvg} />
  }

  const CustomLineChart = () => {
    return (
      <View style={{ marginTop: 52 }}>
        <Text type="medium" size="xSmall" style={numberText}>
          {strings.number}
        </Text>
        <LineChart
          formatYLabel={(value) => toFarsiNumber(value)}
          withVerticalLines={false}
          data={{
            labels: [],
            // labels: chartData,
            datasets: [
              {
                data: chartData ,
              },
            ],
          }}
          getDotProps={(dataPoint, index) => ({
            strokeDashoffset: 30,
            r: index == chartData.length - 1 ? '5' : '0',
            stroke: index == chartData.length - 1 ? BasicColors.black : null,
            strokeWidth: index == chartData.length - 1 ? 1.5 : 0,
          })}
          height={scale(187.2)}
          width={scale(286)}
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            decimalPlaces: 0,
            fillShadowGradient: 'white',
            backgroundGradientFrom: BasicColors.white,
            backgroundGradientTo: BasicColors.white,
            color: (opacity = 1) => `rgba(199, 65, 123, ${opacity})`,
            labelColor: (opacity) => `rgba(134, 137, 191, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForLabels: {
              fontFamily: 'Vazir',
              fontSize: 9,
            },
            propsForBackgroundLines: {
              stroke: 'purple',
              strokeWidth: '0.5',
            },
          }}
          bezier
          style={{
            marginLeft: (windowW - scale(306)) / 2,
            borderRadius: 16,
          }}
        />
        <Text type="medium" size="xSmall" style={timeText}>
          {strings.time}
        </Text>
      </View>
    )
  }

  return {
    CustomDropdown,
    CustomLineChart,
    startJalali,
    endJalali,
  }
}

export default useComponent
