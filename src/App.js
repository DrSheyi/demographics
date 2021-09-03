import './App.css';
import { useEffect, useState } from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { createDemographics } from './graphql/mutations'
import { listDemographics } from './graphql/queries'
import awsExports from "./aws-exports";
import Submited from './submited';

import {
  Container, 
  TextField, 
  Typography,
  FormControlLabel,
  Radio,
  FormControl,
  RadioGroup,
  FormLabel,
  MenuItem,
  Select,
  Checkbox,
  InputLabel,
  FormGroup,
  FormHelperText,
  Button,
  Fab
} from '@material-ui/core'
import BfaForm from './bfa-form';

           
Amplify.configure(awsExports);
function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [consentvalue, setconsentValue] = useState('');
  const [sex, setSex] = useState('');
  const [ethnicity, setethnicity] = useState('');
  const [education, seteducation] = useState('');
  const [conditions, setconditions] = useState([]);
  const [dominanthand, setdominanthand] = useState('');
  const [suddenDeath, setSuddenDeath] = useState('');
  const [marfans, setmarfans] = useState('');
  const [cpmmr, setcpmmr] = useState('');
  const [cpmmr2, setcpmmr2] = useState('');
  const [uptodateVaccines, setUpToDateVaccines] = useState('');
  const [allergies, setAllergies] = useState('');
  const [allergiesDescription, setAllergiesDecription] = useState('');
  const [allergiesepipen, setAllergiesepipen] = useState('');
  const [medication, setMedication] = useState('');
  const [medicationDescription, setMedicationDescription] = useState('');
  const [nonMedication, setnonMedication] = useState('');
  const [nonMedicationDescription, setnonMedicationDescription] = useState('');
  const [danceHistory, setDanceHistory] = useState([]);
  const [danceWork, setdanceWork] = useState([]);
  const [curCompany, setcurCompany] = useState('');
  const [prevCompany, setprevCompany] = useState('');
  const [mainTypeOfDance, setMainTypeOfDance] = useState([]);
  const [ageBeganDance, setAgeBeganDance] = useState('');
  const [trainning, setTrainning] = useState('');
  const [pointeWork, setPointeWork] = useState('');
  const [numberOfYearsDancing, setnumberOfYearsDancing] = useState('');
  const [numberOfYearsProDancing, setnumberOfYearsProDancing] = useState('');
  const [currentlyPerforming, setCurrentlyPerforming] = useState('');
  const [alterSchedule, setAlteredSchedule] = useState('');
  const [rehearsalHours, setRehearsalHours] = useState('');
  const [dancePerDay, setDancePerDay] = useState('');
  const [performancePerMonth, setPerformancePerMonth] = useState('');
  const [tourWeeks, setTourWeeks] = useState('');
  const [companyEmployedWeeks, setCompanyEmployedWeeks] = useState('');
  const [offseasonTraining, setOffseasonTraining] = useState('');
  const [extraPrograms, setExtraPrograms] = useState([]);
  const [cardioTrainingPerWeek, setCardioTrainingPerWeek] = useState('');
  const [crossTrainingPerWeek, setCrossTrainingPerWeek] = useState('');
  const [warmUp, setWarmUp] = useState('');
  const [musculoskeletalinjury,setMusculoskeletalinjury ] = useState('');
  const [seenBy,setSeenBy ] = useState('');
  const [injuryDiagnosis,setInjuryDiagnosis ] = useState('');
  const [whereInjuryOccured, setWhereInjuryOccured ] = useState('');
  const [surgery,setSurgery ] = useState('');
  const [rehab,setRehab ] = useState('');
  const [resumptionDanceClasses,setResumptionDanceClasses ] = useState('');
  const [returnPerform,setReturnPerform ] = useState('');
  const [continuingProblem,setContinuingProblem ] = useState('');
  const [otherInjuries,setOtherInjuries ] = useState('');
  const [lossPastYear,setLossPastYear ] = useState('');
  const [counseling,setCounseling ] = useState('');
  const [fatigue,setFatigue] = useState('');
  const [troubleSleeping,setTroubleSleeping ] = useState('');
  const [sleepDeprived,setSleepDeprived] = useState('');
  const [nutritionCounseling,setNutritionCounseling] = useState('');
  const [smoking,setSmoking ] = useState('');
  const [smokingCessation,setSmokingCessation ] = useState('');
  const [drinksPerDay,setDrinksPerDay ] = useState('');
  const [drugUse,setDrugUse] = useState('');
  const [worry,setWorry] = useState('');
  const [itemList,setItemList] = useState('');
  const [covid,setCovid] = useState('');
  const [formSubmited,setFormSubmited] = useState(false)

  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };
  const handleCovid = (event) => {
    setCovid(event.target.value);
  };
  const handleLastName = (event) => {
    setLastName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleAge = (event) => {
    setAge(event.target.value);
  };
  const handleConsent = (event) => {
    setconsentValue(event.target.value);
  };
  const handleSex = (event) => {
    setSex(event.target.value);
  };

  const handleEthnicity = (event) => {
    event.preventDefault()
    setethnicity(event.target.value);
  };

  const handleEducation = (event) => {
    seteducation(event.target.value);
  };
  const handleChangeConditions = (event) => {
    console.log(event,'event from conditions')
    if(!conditions.includes(event.target.name)){
      setconditions([...conditions, event.target.name])
    }
    else if(conditions.filter(item => item===event.target.name).length === 1){
    setconditions(conditions.filter(item=>item!==event.target.name));
    }
  };
  const handleDominantHand = (event) => {
    setdominanthand(event.target.value);
  };
  const handleSuddenDeath = (event) => {
    setSuddenDeath(event.target.value);
  };
  const handlecpmmr = (event) => {
    setcpmmr(event.target.value);
  };
  const handlecpmmr2 = (event) => {
    setcpmmr2(event.target.value);
  };
  const handlemarfans = (event) => {
    setmarfans(event.target.value);
  };
  const handleUpToDateVaccines = (event) => {
    setUpToDateVaccines(event.target.value);
  };
  const handleAllergies = (event) => {
    setAllergies(event.target.value);
  };
  const handleAllergiesDescription = (event) => {
    setAllergiesDecription(event.target.value);
  };
  const handleAllergiesEpiPen = (event) => {
    setAllergiesepipen(event.target.value);
  };
  const handleMedication = (event) => {
    setMedication(event.target.value);
  };
  const handleMedicationDescription = (event) => {
    setMedicationDescription(event.target.value);
  };
  const handlenonMedication = (event) => {
    setnonMedication(event.target.value);
  };
  const handlenonMedicationDescription = (event) => {
    setnonMedicationDescription(event.target.value);
  };
  const handleDanceHistory = (event) => {
 
    if(!danceHistory.includes(event.target.name)){
      setDanceHistory([...danceHistory, event.target.name])
    }
    else if(danceHistory.filter(item => item===event.target.name).length === 1){
    setDanceHistory(danceHistory.filter(item=>item!==event.target.name));
    }
  };
  const handleDanceWork = (event) => {
    
    if(!danceWork.includes(event.target.name)){
      setdanceWork([...danceWork, event.target.name])
    }
    else if(danceWork.filter(item => item===event.target.name).length === 1){
    setdanceWork(danceWork.filter(item=>item!==event.target.name));
    }
  };
  const handleCurrentCompany = (event) => {
    setcurCompany(event.target.value);
  };
  const handlePreviousCompany = (event) => {
    setprevCompany(event.target.value);
  };
  const handleMainTypeOfDance = (event) => {
    
    if(!mainTypeOfDance.includes(event.target.name)){
      setMainTypeOfDance([...mainTypeOfDance, event.target.name])
    }
    else if(mainTypeOfDance.filter(item => item===event.target.name).length === 1){
    setMainTypeOfDance(mainTypeOfDance.filter(item=>item!==event.target.name));
    }
  };
  const handleAgeBeganDance = (event) => {
    setAgeBeganDance(event.target.value);
  };
  const handleTrainning = (event) => {
    setTrainning(event.target.value);
  };
  const handlePointeWork = (event) => {
    setPointeWork(event.target.value);
  };
  const handleNumberOfYearsDancing = (event) => {
    setnumberOfYearsDancing(event.target.value);
  };
  const handleNumberOfYearsProDancing = (event) => {
    setnumberOfYearsProDancing(event.target.value);
  };
  const handleCurrentlyPerforming = (event) => {
    setCurrentlyPerforming(event.target.value);
  };
  const handleRehearsalHours= (event) => {
    setRehearsalHours(event.target.value);
  };
  const handleDancePerDay= (event) => {
    setDancePerDay(event.target.value);
  };
  const handlePerformancePerMonth= (event) => {
    setPerformancePerMonth(event.target.value);
  };
  const handleTourWeeks= (event) => {
    setTourWeeks(event.target.value);
  };
  const handleCompanyEmployedWeeks= (event) => {
    setCompanyEmployedWeeks(event.target.value);
  };
  const handleAlteredSchedule= (event) => {
    setAlteredSchedule(event.target.value);
  };
  const handleOffseasonTrainning= (event) => {
    setOffseasonTraining(event.target.value);
  };
  const handleExtraPrograms = (event) => {
    
    if(!extraPrograms.includes(event.target.name)){
      setExtraPrograms([...extraPrograms, event.target.name])
    }
    else if(extraPrograms.filter(item => item===event.target.name).length === 1){
    setExtraPrograms(extraPrograms.filter(item=>item!==event.target.name));
    }
  };
  const handleCardioTrainingPerWeek= (event) => {
    setCardioTrainingPerWeek(event.target.value);
  };
  const handleCrossTrainingPerWeek= (event) => {
    setCrossTrainingPerWeek(event.target.value);
  };
  const handleWarmUP= (event) => {
    setWarmUp(event.target.value);
  };
  const handleMuscleInjury= (event) => {
    setMusculoskeletalinjury(event.target.value);
  };
  const handleSeenBy= (event) => {
    setSeenBy(event.target.value);
  };
  const handleInjuryDiagnosis= (event) => {
    setInjuryDiagnosis(event.target.value);
  };
  const handleWhereInjuryOccured= (event) => {
    setWhereInjuryOccured(event.target.value);
  };
  const handleSurgery= (event) => {
    setSurgery(event.target.value);
  };
  const handleRehab= (event) => {
    setRehab(event.target.value);
  };
  const handleResumptionDanceClasses= (event) => {
    setResumptionDanceClasses(event.target.value);
  };
  const handleReturnPerform= (event) => {
    setReturnPerform(event.target.value);
  };
  const handleContinuingProblem= (event) => {
    setContinuingProblem(event.target.value);
  };
  const handleOtherInjuries= (event) => {
    setOtherInjuries(event.target.value);
  };
  const handleLossPastYear= (event) => {
    setLossPastYear(event.target.value);
  };
  const handleCounseling= (event) => {
    setCounseling(event.target.value);
  };
  const handleFatigue= (event) => {
    setFatigue(event.target.value);
  };
  const handleTroubleSleeping= (event) => {
    setTroubleSleeping(event.target.value);
  };
  const handleSleepDeprived= (event) => {
    setSleepDeprived(event.target.value);
  };
  const handleNutritionCounseling= (event) => {
    setNutritionCounseling(event.target.value);
  };
  const handleSmoking= (event) => {
    setSmoking(event.target.value);
  };
  const handleSmokingCessation= (event) => {
    setSmokingCessation(event.target.value);
  };
  const handleDrinksPerDay= (event) => {
    setDrinksPerDay(event.target.value);
  };
  const handleDrugUse= (event) => {
    setDrugUse(event.target.value);
  };
  const handleWorry= (event) => {
    setWorry(event.target.value);
  };
  
  async function submitForm(e){
      e.preventDefault()
          const form = { 
            "age":age,
            "ageBeganDance":ageBeganDance,
            "allergies":allergies,
            "allergiesDescription":allergiesDescription,
            "allergiesepipen":allergiesepipen,
            "alteredSchedule":alterSchedule,
            "cardioTrainingPerWeek":cardioTrainingPerWeek,
            "companyEmployedWeeks":companyEmployedWeeks,
            "conditions":conditions,
            "consentvalue":consentvalue,
            "continuingProblem":continuingProblem,
            "counseling":counseling,
            "cpmmr":cpmmr,
            "cpmmr2":cpmmr2,
            "crossTrainingPerWeek":crossTrainingPerWeek,
            "currentCompany":curCompany,
            "currentlyPerforming":currentlyPerforming,
            "danceHistory":danceHistory,
            "dancePerDay":dancePerDay,
            "danceWork":danceWork,
            "dominantHand":dominanthand,
            "drinksPerDay":drinksPerDay,
            "drugUse":drugUse,
            "education":education,
            "email":email,
            "ethnicity":ethnicity,
            "extraPrograms":extraPrograms,
            "fatigue":fatigue,
            "firstName":firstName,
            "injuryDiagnosis":injuryDiagnosis,
            "lastName":lastName,
            "lossPastYear":lossPastYear,
            "mainTypeOfDance":mainTypeOfDance,
            "marfans":marfans,
            "medication":medication,
            "medicationDescription":medicationDescription,
            "musculoskeletalinjury":musculoskeletalinjury,
            "nonPrescriptionMedication":nonMedication,
            "nonPrescriptionMedicationDescription":nonMedicationDescription,
            "numberOfYearsDancing":numberOfYearsDancing,
            "numberOfYearsProDancing":numberOfYearsProDancing,
            "nutritionCounseling":nutritionCounseling,
            "offseasonTraining":offseasonTraining,
            "otherInjuries":otherInjuries,
            "performancePerMonth":performancePerMonth,
            "pointeWork":pointeWork,
            "previousCompany":prevCompany,
            "rehab":rehab,
            "rehearsalHours":rehearsalHours,
            "resumptionDanceClasses":resumptionDanceClasses,
            "returnPerform":returnPerform,
            "seenBy":seenBy,
            "sex":sex,
            "sleepDeprived":sleepDeprived,
            "smoking":smoking,
            "smokingCessation":smokingCessation,
            "suddenDeath":suddenDeath,
            "surgery":surgery,
            "tourWeeks":tourWeeks,
            "trainning":trainning,
            "troubleSleeping":troubleSleeping,
            "uptodateVaccines":uptodateVaccines,
            "warmUp":warmUp,
            "whereInjuryOccured":whereInjuryOccured,
            "worry":worry,

           }
         try{ await API.graphql(graphqlOperation(createDemographics, {input: form}))} catch (err) {console.log(err)}
         setFormSubmited(true)
  }
  const reload=(e)=>{
    setFormSubmited(false)
    window.location.reload()

}
  
  //console.log(itemList)
  if(formSubmited===false){ 
  return (
    <div className="App">
      <div id="container">
     
      <form id='form' onSubmit={submitForm}>
      <Typography style={{fontSize:35,fontWeight:900}}>Health Demo Form</Typography>
        <Typography>Enter your First Name:</Typography>
        <TextField  label="First Name" variant="outlined" onChange={handleFirstName}/>

        <Typography>Enter your Last Name:</Typography>
        <TextField  label="Last Name" variant="outlined" onChange={handleLastName} />

        <Typography>Enter your  Age:</Typography>
        <TextField  label="Age" variant="outlined" onChange={handleAge}/>

        <Typography htmlFor="consent">The three questionnaires that you have been asked to answer may be used to assist in your healthcare.
                In addition, the questionnaires may be used in research to improve healthcare for all dancers.
                Any data from these questionnaires will be password protected and de-identified from your name.
                Do you consent for your data to be used for research?
        </Typography>
        <FormControl id='consent' component="fieldset">
        <RadioGroup aria-label="Consent" name="consent"  onChange={handleConsent}>
        <FormControlLabel value="No" control={<Radio />} label="No" />
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        </RadioGroup>
        </FormControl>

        <Typography>Enter your Email Address:</Typography>
        <TextField id="email" label="email" variant="outlined" onChange={handleEmail} />

        <Typography htmlFor="consent">Please select your assigned sex at birth</Typography>
        <FormControl id='sex' component="fieldset">
        <FormLabel component="legend">Sex</FormLabel>
        <RadioGroup aria-label="sex" name="sex"  onChange={handleSex}>
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        </RadioGroup>
        </FormControl>

        <Typography >Please select your Ethnicity</Typography>
        <FormControl id='Ethnicity' variant="outlined" >
        <InputLabel id="demo-simple-select-outlined-label">Ethnicity</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={ethnicity}
          onChange={handleEthnicity}
          label="Ethnicity"
        >
                <MenuItem value="White"> White </MenuItem>
                <MenuItem value="Black or African American"> Black or African American </MenuItem>
                <MenuItem value="American Indian and Alaska Native"> American Indian and Alaska Native </MenuItem>
                <MenuItem value="Asian"> Asian </MenuItem>
                <MenuItem value="Hispanic">Hispanic</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
        </Select>
      </FormControl>
      {/* {ethnicity==="Other"?<TextField variant="outlined" onChange={handleEthnicity} placeholder="Please List your Ethnicity:"></TextField>:null} */}
      
      {/* <Typography htmlFor="height">Enter your height (cm)</Typography>
      <TextField variant="outlined" id="height"/>

      <Typography htmlFor="weight">Enter your weight (lbs)</Typography>
      <TextField variant="outlined" id="weight"/> */}

      {/* <Typography >Select your Education</Typography>
        <FormControl id='Education' variant="outlined" >
        <InputLabel id="demo-simple-select-outlined-label">Education</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={education}
          onChange={handleEducation}
          label="Education"
        >
          <MenuItem value={'High School'}>High School</MenuItem>
          <MenuItem value={'College'}>College</MenuItem>
          <MenuItem value={'Gradauate School'}>Gradauate School</MenuItem>
          <MenuItem value={'Other'}>Other</MenuItem>
        </Select>
      </FormControl> */}
{/* 
      <Typography htmlFor="dominantHand">Please Select your Dominant Hand:</Typography>
        <FormControl id='dominantHand' component="fieldset">
        <RadioGroup aria-label="dominantHand" name="dominantHand"  onChange={handleDominantHand}>
        <FormControlLabel value="right" control={<Radio />} label="Right" />
        <FormControlLabel value="left" control={<Radio />} label="Left" />
        </RadioGroup>
        </FormControl> */}

        <FormControl required id='conditions' component="fieldset">
        <FormLabel component="legend">Please Check all Conditions that Apply to You</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox value='high blood pressure' onChange={handleChangeConditions} name="high blood pressure" />}
            label="High blood pressure"
          />
          <FormControlLabel
            control={<Checkbox  onChange={handleChangeConditions} name="epilepsy seizures" />}
            label="epilepsy seizures"
          />
          <FormControlLabel
            control={<Checkbox  onChange={handleChangeConditions} name="dizziness / fainting" />}
            label="Dizziness / Fainting"
          />
           <FormControlLabel
            control={<Checkbox  onChange={handleChangeConditions} name="scoliosis" />}
            label="Scoliosis"
          />
           <FormControlLabel
            control={<Checkbox  onChange={handleChangeConditions} name="shortnessofbreath" />}
            label="Shortness of breath"
          />
           <FormControlLabel
            control={<Checkbox  onChange={handleChangeConditions} name="depression" />}
            label="Depression"
          />
           <FormControlLabel
            control={<Checkbox  onChange={handleChangeConditions} name="concussion" />}
            label="Concussion"
          />
           <FormControlLabel
            control={<Checkbox  onChange={handleChangeConditions} name="diabetes" />}
            label="Diabetes"
          />
           <FormControlLabel
            control={<Checkbox  onChange={handleChangeConditions} name="heart disease" />}
            label="Heart Disease"
          />
          <FormControlLabel
            control={<Checkbox  onChange={handleChangeConditions} name="concussion" />}
            label="Concussion"
          />
          <FormControlLabel
            control={<Checkbox  onChange={handleChangeConditions} name="cancer" />}
            label="Cancer"
          />
          <FormControlLabel
            control={<Checkbox  onChange={handleChangeConditions} name="concussion" />}
            label="Concussion"
          />
          <FormControlLabel
            control={<Checkbox  onChange={handleChangeConditions} name="stress fractures" />}
            label="Stress Fractures"
          />
          <FormControlLabel
            control={<Checkbox  onChange={handleChangeConditions} name="chest pain" />}
            label="Chest Pain"
          />
          <FormControlLabel
            control={<Checkbox  onChange={handleChangeConditions} name="concussion" />}
            label="Concussion"
          />
      
      <FormControlLabel
        control={<Checkbox  onChange={handleChangeConditions} name="bipolar disorder" />}
        label="Bipolar Disorder"/>
      <FormControlLabel
        control={<Checkbox  onChange={handleChangeConditions} name="asthma" />} 
        label="Asthma"/>
      <FormControlLabel
        control={<Checkbox  onChange={handleChangeConditions} name="arthritis"/>}  
        label="Arthritis"/>
      <FormControlLabel
        control={<Checkbox  onChange={handleChangeConditions} name="fatigue associated with exercise" />} label="Fatigue Associated with Exercise"/>
      <FormControlLabel
        control={<Checkbox  onChange={handleChangeConditions} name="thyroid disease" />} 
        label="Thyroid Disease"/>
      <FormControlLabel
        control={<Checkbox  onChange={handleChangeConditions} name="migraines" />} 
        label="Migraines"/>
      <FormControlLabel
        control={<Checkbox  onChange={handleChangeConditions} name="visual problems" />} 
        label="Visual Problems"/>
      <FormControlLabel
        control={<Checkbox  onChange={handleChangeConditions} name="stroke" />} 
        label="Stroke"/>
      <FormControlLabel
        control={<Checkbox  onChange={handleChangeConditions} name="heat stroke" />} 
        label="Heat Stroke"/>
      </FormGroup>
      </FormControl>

      <Typography for="suddenDeath">Do you have any family members or relatives that died of heart problems or sudden death before age 50?</Typography>
        <FormControl id='suddenDeath' component="fieldset">
        <RadioGroup aria-label="suddenDeath" name="suddenDeath"  onChange={handleSuddenDeath}>
        <FormControlLabel value="No" control={<Radio />} label="No" />
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        </RadioGroup>
        </FormControl>

        <Typography for="marfans">Does anyone in your family have Marfans syndrome?</Typography>
        <FormControl id='marfans' component="fieldset">
        <RadioGroup aria-label="marfans" name="marfans"  onChange={handlemarfans}>
        <FormControlLabel value="No" control={<Radio />} label="No" />
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        </RadioGroup>
        </FormControl>

        <Typography for="chickenPox">Have you had Chicken pox, mumps, measles or rubella?</Typography>
        <FormControl id='cpmmr' component="fieldset">
        <RadioGroup aria-label="cpmmr" name="cpmmr"  onChange={handlecpmmr}>
        <FormControlLabel value="No" control={<Radio />} label="No" />
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="not sure" control={<Radio />} label="Not Sure" />
        </RadioGroup>
        </FormControl>

        <Typography for="cpmmr2">Have you been vaccinated for the ones that you did not have as a child? </Typography>
        <FormControl id='cpmmr2' component="fieldset">
        <RadioGroup aria-label="cpmmr2" name="cpmmr2"  onChange={handlecpmmr2}>
        <FormControlLabel value="No" control={<Radio />} label="No" />
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="not sure" control={<Radio />} label="Not Sure" />
        </RadioGroup>
        </FormControl>

        
        <Typography for="covid">Have you been vaccinated for Covid-19? </Typography>
        <FormControl id='covid' component="fieldset">
        <RadioGroup aria-label="covid" name="covid"  onChange={handleCovid}>
        <FormControlLabel value="No" control={<Radio />} label="No" />
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        </RadioGroup>
        </FormControl>

        <Typography for="vaccine">Are you up to date on your vaccines?</Typography>
        <FormControl id='uptodateVaccines' component="fieldset">
        <RadioGroup aria-label="uptodateVaccines" name="Up to date Vaccines?"  onChange={handleUpToDateVaccines}>
        <FormControlLabel value="No" control={<Radio />} label="No" />
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="Not Sure" control={<Radio />} label="Not Sure" />
        </RadioGroup>
        </FormControl>

        <Typography htmlFor="allergies">Do you have any allergies to medications, foods, or environmental agents?</Typography>
        <FormControl id='allergies' component="fieldset">
        <RadioGroup aria-label="allergies" name="Allergies"  onChange={handleAllergies}>
        <FormControlLabel value="No" control={<Radio />} label="No" />
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        </RadioGroup>
        </FormControl>
        {allergies==="Yes"?<TextField variant="outlined" onChange={handleAllergiesDescription} placeholder="Please List your Allergies:"></TextField>:null}
          
        <Typography for="vaccine">Do you need an epi-pen for these allergies?</Typography>
        <FormControl id='allergiesepipen' component="fieldset">
        <RadioGroup aria-label="allergiesepipen" name="allergies epi-pen"  onChange={handleAllergiesEpiPen}>
        <FormControlLabel value="No" control={<Radio />} label="No" />
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        </RadioGroup>
        </FormControl>

        <Typography htmlFor="allergies">Are you currently taking any prescription medication?</Typography>
        <FormControl id='medication' component="fieldset">
        <RadioGroup aria-label="medication" name="medication"  onChange={handleMedication}>
        <FormControlLabel value="No" control={<Radio />} label="No" />
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        </RadioGroup>
        </FormControl>
        {medication==="Yes"?<TextField variant="outlined" onChange={handleMedicationDescription} placeholder="Please List your Medications:"></TextField>:null}

        <Typography htmlFor="nonMedication">Do you regularly take any non-prescription medications, vitamins, supplements?</Typography>
        <FormControl id='nonMedication' component="fieldset">
        <RadioGroup aria-label="nonMedication" name="nonMedication"  onChange={handlenonMedication}>
        <FormControlLabel value="No" control={<Radio />} label="No" />
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        </RadioGroup>
        </FormControl>
        {nonMedication==="Yes"?<TextField variant="outlined" onChange={handlenonMedicationDescription} placeholder="Please List your Non-Prescription Medications:"></TextField>:null}
        
        <Typography htmlFor="dance-performance-history">Dance/Performance History</Typography>
        <FormControl required id='dance-performance-history' component="fieldset">
        <FormLabel component="legend">Please Check all Conditions that Apply to You</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox  onChange={handleDanceHistory} name="Student" />}
            label="Student"
          />
          <FormControlLabel
            control={<Checkbox  onChange={handleDanceHistory} name="Corps Dancer" />}
            label="Corps Dancer"
          />
           <FormControlLabel
            control={<Checkbox  onChange={handleDanceHistory} name="Soloist" />}
            label="Soloist"
          />
           <FormControlLabel
            control={<Checkbox  onChange={handleDanceHistory} name="Principal Dancer" />}
            label="Principal Dancer"
          />
           <FormControlLabel
            control={<Checkbox  onChange={handleDanceHistory} name="Guest Artist" />}
            label="Guest Artist"
          />
           <FormControlLabel
            control={<Checkbox  onChange={handleDanceHistory} name="Teacher" />}
            label="Teacher"
          />
           <FormControlLabel
            control={<Checkbox  onChange={handleDanceHistory} name="Choreographer" />}
            label="Choreographer"
          />
           <FormControlLabel
            control={<Checkbox  onChange={handleDanceHistory} name="Other" />}
            label="Other"
          />
          
      </FormGroup>
      </FormControl>

      <Typography htmlFor="dance-performance-history">Type of Dance Work</Typography>
      <FormControl required id='type-of-dance-work' component="fieldset">
        <FormLabel component="legend">Please Check all Conditions that Apply to You</FormLabel>
        <FormGroup>
          
          <FormControlLabel
            control={<Checkbox  onChange={handleDanceWork} name="Professional" />}
            label="Professional"
          />
          <FormControlLabel
            control={<Checkbox  onChange={handleDanceWork} name="Freelance" />}
            label="Freelance"
          />
          <FormControlLabel
            control={<Checkbox  onChange={handleDanceWork} name="Recreational" />}
            label="Recreational"
          />
          <FormControlLabel
            control={<Checkbox  onChange={handleDanceWork} name="Student" />}
            label="Student"
          />

        <Typography>Current Company or School Name:</Typography>
        <TextField  label="Current Company" variant="outlined" onChange={handleCurrentCompany} />

        <Typography>Previous Company or School Name:</Typography>
        <TextField  label="Previous Company" variant="outlined" onChange={handlePreviousCompany}/>
         
        <Typography>preffered gesture leg</Typography>
        <FormControl id='preffered gesture leg' component="fieldset">
        <RadioGroup aria-label="preffered gesture leg" name="preffered gesture leg"  >
        <FormControlLabel value="right" control={<Radio />} label="Right" />
        <FormControlLabel value="left" control={<Radio />} label="Left" />
        </RadioGroup>
        </FormControl>
        
      <Typography>preffere stance leg</Typography>
        <FormControl id='preffere stance leg' component="fieldset">
        <RadioGroup aria-label="preffere stance leg" name="preffere stance leg"  >
        <FormControlLabel value="right" control={<Radio />} label="Right" />
        <FormControlLabel value="left" control={<Radio />} label="left" />
        </RadioGroup>
        </FormControl>
        

        
      </FormGroup>
      </FormControl>

      <Typography for="training">Main Type of Dance Training</Typography>
      <FormControl required id='type-of-dance-work' component="fieldset">
        <FormLabel component="legend">Please Check all that Apply</FormLabel>
        <FormGroup>
        <FormControlLabel control={<Checkbox onChange={handleMainTypeOfDance} name="ballet" />} label="Ballet"/>
        <FormControlLabel control={<Checkbox onChange={handleMainTypeOfDance} name="modern" />} label="Modern"/>
        <FormControlLabel control={<Checkbox onChange={handleMainTypeOfDance} name="lyrical" />} label="Lyrical"/>
        <FormControlLabel control={<Checkbox onChange={handleMainTypeOfDance} name="contemporary" />} label="Contemporary"/>
        <FormControlLabel control={<Checkbox onChange={handleMainTypeOfDance} name="theatrical" />} label="Theatrical"/>
        <FormControlLabel control={<Checkbox onChange={handleMainTypeOfDance} name="tap" />} label="Tap"/>
        <FormControlLabel control={<Checkbox onChange={handleMainTypeOfDance} name="jazz" />} label="Jazz"/>
        <FormControlLabel control={<Checkbox onChange={handleMainTypeOfDance} name="folk" />} label="Folk"/>
        <FormControlLabel control={<Checkbox onChange={handleMainTypeOfDance} name="ethnic" />} label="Ethnic"/>
        <FormControlLabel control={<Checkbox onChange={handleMainTypeOfDance} name="flamenco" />} label="Flamenco"/>
        <FormControlLabel control={<Checkbox onChange={handleMainTypeOfDance} name="hipHop" />} label="HipHop"/>
        <FormControlLabel control={<Checkbox onChange={handleMainTypeOfDance} name="ballroom" />} label="Ballroom"/>
        </FormGroup>
      </FormControl>

      <Typography for="beganTraining">Age began dance training?</Typography>
      <TextField variant="outlined" id="beganTraining" onChange={handleAgeBeganDance}/>

      <Typography >Has your training been continuous?</Typography>
      <FormControl id='trainning' component="fieldset">
        <RadioGroup aria-label="trainning" name="Continuous trainning"  onChange={handleTrainning}>
        <FormControlLabel value="No" control={<Radio />} label="No" />
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        </RadioGroup>
        </FormControl>

        <Typography >Do you do pointe work?</Typography>
      <FormControl id='pointeWork' component="fieldset">
        <RadioGroup aria-label="pointe work" name="Pointe Work"  onChange={handlePointeWork}>
        <FormControlLabel value="No" control={<Radio />} label="No" />
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        </RadioGroup>
        </FormControl>

        <Typography for="numberOfYearsDancing">Total Number of Years Dancing?</Typography>
        <TextField variant="outlined" id="numberOfYearsDancing" onChange={handleNumberOfYearsDancing}/>

        <Typography for="numberOfYearsDancing">Number of Years as a Professional Dancing?</Typography>
        <TextField variant="outlined" id="numberOfYearsProDancing"onChange={handleNumberOfYearsProDancing} />

      <FormControl id='currentlyPerforming' component="fieldset">
        <RadioGroup aria-label="currentlyPerforming" name="Currently performing"  onChange={handleCurrentlyPerforming}>
        <FormControlLabel value="No" control={<Radio />} label="No" />
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        </RadioGroup>
        </FormControl>

        <Typography for="rehearsalHours">Number of hours of rehearsal per day?</Typography>
            <TextField variant="outlined" id="rehearsalHours" onChange={handleRehearsalHours}/>

            <Typography for="dancePerDay">Number of dance classes per day?</Typography>
            <TextField variant="outlined" id="dancePerDay"onChange={handleDancePerDay}/>

            <Typography for="performancePerMonth">Number of performances per month?</Typography>
            <TextField variant="outlined" id="performancesPerMonth" onChange={handlePerformancePerMonth}/>

            <Typography for="tourWeeks">Number of weeks per year on tour?</Typography>
            <TextField variant="outlined" id="tourWeeks" onChange={handleTourWeeks}/>

            <Typography for="companyEmployedWeeks">If you are in a company, what is the number of weeks you are employed per contract year?</Typography>
            <TextField variant="outlined" id="companyEmployedWeeks" onChange={handleCompanyEmployedWeeks}/>

        <Typography >Have you altered your dance schedule in the last 6 months</Typography>
        <FormControl id='alterSchedule' component="fieldset">
        <RadioGroup aria-label="altered schedule" name="alteredSchedule"  onChange={handleAlteredSchedule}>
        <FormControlLabel control={<Radio />}  label="No Change" value="No Change"        />
        <FormControlLabel control={<Radio />}  label="Gradual Increase" value="Gradual Increase" />
        <FormControlLabel control={<Radio />}  label="Sudden Increase"  value="Sudden Increase"   />
        <FormControlLabel control={<Radio />}  label="Gradual Decrease" value="Gradual Decrease"  />
        <FormControlLabel control={<Radio />}  label="Sudden Decrease"  value="Sudden Decrease"  />
        </RadioGroup>
        </FormControl>

        <Typography for="offseasonTraining">Do you participate in a preseason or offseason conditioning, weight, and or jump program?</Typography>
        <FormControl id='offSeasonTrainning' component="fieldset">
        <FormLabel component="legend"></FormLabel>
        <RadioGroup aria-label="offSeasonTrainning" name="offSeasonTrainning"  onChange={handleOffseasonTrainning}>
        <FormControlLabel value="No" control={<Radio />} label="No" />
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        </RadioGroup>
        </FormControl>

        <Typography for="extraPrograms">What type of programs do you regularly participate in (in addition to dance)?</Typography>
        <FormControl required id='extraPrograms' component="fieldset">
        <FormLabel component="legend">Please Check all that Apply</FormLabel>
        <FormGroup>
          <FormControlLabel control={<Checkbox onChange={handleExtraPrograms} name="gym"     />}               label="gym"      /> 
          <FormControlLabel control={<Checkbox onChange={handleExtraPrograms} name="running"  />}              label="running"   /> 
          <FormControlLabel control={<Checkbox onChange={handleExtraPrograms} name="resistan" />}              label="resistan"  /> 
          <FormControlLabel control={<Checkbox onChange={handleExtraPrograms} name="yoga"     />}              label="yoga"      /> 
          <FormControlLabel control={<Checkbox onChange={handleExtraPrograms} name="swimming" />}              label="swimming"  /> 
          <FormControlLabel control={<Checkbox onChange={handleExtraPrograms} name="weightLifting"/>}          label="weightLifting" /> 
          <FormControlLabel control={<Checkbox onChange={handleExtraPrograms} name="cycling"  />}              label="cycling"   /> 
          <FormControlLabel control={<Checkbox onChange={handleExtraPrograms} name="Feldenkrai or Alexander"/>}label="Feldenkrais or Alexander"/> 
          <FormControlLabel control={<Checkbox onChange={handleExtraPrograms} name="walking"    />}            label="walking"     /> 
          <FormControlLabel control={<Checkbox onChange={handleExtraPrograms} name="plyometrics" />}           label="plyometrics"  /> 
          <FormControlLabel control={<Checkbox onChange={handleExtraPrograms} name="pilates"  />}              label="pilates"   /> 
          <FormControlLabel control={<Checkbox onChange={handleExtraPrograms} name="Other"   />}               label="Other"    /> 
        </FormGroup>

        </FormControl>
        
        <Typography for="cardioTrainingPerWeek">Current number hrs/wk of cardiovascular training</Typography>
            <TextField variant="outlined" id="cardioTrainingPerWeek" onChange={handleCardioTrainingPerWeek}/>    
        <Typography for="crossTrainingPerWeek">Current number hrs/wk other cross-training</Typography>
            <TextField variant="outlined" id="crossTrainingPerWeek" onChange={handleCrossTrainingPerWeek}/>

        
        <Typography for="warmUp">Do you warm up before class?</Typography>
        <FormControl id='warmUp' component="fieldset">
        <RadioGroup aria-label="warmUp" name="warmUp"  onChange={handleWarmUP}>
        <FormControlLabel value="No" control={<Radio />} label="No" />
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        </RadioGroup>
        </FormControl>

        <Typography >Have you sustained any musculoskeletal injuries in the last 12 months that caused you to miss:</Typography>
        <FormControl id='musculoskeletalinjury' component="fieldset">
        <RadioGroup aria-label="musculoskeletalinjury" name="musculoskeletalinjury"  onChange={handleMuscleInjury}>
        <FormControlLabel control={<Radio/>} value="Performance"label="Performance" />
        <FormControlLabel control={<Radio/>} value="Rehearsal"  label="Rehearsal"  />
        <FormControlLabel control={<Radio/>} value="Class"      label="Class"      />
        <FormControlLabel control={<Radio/>} value="Work"       label="Work"        />
        <FormControlLabel control={<Radio/>} value="Sports"     label="Sports"    />
        <FormControlLabel control={<Radio/>} value="None"       label="None"   />
        </RadioGroup>
        </FormControl>

        <Typography >Whom were you initially seen by:</Typography>
        <FormControl id='seenBy' variant="outlined" >
        <InputLabel id="demo-simple-select-outlined-label">Seen by?</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          onChange={handleSeenBy}
          label="Seen by:"
        >
                <MenuItem value="General MD">General MD</MenuItem>
                <MenuItem value="Orthopaedist">Orthopaedist</MenuItem>
                <MenuItem value="Osteopath">Osteopath</MenuItem>
                <MenuItem value="Physical Therapist">Physical Therapist</MenuItem>
                <MenuItem value="Chiropractor">Chiropractor</MenuItem>
                <MenuItem value="Massage Therapist">Massage Therapist</MenuItem>
                <MenuItem value="Athletic Trainer">Athletic Trainer</MenuItem>
                <MenuItem value="No One">No One</MenuItem>
        </Select>
      </FormControl>

        <Typography for="injuryDiagnosis">What was the diagnosis or body region of your musculoskeletal injury sustained in the last 12 months?</Typography>
        <TextField variant="outlined" type="text" id="injuryDiagnosis" onChange={handleInjuryDiagnosis}/>

        <Typography >Where did the injury occur?</Typography>
        <FormControl id='whereInjuryOccured' component="fieldset">
        <RadioGroup aria-label="whereInjuryOccured" name="whereInjuryOccured"  onChange={handleWhereInjuryOccured}>
        <FormControlLabel control={<Radio/>} value="Performance"label="Performance" />
        <FormControlLabel control={<Radio/>} value="Rehearsal"  label="Rehearsal"  />
        <FormControlLabel control={<Radio/>} value="Class"      label="Class"      />
        <FormControlLabel control={<Radio/>} value="Work"       label="Work"        />
        <FormControlLabel control={<Radio/>} value="Sports"     label="Sports"    />
        <FormControlLabel control={<Radio/>} value="No Injury"       label="No Injury"   />
        </RadioGroup>
        </FormControl>

        <Typography for="surgery">Did you have surgery for the injury mentioned above?</Typography>
        <FormControl id='surgery' component="fieldset">
        <RadioGroup aria-label="surgery" name="surgery"  onChange={handleSurgery}>
        <FormControlLabel value="No" control={<Radio />} label="No" />
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        </RadioGroup>
        </FormControl>

        <Typography for="rehab">Did you receive any rehabilitation for injuries sustained?</Typography>
        <FormControl id='rehab' component="fieldset">
        <RadioGroup aria-label="rehab" name="rehab"  onChange={handleRehab}>
        <FormControlLabel value="No" control={<Radio />} label="No" />
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        </RadioGroup>
        </FormControl>

        <Typography for="resumptionDanceClasses">Date of resumption of dance classes?</Typography>
        <TextField variant="outlined" type="date" id="resumptionDanceClasses" onChange={handleResumptionDanceClasses}/>

        <Typography for="returnPerform">Date of Performance resumption?</Typography>
        <TextField variant="outlined" type="date" id="returnPerform" onChange={handleReturnPerform}/>

        <Typography for="continuingProblem">Are there any continuing problems due to your injury?</Typography>
        <FormControl id='continuingProblem' component="fieldset">
        <RadioGroup aria-label="continuingProblem" name="continuingProblem"  onChange={handleContinuingProblem}>
        <FormControlLabel value="No" control={<Radio />} label="No" />
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        </RadioGroup>
        </FormControl>

        <Typography for="otherInjuries">Have you had any other injuries or surgeries that you would like us to know about?</Typography>
        <FormControl id='otherInjuries' component="fieldset">
        <RadioGroup aria-label="otherInjuries" name="otherInjuries"  onChange={handleOtherInjuries}>
        <FormControlLabel value="No" control={<Radio />} label="No" />
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        </RadioGroup>
        </FormControl>

        <Typography for="lossPastYear">In the past year, have you had a loss of friend(s), or family, or partner/spouse, or pet through
                death, separation, change in relationship or relocation?</Typography>
        <FormControl id='lossPastYear' component="fieldset">
        <RadioGroup aria-label="lossPastYear" name="lossPastYear"  onChange={handleLossPastYear}>
        <FormControlLabel value="No" control={<Radio />} label="No" />
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        </RadioGroup>
        </FormControl>

        <Typography for="counseling">Do you feel you would benefit from counseling for the above or mental/emotional  stress or anxiety?</Typography>
        <FormControl id='counseling' component="fieldset">
        <RadioGroup aria-label="counseling" name="counseling"  onChange={handleCounseling}>
        <FormControlLabel value="No" control={<Radio />} label="No" />
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        </RadioGroup>
        </FormControl>

        <Typography for="fatigue">Do you feel you suffer from bouts of fatigue or tiredness more than your fellow dancers?</Typography>
        <FormControl id='fatigue' component="fatigue">
        <RadioGroup aria-label="fatigue" name="fatigue"  onChange={handleFatigue}>
        <FormControlLabel value="No" control={<Radio />} label="No" />
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        </RadioGroup>
        </FormControl>

        <Typography for="troubleSleeping">Do you have trouble falling asleep or getting back to sleep if you wake in the night?</Typography>
        <FormControl id='troubleSleeping' component="fieldset">
        <RadioGroup aria-label="troubleSleeping" name="troubleSleeping"  onChange={handleTroubleSleeping}>
        <FormControlLabel value="No" control={<Radio />} label="No" />
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        </RadioGroup>
        </FormControl>


        <Typography for="sleepDeprived">Do you consider yourself sleep deprived?</Typography>
        <FormControl id='sleepDeprived' component="fieldset">
        <RadioGroup aria-label="sleepDeprived" name="sleepDeprived"  onChange={handleSleepDeprived}>
        <FormControlLabel value="No" control={<Radio />} label="No" />
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        </RadioGroup>
        </FormControl>

        <Typography for="nutritionCounseling">Are you interested in nutritional counseling?</Typography>
        <FormControl id='nutritionCounseling' component="fieldset">
        <RadioGroup aria-label="nutritionCounseling" name="nutritionCounseling"  onChange={handleNutritionCounseling}>
        <FormControlLabel value="No" control={<Radio />} label="No" />
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        </RadioGroup>
        </FormControl>

        <Typography for="smoking">Do you smoke cigarettes?</Typography>
        <FormControl id='smoking' component="fieldset">
        <RadioGroup aria-label="smoking" name="smoking"  onChange={handleSmoking}>
        <FormControlLabel value="No" control={<Radio />} label="No" />
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        </RadioGroup>
        </FormControl>


        <Typography for="smokingCessation">Are you interested in smoking cessation information?</Typography>
        <FormControl id='smokingCessation' component="fieldset">
        <RadioGroup aria-label="smokingCessation" name="smokingCessation"  onChange={handleSmokingCessation}>
        <FormControlLabel value="No" control={<Radio />} label="No" />
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        </RadioGroup>
        </FormControl>

        <Typography for="drinksPerDay">On average how many alcoholic drinks do you drink in a day?</Typography>
        <TextField variant="outlined" id="drinksPerDay" onChange={handleDrinksPerDay}/>

        <Typography for="drugUse">How many times in a week do you use drugs or medications for non-medical reasons? (example marijuana)</Typography>
        <TextField variant="outlined" id="drugUse" onChange={handleDrugUse}/>

        <Typography for="worry">Do you worry about any aspect of your health?</Typography>
        <FormControl id='worry' component="fieldset">
        <RadioGroup aria-label="worry" name="worry"  onChange={handleWorry}>
        <FormControlLabel value="No" control={<Radio />} label="No" />
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        </RadioGroup>
        </FormControl>
        <Fab style={{margin:"15px"}} variant="extended" color="primary"><Button type='submit' style={{color:"#fff"}}>SUBMIT</Button></Fab>
      </form>
      </div>
    </div>
    );
      }
      else{
      
      return (
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:'column',padding:'20px',height:'95vh'}}>
          <Submited/>
          <Fab color="primary" variant="extended"><Button style={{color:"#fff"}} onClick={reload}>Go back to Form</Button></Fab>
        </div>
      );
      }
      
    
  
}

export default App;
