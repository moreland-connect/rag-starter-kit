# Epic Kit Documentation Extraction

**Generated:** 2025-07-23 00:38:40
**Progress:** 268 items completed

---

## VisitFact

**Extracted:** 2025-07-22 23:34:06
**Content Length:** 14591 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class G Fact
Try It
VisitFact
VisitFact contains information about visits. Each row represents a visit encounter. Change Type: Non-Snapshot
Columns
VisitKey : bigint
Surrogate key used to uniquely identify the record
EncounterKey : bigint
Links to EncounterFact
Encounter associated with the visit
PatientKey : bigint
Links to PatientDim
Patient associated with the visit
PatientDurableKey : bigint
Links to PatientDim
Patient associated with the visit
ReferralKey : bigint
Links to ReferralFact
First referral associated with the visit
ClosedDateKey : bigint
Links to DateDim
Date when the encounter was closed
AppointmentDateKey : bigint
Links to DateDim
Date of the appointment
EncounterDateKey : bigint
Links to DateDim
Encounter date for the visit
AppointmentTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day of the appointment
AppointmentInstant : datetime
The date and time of the appointment.
AppointmentInstantUtc : datetime
Date and time of the appointment in UTC time zone.
AppointmentCreationDateKey : bigint
Links to DateDim
Date when the appointment was created. If an appointment was rescheduled, this is the date on which the new (rescheduled) appointment was created, not the creation date of the original appointment.
AppointmentCancellationDateKey : bigint
Links to DateDim
Date when the appointment was canceled
CheckInDateKey : bigint
Links to DateDim
Date when the patient was checked in
CheckInTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the patient was checked in
CheckInInstant : datetime
The date and time when the patient was checked in
CheckInEmployeeDurableKey : bigint
Links to EmployeeDim
The user that checked in the encounter
RoomedDateKey : bigint
Links to DateDim
Date when the patient was roomed
RoomedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the patient was roomed
RoomedInstant : datetime
The date and time when the patient was roomed
CheckOutDateKey : bigint
Links to DateDim
Date when the patient was checked out
CheckOutTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the patient was checked out
CheckOutInstant : datetime
The date and time when the patient was checked out
CheckOutEmployeeDurableKey : bigint
Links to EmployeeDim
The user who checked out the encounter
DepartmentKey : bigint
Links to DepartmentDim
Department for the visit. For Epic data, if there are multiple departments for the visit, this is the first department on the list.
PrimaryDiagnosisKey : bigint
Links to DiagnosisDim
Primary encounter diagnosis for the visit
EncounterDiagnosisComboKey : bigint
Links to DiagnosisBridge
All encounter diagnoses for the visit
PrimaryVisitProviderKey : bigint
Links to ProviderDim
Primary visit provider for the visit
PrimaryVisitProviderDurableKey : bigint
Links to ProviderDim
Primary visit provider for the visit
SecondVisitProviderKey : bigint
Links to ProviderDim
Second visit provider for the visit
SecondVisitProviderDurableKey : bigint
Links to ProviderDim
Second visit provider for the visit
ThirdVisitProviderKey : bigint
Links to ProviderDim
Third visit provider for the visit
ThirdVisitProviderDurableKey : bigint
Links to ProviderDim
Third visit provider for the visit
FourthVisitProviderKey : bigint
Links to ProviderDim
Fourth visit provider for the visit
FourthVisitProviderDurableKey : bigint
Links to ProviderDim
Fourth visit provider for the visit
PrimaryResourceKey : bigint
Links to ResourceDim
Scheduled resource for the visit
LevelOfServiceKey : bigint
Links to ProcedureDim
Primary level of service associated with the visit
LevelOfServiceAuthorizedByProviderKey : bigint
Links to ProviderDim
Provider who authorized the level of service for the visit
LevelOfServiceAuthorizedByProviderDurableKey : bigint
Links to ProviderDim
Provider who authorized the level of service for the visit
EncounterClosedByProviderKey : bigint
Links to ProviderDim
Provider who closed the encounter
EncounterClosedByProviderDurableKey : bigint
Links to ProviderDim
Provider who closed the encounter
GuarantorKey : bigint
Links to GuarantorDim
Guarantor associated with the visit
GuarantorDurableKey : bigint
Links to GuarantorDim
Guarantor associated with the visit
CoverageKey : bigint
Links to CoverageDim
Coverage for the visit. For Epic data, this column stores the primary coverage on the associated hospital account if it is available. Otherwise it stores the original coverage on the first non-voided professional transaction if it is available. Otherwise it stores the coverage assigned at check-in or appointment entry.
EncounterType : nvarchar(300)
Encounter type for the visit. For Epic data, hospital outpatient visits are indicated by a type of Hospital Encounter.
VisitType : nvarchar(300)
Visit type for the visit
VisitTypeEpicId : nvarchar(300)
Epic ID of the visit type (PRC) record for the visit. The column is blank for visits associated with Home Health (LCT) records.
TelehealthMode : nvarchar(300)
Telehealth mode associated with the visit
FinancialClass : nvarchar(300)
This column should no longer be used and will be removed in a future version. As a replacement, use CoverageDim.PayorFinancialClass.
AppointmentStatus : nvarchar(300)
Status of the appointment
SystolicBloodPressure : smallint
Patient systolic blood pressure for the visit
AppointmentConfirmationStatus : nvarchar(300)
Confirmation status of the appointment
AuthorizationStatus : nvarchar(300)
The authorization status of the visit, determined by evaluating all the authorizations linked to the visit
AppointmentLengthInMinutes : smallint
Length of the scheduled appointment in minutes
SchedulingSource : nvarchar(300)
Source that performed the initial scheduling action on this appointment
ReasonAppointmentCanceled : nvarchar(300)
Reason for the appointment cancellation, if the appointment was canceled
CancellationInstant : datetime
The date and time the appointment was canceled.
CancellationInstantUtc : datetime
The date and time the appointment was canceled in UTC time zone.
EncounterEpicCsn : numeric(18,0)
Epic contact serial number (CSN) of the visit. This column identifies patient (EPT) contacts.
AppointmentSerialNumber : numeric(18,0)
The appointment serial number for the appointment. This value is unique among appointments that are not canceled, and can be used to group together canceled and rescheduled appointments.
HospitalAccountEpicId : numeric(18,0)
Epic ID of the hospital account associated with the visit. This column identifies account (HAR) records.
PrimaryProfessionalAccountEpicId : numeric(18,0)
Epic ID of the primary professional account associated with the visit. This column identifies account (HAR) records.
HeightInInches : numeric(5,2)
Patient height in inches for the visit. For Epic data, values are only included if the Clarity data is in the format (#' #") and below 9 feet and 12 inches.
WeightInOunces : numeric(7,2)
Patient weight in ounces for the visit
BodyMassIndex : numeric(18,2)
Patient body mass index for the visit
BodyMassIndexPercentile : numeric(18,2)
Patient body mass index percentile for the visit
BodyMassIndexPercentileGrowthChart : nvarchar(300)
Growth chart used for the patient's body mass index percentile calculation
DiastolicBloodPressure : smallint
Patient diastolic blood pressure for the visit
TemperatureInFahrenheit : numeric(4,1)
Patient temperature in Fahrenheit for the visit
PulseRate : smallint
Patient pulse rate for the visit
RespirationRate : smallint
Patient respiration rate for the visit
CopayDue : numeric(18,2)
Amount of copay that was due
CopayCollected : numeric(18,2)
Amount of copay that was collected
PrepaymentDue : numeric(18,2)
Amount of prepayment that was due
PrepaymentCollected : numeric(18,2)
Amount of prepayment that was collected
PortalReasonForVisit : nvarchar(300)
The reason for visit associated with the visit. For Epic data, this column is populated only for visits scheduled online.
OnlineCheckinStatus : nvarchar(300)
The status of electronic check-in for the visit
DaysSavedByAutoWaitList : int
Number of days between the patient's original appointment time and the patient's actual appointment time when the appointment was scheduled using auto wait list functionality
SecondsToRespondToAutoWaitListOffer : int
When the appointment was scheduled using auto wait list functionality, the number of seconds between the time a new appointment was offered and the time the appointment was accepted
MinutesOfExcessWaitTime : int
Number of minutes above the estimated wait time that the patient spent waiting to be roomed
MarkedSelfPay : tinyint
1/0 column that indicates whether the visit is marked as Self Pay. This column returns 1 if the visit encounter is marked as Self Pay and 0 if it wasn't.
MarkedDoNotBillInsurance : tinyint
1/0 column that indicates whether the visit is marked as Do Not Bill Insurance. This column returns 1 if the visit encounter is marked as Do Not Bill Insurance and 0 if it wasn't.
Closed : tinyint
1/0 column that indicates whether the visit encounter is closed. This column returns 1 if the visit encounter is closed and 0 if the visit encounter is open.
Complete : tinyint
1/0 column that indicates whether the appointment is complete. This column returns 1 if the appointment is complete and 0 if the appointment isn't complete.
WalkIn : tinyint
1/0 column that indicates whether the visit encounter is a walk-in. This column returns 1 if the visit encounter is a walk-in and 0 if the visit encounter isn't a walk-in.
IsScheduledAppointment : tinyint
1/0 column that indicates whether this is a scheduled appointment. This column returns 1 if this is a scheduled appointment and 0 if this is not a scheduled appointment.
ReferralRequired : tinyint
1/0 column that indicates whether a referral is required for the visit. This column returns 1 if a referral is required and 0 if a referral isn't required.
TobaccoUseReviewed : tinyint
1/0 column that indicates whether the patient's tobacco use was reviewed during the visit. This column returns 1 if the patient's tobacco use was reviewed and 0 if the patient's tobacco use wasn't reviewed.
MedicationsReviewed : tinyint
1/0 column that indicates whether the patient's medications were reviewed during the visit. This column returns 1 if the patient's medications were reviewed and 0 if the patient's medications weren't reviewed.
ProblemListReviewed : tinyint
1/0 column that indicates whether the patient's problem list was reviewed during the visit. This column returns 1 if the patient's problem list was reviewed and 0 if the patient's problem list wasn't reviewed.
AvsPrinted : tinyint
1/0 column that indicates whether the after visit summary (AVS) was printed for the visit. This column returns 1 if the AVS was printed and 0 if the AVS wasn't printed.
AllergiesReviewed : tinyint
1/0 column that indicates whether the patient's allergies were reviewed during the visit. This column returns 1 if allergies were reviewed and 0 if allergies weren't reviewed.
ScheduledOnline : tinyint
1/0 column that indicates whether the visit was scheduled online. This column returns 1 if the visit was scheduled online and 0 if the visit wasn't scheduled online.
PortalActiveAtScheduling : tinyint
1/0 column that indicates whether the patient's portal account was active at the time the visit was scheduled. This column returns 1 if the patient's portal account was active at the time the visit was scheduled and 0 if the patient's portal account wasn't active at the time the visit was scheduled.
ScheduledFromTicket : tinyint
This column is inaccurate in the case that a ticket is linked after an appointment is scheduled and should not be used for reporting content. Instead use IsPatientScheduledAndHasTicketLinked (which contains the same data as this column) because it has a more accurate title to the data.
OnlineCheckinAvailable : tinyint
1/0 column that indicates whether online check-in was available for the visit. This column returns 1 if online check-in was available and 0 if online check-in wasn't available.
CheckedInWithKiosk : tinyint
1/0 column that indicates whether the visit was checked in via a kiosk. This column returns 1 if the visit was checked in via a kiosk and 0 if the visit wasn't checked in via a kiosk.
SelfArrivalAllowed : tinyint
1/0 column that indicates whether this visit supports self-arrival. This column returns 1 if some type of self-arrival is supported, and 0 if not.
SelfArrivalType : nvarchar(300)
Indicate what type(s) of self-arrival, if any, this visit support
SelfArrivalSuccessLevelCategoryId : int
The Category ID from I ECT 32750 that corresponds to the "success" of a visit pertaining to self-registration and arrival
AppointmentGroupLink : numeric(18,0)
Group link identifier for a group appointment.
IsPatientScheduledAndHasTicketLinked : tinyint
1/0 that indicates whether the appointment is scheduled by the patient and has a ticket linked to the appointment.
AppointmentEntryEmployeeDurableKey : bigint
Links to EmployeeDim
Employee who scheduled the appointment
AppointmentLayoverLength : int
The length of time between the start of this appointment and the end of the preceding appointment in minutes.
RegistrationActiveWorkspaceSeconds : int
The active time a user spent in a patient's Registration workspace without opening another activity.
EncounterVerificationEmployeeDurableKey : bigint
Links to EmployeeDim
User who most recently verified the encounter
OnlineCheckInPreArrivalStatus : nvarchar(300)
The status of electronic check-in for the visit before the visit is marked as arrived.
OnlineCheckInPostArrivalStatus : nvarchar(300)
The status of electronic check-in for the visit after the visit is marked as arrived.
IsTierScheduled : tinyint
1/0 column that indicates whether this visit was scheduled using tiered pools. This column returns 1 if the visit was scheduled using tiered pools and 0 if the visit was not scheduled using tiered pools.
PrimaryVisitProviderSchedulingTier : smallint
Number of the tier from which the primary visit provider was scheduled.
SecondVisitProviderSchedulingTier : smallint
Number of the tier from which the second visit provider was scheduled.
ThirdVisitProviderSchedulingTier : smallint
Number of the tier from which the third visit provider was scheduled.
FourthVisitProviderSchedulingTier : smallint
Number of the tier from which the fourth visit provider was scheduled.
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## AbstractedInfectionFact

**Extracted:** 2025-07-22 23:34:16
**Content Length:** 14591 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class G Fact
Try It
VisitFact
VisitFact contains information about visits. Each row represents a visit encounter. Change Type: Non-Snapshot
Columns
VisitKey : bigint
Surrogate key used to uniquely identify the record
EncounterKey : bigint
Links to EncounterFact
Encounter associated with the visit
PatientKey : bigint
Links to PatientDim
Patient associated with the visit
PatientDurableKey : bigint
Links to PatientDim
Patient associated with the visit
ReferralKey : bigint
Links to ReferralFact
First referral associated with the visit
ClosedDateKey : bigint
Links to DateDim
Date when the encounter was closed
AppointmentDateKey : bigint
Links to DateDim
Date of the appointment
EncounterDateKey : bigint
Links to DateDim
Encounter date for the visit
AppointmentTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day of the appointment
AppointmentInstant : datetime
The date and time of the appointment.
AppointmentInstantUtc : datetime
Date and time of the appointment in UTC time zone.
AppointmentCreationDateKey : bigint
Links to DateDim
Date when the appointment was created. If an appointment was rescheduled, this is the date on which the new (rescheduled) appointment was created, not the creation date of the original appointment.
AppointmentCancellationDateKey : bigint
Links to DateDim
Date when the appointment was canceled
CheckInDateKey : bigint
Links to DateDim
Date when the patient was checked in
CheckInTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the patient was checked in
CheckInInstant : datetime
The date and time when the patient was checked in
CheckInEmployeeDurableKey : bigint
Links to EmployeeDim
The user that checked in the encounter
RoomedDateKey : bigint
Links to DateDim
Date when the patient was roomed
RoomedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the patient was roomed
RoomedInstant : datetime
The date and time when the patient was roomed
CheckOutDateKey : bigint
Links to DateDim
Date when the patient was checked out
CheckOutTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the patient was checked out
CheckOutInstant : datetime
The date and time when the patient was checked out
CheckOutEmployeeDurableKey : bigint
Links to EmployeeDim
The user who checked out the encounter
DepartmentKey : bigint
Links to DepartmentDim
Department for the visit. For Epic data, if there are multiple departments for the visit, this is the first department on the list.
PrimaryDiagnosisKey : bigint
Links to DiagnosisDim
Primary encounter diagnosis for the visit
EncounterDiagnosisComboKey : bigint
Links to DiagnosisBridge
All encounter diagnoses for the visit
PrimaryVisitProviderKey : bigint
Links to ProviderDim
Primary visit provider for the visit
PrimaryVisitProviderDurableKey : bigint
Links to ProviderDim
Primary visit provider for the visit
SecondVisitProviderKey : bigint
Links to ProviderDim
Second visit provider for the visit
SecondVisitProviderDurableKey : bigint
Links to ProviderDim
Second visit provider for the visit
ThirdVisitProviderKey : bigint
Links to ProviderDim
Third visit provider for the visit
ThirdVisitProviderDurableKey : bigint
Links to ProviderDim
Third visit provider for the visit
FourthVisitProviderKey : bigint
Links to ProviderDim
Fourth visit provider for the visit
FourthVisitProviderDurableKey : bigint
Links to ProviderDim
Fourth visit provider for the visit
PrimaryResourceKey : bigint
Links to ResourceDim
Scheduled resource for the visit
LevelOfServiceKey : bigint
Links to ProcedureDim
Primary level of service associated with the visit
LevelOfServiceAuthorizedByProviderKey : bigint
Links to ProviderDim
Provider who authorized the level of service for the visit
LevelOfServiceAuthorizedByProviderDurableKey : bigint
Links to ProviderDim
Provider who authorized the level of service for the visit
EncounterClosedByProviderKey : bigint
Links to ProviderDim
Provider who closed the encounter
EncounterClosedByProviderDurableKey : bigint
Links to ProviderDim
Provider who closed the encounter
GuarantorKey : bigint
Links to GuarantorDim
Guarantor associated with the visit
GuarantorDurableKey : bigint
Links to GuarantorDim
Guarantor associated with the visit
CoverageKey : bigint
Links to CoverageDim
Coverage for the visit. For Epic data, this column stores the primary coverage on the associated hospital account if it is available. Otherwise it stores the original coverage on the first non-voided professional transaction if it is available. Otherwise it stores the coverage assigned at check-in or appointment entry.
EncounterType : nvarchar(300)
Encounter type for the visit. For Epic data, hospital outpatient visits are indicated by a type of Hospital Encounter.
VisitType : nvarchar(300)
Visit type for the visit
VisitTypeEpicId : nvarchar(300)
Epic ID of the visit type (PRC) record for the visit. The column is blank for visits associated with Home Health (LCT) records.
TelehealthMode : nvarchar(300)
Telehealth mode associated with the visit
FinancialClass : nvarchar(300)
This column should no longer be used and will be removed in a future version. As a replacement, use CoverageDim.PayorFinancialClass.
AppointmentStatus : nvarchar(300)
Status of the appointment
SystolicBloodPressure : smallint
Patient systolic blood pressure for the visit
AppointmentConfirmationStatus : nvarchar(300)
Confirmation status of the appointment
AuthorizationStatus : nvarchar(300)
The authorization status of the visit, determined by evaluating all the authorizations linked to the visit
AppointmentLengthInMinutes : smallint
Length of the scheduled appointment in minutes
SchedulingSource : nvarchar(300)
Source that performed the initial scheduling action on this appointment
ReasonAppointmentCanceled : nvarchar(300)
Reason for the appointment cancellation, if the appointment was canceled
CancellationInstant : datetime
The date and time the appointment was canceled.
CancellationInstantUtc : datetime
The date and time the appointment was canceled in UTC time zone.
EncounterEpicCsn : numeric(18,0)
Epic contact serial number (CSN) of the visit. This column identifies patient (EPT) contacts.
AppointmentSerialNumber : numeric(18,0)
The appointment serial number for the appointment. This value is unique among appointments that are not canceled, and can be used to group together canceled and rescheduled appointments.
HospitalAccountEpicId : numeric(18,0)
Epic ID of the hospital account associated with the visit. This column identifies account (HAR) records.
PrimaryProfessionalAccountEpicId : numeric(18,0)
Epic ID of the primary professional account associated with the visit. This column identifies account (HAR) records.
HeightInInches : numeric(5,2)
Patient height in inches for the visit. For Epic data, values are only included if the Clarity data is in the format (#' #") and below 9 feet and 12 inches.
WeightInOunces : numeric(7,2)
Patient weight in ounces for the visit
BodyMassIndex : numeric(18,2)
Patient body mass index for the visit
BodyMassIndexPercentile : numeric(18,2)
Patient body mass index percentile for the visit
BodyMassIndexPercentileGrowthChart : nvarchar(300)
Growth chart used for the patient's body mass index percentile calculation
DiastolicBloodPressure : smallint
Patient diastolic blood pressure for the visit
TemperatureInFahrenheit : numeric(4,1)
Patient temperature in Fahrenheit for the visit
PulseRate : smallint
Patient pulse rate for the visit
RespirationRate : smallint
Patient respiration rate for the visit
CopayDue : numeric(18,2)
Amount of copay that was due
CopayCollected : numeric(18,2)
Amount of copay that was collected
PrepaymentDue : numeric(18,2)
Amount of prepayment that was due
PrepaymentCollected : numeric(18,2)
Amount of prepayment that was collected
PortalReasonForVisit : nvarchar(300)
The reason for visit associated with the visit. For Epic data, this column is populated only for visits scheduled online.
OnlineCheckinStatus : nvarchar(300)
The status of electronic check-in for the visit
DaysSavedByAutoWaitList : int
Number of days between the patient's original appointment time and the patient's actual appointment time when the appointment was scheduled using auto wait list functionality
SecondsToRespondToAutoWaitListOffer : int
When the appointment was scheduled using auto wait list functionality, the number of seconds between the time a new appointment was offered and the time the appointment was accepted
MinutesOfExcessWaitTime : int
Number of minutes above the estimated wait time that the patient spent waiting to be roomed
MarkedSelfPay : tinyint
1/0 column that indicates whether the visit is marked as Self Pay. This column returns 1 if the visit encounter is marked as Self Pay and 0 if it wasn't.
MarkedDoNotBillInsurance : tinyint
1/0 column that indicates whether the visit is marked as Do Not Bill Insurance. This column returns 1 if the visit encounter is marked as Do Not Bill Insurance and 0 if it wasn't.
Closed : tinyint
1/0 column that indicates whether the visit encounter is closed. This column returns 1 if the visit encounter is closed and 0 if the visit encounter is open.
Complete : tinyint
1/0 column that indicates whether the appointment is complete. This column returns 1 if the appointment is complete and 0 if the appointment isn't complete.
WalkIn : tinyint
1/0 column that indicates whether the visit encounter is a walk-in. This column returns 1 if the visit encounter is a walk-in and 0 if the visit encounter isn't a walk-in.
IsScheduledAppointment : tinyint
1/0 column that indicates whether this is a scheduled appointment. This column returns 1 if this is a scheduled appointment and 0 if this is not a scheduled appointment.
ReferralRequired : tinyint
1/0 column that indicates whether a referral is required for the visit. This column returns 1 if a referral is required and 0 if a referral isn't required.
TobaccoUseReviewed : tinyint
1/0 column that indicates whether the patient's tobacco use was reviewed during the visit. This column returns 1 if the patient's tobacco use was reviewed and 0 if the patient's tobacco use wasn't reviewed.
MedicationsReviewed : tinyint
1/0 column that indicates whether the patient's medications were reviewed during the visit. This column returns 1 if the patient's medications were reviewed and 0 if the patient's medications weren't reviewed.
ProblemListReviewed : tinyint
1/0 column that indicates whether the patient's problem list was reviewed during the visit. This column returns 1 if the patient's problem list was reviewed and 0 if the patient's problem list wasn't reviewed.
AvsPrinted : tinyint
1/0 column that indicates whether the after visit summary (AVS) was printed for the visit. This column returns 1 if the AVS was printed and 0 if the AVS wasn't printed.
AllergiesReviewed : tinyint
1/0 column that indicates whether the patient's allergies were reviewed during the visit. This column returns 1 if allergies were reviewed and 0 if allergies weren't reviewed.
ScheduledOnline : tinyint
1/0 column that indicates whether the visit was scheduled online. This column returns 1 if the visit was scheduled online and 0 if the visit wasn't scheduled online.
PortalActiveAtScheduling : tinyint
1/0 column that indicates whether the patient's portal account was active at the time the visit was scheduled. This column returns 1 if the patient's portal account was active at the time the visit was scheduled and 0 if the patient's portal account wasn't active at the time the visit was scheduled.
ScheduledFromTicket : tinyint
This column is inaccurate in the case that a ticket is linked after an appointment is scheduled and should not be used for reporting content. Instead use IsPatientScheduledAndHasTicketLinked (which contains the same data as this column) because it has a more accurate title to the data.
OnlineCheckinAvailable : tinyint
1/0 column that indicates whether online check-in was available for the visit. This column returns 1 if online check-in was available and 0 if online check-in wasn't available.
CheckedInWithKiosk : tinyint
1/0 column that indicates whether the visit was checked in via a kiosk. This column returns 1 if the visit was checked in via a kiosk and 0 if the visit wasn't checked in via a kiosk.
SelfArrivalAllowed : tinyint
1/0 column that indicates whether this visit supports self-arrival. This column returns 1 if some type of self-arrival is supported, and 0 if not.
SelfArrivalType : nvarchar(300)
Indicate what type(s) of self-arrival, if any, this visit support
SelfArrivalSuccessLevelCategoryId : int
The Category ID from I ECT 32750 that corresponds to the "success" of a visit pertaining to self-registration and arrival
AppointmentGroupLink : numeric(18,0)
Group link identifier for a group appointment.
IsPatientScheduledAndHasTicketLinked : tinyint
1/0 that indicates whether the appointment is scheduled by the patient and has a ticket linked to the appointment.
AppointmentEntryEmployeeDurableKey : bigint
Links to EmployeeDim
Employee who scheduled the appointment
AppointmentLayoverLength : int
The length of time between the start of this appointment and the end of the preceding appointment in minutes.
RegistrationActiveWorkspaceSeconds : int
The active time a user spent in a patient's Registration workspace without opening another activity.
EncounterVerificationEmployeeDurableKey : bigint
Links to EmployeeDim
User who most recently verified the encounter
OnlineCheckInPreArrivalStatus : nvarchar(300)
The status of electronic check-in for the visit before the visit is marked as arrived.
OnlineCheckInPostArrivalStatus : nvarchar(300)
The status of electronic check-in for the visit after the visit is marked as arrived.
IsTierScheduled : tinyint
1/0 column that indicates whether this visit was scheduled using tiered pools. This column returns 1 if the visit was scheduled using tiered pools and 0 if the visit was not scheduled using tiered pools.
PrimaryVisitProviderSchedulingTier : smallint
Number of the tier from which the primary visit provider was scheduled.
SecondVisitProviderSchedulingTier : smallint
Number of the tier from which the second visit provider was scheduled.
ThirdVisitProviderSchedulingTier : smallint
Number of the tier from which the third visit provider was scheduled.
FourthVisitProviderSchedulingTier : smallint
Number of the tier from which the fourth visit provider was scheduled.
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## AbstractedInfectionProviderBridge

**Extracted:** 2025-07-22 23:34:26
**Content Length:** 482 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class A Helper
Try It
AbstractedInfectionProviderBridge
This bridge contains unique combinations of providers associated with an infection case. Each row represents a provider in a combination. Change Type: Non-Snapshot
Columns
AbstractedInfectionProviderComboKey : bigint
Surrogate key used to uniquely identify the record
ProviderDurableKey : bigint
Links to ProviderDim
The destination key
```

---

## AbstractedNhsnBsiFact

**Extracted:** 2025-07-22 23:34:36
**Content Length:** 3758 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class D Fact
Try It
AbstractedNhsnBsiFact
The abstracted bloodstream infection (BSI) fact contains information about BSI events abstracted by your organization. Each row represents an infection case. Change Type: Non-Snapshot
Columns
AbstractedNhsnBsiKey : bigint
Surrogate key used to uniquely identify the record
AbstractedInfectionKey : bigint
Links to AbstractedInfectionFact
Infection case associated with this bloodstream infection
AbstractedInfectionEpicId : numeric(18,0)
Epic ID of the infection case. This column identifies abstraction (RDI) records.
PatientDurableKey : bigint
Links to PatientDim
Patient associated with the infection case
InfectionDateKey : bigint
Links to DateDim
The date the patient met the definition for the abstracted infection
InfectionDate : date
The date the patient met the definition for the abstracted infection
CentralLineInsertionDepartmentKey : bigint
Links to DepartmentDim
Department where the central line was inserted
CentralLineType : nvarchar(100)
Type of central line
LabResultCriteria : nvarchar(300)
Lab result criteria used to meet bloodstream infection definition
MatchingOrganismVascularSite : nvarchar(300)
Vascular access site where pus was present and organism identified matching blood specimen
NhsnProcedureCategory : nvarchar(100)
The type of procedure the bloodstream infection is tied to
CentralLineInsertionInstant : datetime
The date and time the central line was inserted
HadEpidermolysisBullosaRiskFactor : tinyint
1/0 column that indicates whether the patient had epidermolysis bullosa
HadExtracorporealLifeSupporRiskFactor : tinyint
1/0 column that indicates whether the patient was on ECMO
HadHemodialysisCatheterRiskFactor : tinyint
1/0 column that indicates whether a hemodialysis catheter was also present
HadMunchausenSyndromeByProxyRiskFactor : tinyint
1/0 column that indicates whether the patient had Munchausen Syndrome by proxy
HadSelfInjectionRiskFactor : tinyint
1/0 column that indicates whether the patient was self-injecting anything through the central line
HadVentricularAssistDeviceRiskFactor : tinyint
1/0 column that indicates whether the patient was on VAD
InfectionContributedToDeath : tinyint
1/0 column that indicates whether the infection event contributed to the patient's death
IsCentralLineAssociated : tinyint
1/0 column that indicates whether the infection case is associated with a central line
IsPostProcedureInfection : tinyint
1/0 column that indicates whether the infection event was post-procedure
MetAlloSctWithAtLeastGrade3GiGvhdCriterion : tinyint
1/0 column that indicates MBI indicator - Allo SCT with at least grade 3 GI GVHD
MetAlloSctWithDiarrheaCriterion : tinyint
1/0 column that indicates MBI indicator - Allo SCT with diarrhea
MetApneaCriterion : tinyint
1/0 column that indicates whether the apnea criterion was met
MetBradycardiaCriterion : tinyint
1/0 column that indicates whether the bradycardia criterion was met
MetChillsCriterion : tinyint
1/0 column that indicates whether the chills criterion was met
MetFeverCriterion : tinyint
1/0 column that indicates whether the fever criterion was met
MetHypotensionCriterion : tinyint
1/0 column that indicates whether the hypotension criterion was met
MetHypothermiaCriterion : tinyint
1/0 column that indicates whether the hypothermia criterion was met
MetMdroInfectionSurveillanceDefinition : tinyint
1/0 column that indicates whether the infection is included in the MDRO infection surveillance reporting plan
MetNeutropeniaCriterion : tinyint
1/0 column that indicates MBI indicator - Neutropenia
PatientDied : tinyint
1/0 column that indicates whether the patient died after the infection event
```

---

## AbstractedNhsnLabIdCategoryBridge

**Extracted:** 2025-07-22 23:34:47
**Content Length:** 570 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class A Helper
Try It
AbstractedNhsnLabIdCategoryBridge
The abstracted NHSN LabID category bridge contains unique combinations of facility types and carbapenemase test results associated with LabID events. Each row represents a facility type or carbapenemase test result in a combination. Change Type: Non-Snapshot
Columns
AbstractedNhsnLabIdCategoryComboKey : bigint
Surrogate key used to uniquely identify the record
CategoryKey : bigint
Links to CategoryDim
The destination key
```

---

## AbstractedNhsnLabIdFact

**Extracted:** 2025-07-22 23:34:57
**Content Length:** 3719 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class D Fact
Try It
AbstractedNhsnLabIdFact
The abstracted lab-identified event (LabID) fact contains information about LabID events abstracted at an organization. Each row represents a LabID event. Change Type: Non-Snapshot
Columns
AbstractedNhsnLabIdKey : bigint
Surrogate key used to uniquely identify the record
AbstractedInfectionKey : bigint
Links to AbstractedInfectionFact
Event ID associated with this LabID event
AbstractedInfectionEpicId : numeric(18,0)
Epic ID of the LabID event. This column identifies abstraction (RDI) records.
InfectionDateKey : bigint
Links to DateDim
The date the lab result was collected
InfectionDate : date
The date the lab result was collected
PatientDurableKey : bigint
Links to PatientDim
Patient associated with the LabID event
FirstAdmissionToFacilityDateKey : bigint
Links to DateDim
Date when the patient was first admitted to the facility
AdmissionDateKey : bigint
Links to DateDim
Admission date for the encounter where the LabID event occurred
AdmissionDate : date
Admission date for the encounter where the LabID event occurred
RecentDischargeDateKey : bigint
Links to DateDim
The discharge date from the patient's most recent encounter from the same facility
RecentDischargeDate : date
The discharge date from the patient's most recent encounter from the same facility
TransferDateKey : bigint
Links to DateDim
Date patient transferred into the department where the lab result was collected
TransferDate : date
Date patient transferred into the department where the lab result was collected
LastTransferFromAcuteCareDateKey : bigint
Links to DateDim
Date when the resident was transferred from acute care before the event
PositiveCarbapenemaseTestComboKey : bigint
Links to AbstractedNhsnLabIdCategoryBridge
The list of tests that were positive for carbapenemase
RecentlyDischargedOtherFacilityTypeComboKey : bigint
Links to AbstractedNhsnLabIdCategoryBridge
All facility types from which a patient was recently discharged
TestsForCarbapenemaseComboKey : bigint
Links to AbstractedNhsnLabIdCategoryBridge
All tests for carbapenemase for the LabID event
LabIdOnset : nvarchar(200)
Where the LabID event is attributed
LabIdOrganism : nvarchar(50)
Laboratory Identified Organism
LastOvernightStay : nvarchar(200)
The location in which the patient spent the night immediately prior to the admission of this LabID event
SpecimenCode : nvarchar(200)
Specimen type and source
LongTermCarePrimaryResidentServiceType : nvarchar(300)
The primary resident service type (e.g., "Long-term dementia" or "Skilled nursing/Short-term rehab")
IsIncidentLabIdEvent : tinyint
1/0 column that indicates whether this is the first LabID event for the patient at the facility for this event episode
IsOutpatientLabIdEvent : tinyint
1/0 column that indicates whether the LabID event was collected from an outpatient location
WasTestedForCarbapenemase : tinyint
1/0 column that indicates whether the CRE organism was tested for carbapenemase
TestedPositiveForCarbapenemase : tinyint
1/0 column that indicates whether the CRE organism tested positive for carbapenemase
RecentlyDischargedOtherFacility : tinyint
1/0 column that indicates whether the patient was recently discharged from another facility
RecentlyDischargedSameFacility : tinyint
1/0 column that indicates whether the patient was recently discharged from the same facility
IsLongTermCareTransferFromAcuteCare : tinyint
1/0 column that indicates whether the patient was transferred from an acute care facility
WasPatientOnAntibioticTherapyAtTransfer : tinyint
1/0 column that indicates whether the patient was on antibiotic therapy at transfer
```

---

## AbstractedNhsnSsiFact

**Extracted:** 2025-07-22 23:35:10
**Content Length:** 5848 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class E Fact
Try It
AbstractedNhsnSsiFact
The abstracted surgical site infection (SSI) fact contains information about SSI events at an organization. Each row represents an infection case. Change Type: Non-Snapshot
Columns
AbstractedNhsnSsiKey : bigint
Surrogate key used to uniquely identify the record
AbstractedInfectionKey : bigint
Links to AbstractedInfectionFact
Infection case associated with this surgical site infection
AbstractedInfectionEpicId : numeric(18,0)
Epic ID of the infection case. This column identifies abstraction (RDI) records.
AssociatedProcedureLocationKey : bigint
Links to DepartmentDim
The facility attributed to the surgical site infection
InfectionControlReportingHospitalKey : bigint
Links to InfectionControlReportingLocationDim
The reporting hospital associated with the surgical site infection
InfectionDateKey : bigint
Links to DateDim
Date the patient met the definition for the abstracted infection
InfectionDate : date
Date the patient met the definition for the abstracted infection
PatientDurableKey : bigint
Links to PatientDim
Patient associated with the infection case
ProcedureDateKey : bigint
Links to DateDim
The date of the surgery attributed to the infection
ProcedureDate : date
The date of the surgery attributed to the infection
DetectedDuringComboKey : bigint
Links to AbstractedNhsnSsiDetectedDuringBridge
The list of ways the surgical site infection was detected
DetectedDuring : nvarchar(300)
This column should no longer be used and will be removed in a future version. Use DetectedDuringComboKey instead. The way that the Patient Safety Component SSI was detected.
NhsnProcedureCategory : nvarchar(100)
The type of procedure the surgical site infection is tied to
InfectionContributedToDeath : tinyint
1/0 column that indicates whether the infection event contributed to the patient's death
InfectionPresentAtTimeOfSurgery : tinyint
1/0 column that indicates whether an infection was present at the time of surgery
MetAbscessCriterion : tinyint
1/0 column that indicates whether the abscess criterion was met
MetAntimicrobialTherapyCriterion : tinyint
1/0 column that indicates whether the institution of appropriate antimicrobial therapy criterion was met
MetApneaCriterion : tinyint
1/0 column that indicates whether the apnea criterion was met
MetBradycardiaCriterion : tinyint
1/0 column that indicates whether the bradycardia criterion was met
MetCoughCriterion : tinyint
1/0 column that indicates whether the cough criterion was met
MetDysuriaCriterion : tinyint
1/0 column that indicates whether the dysuria criterion was met
MetFeverCriterion : tinyint
1/0 column that indicates whether the fever criterion was met
MetHeatCriterion : tinyint
1/0 column that indicates whether the heat criterion was met
MetHypothermiaCriterion : tinyint
1/0 column that indicates whether the hypothermia criterion was met
MetImagingTestEvidenceCriterion : tinyint
1/0 column that indicates whether the imaging test evidence of infection criterion was met
MetIncisionDeliberatelyOpenedCriterion : tinyint
1/0 column that indicates whether the incision deliberately opened criterion was met
MetLethargyCriterion : tinyint
1/0 column that indicates whether the lethargy criterion was met
MetMdroInfectionSurveillanceDefinition : tinyint
1/0 column that indicates whether the infection is included in the MDRO infection surveillance reporting plan
MetNauseaCriterion : tinyint
1/0 column that indicates whether the nausea criterion was met
MetNotTestedCriterion : tinyint
1/0 column that indicates whether the culture or non-culture based testing not performed criterion was met
MetOrganismsIdentifiedBloodCriterion : tinyint
1/0 column that indicates whether the organisms identified from blood specimen criterion was met
MetOrganismsIdentifiedCriterion : tinyint
1/0 column that indicates whether the organisms identified criterion was met
MetOrganismsIdentifiedJointCriterion : tinyint
1/0 column that indicates whether the organisms identified from two or more periprosthetic specimens criterion was met
MetOtherInfectionEvidenceCriterion : tinyint
1/0 column that indicates whether the other evidence of infection criterion was met
MetOtherLabTestCriterion : tinyint
1/0 column that indicates whether the other positive laboratory test criterion was met
MetOtherSymptomsCriterion : tinyint
1/0 column that indicates whether the other signs and symptoms of infection criterion was met
MetPainTendernessCriterion : tinyint
1/0 column that indicates whether the pain or tenderness criterion was met
MetPhysicianDiagnosisCriterion : tinyint
1/0 column that indicates whether the physician diagnosis criterion was met
MetPurulentDrainageCriterion : tinyint
1/0 column that indicates whether the purulent drainage criterion was met
MetRednessCriterion : tinyint
1/0 column that indicates whether the redness criterion was met
MetSinusTractCriterion : tinyint
1/0 column that indicates whether the sinus tract criterion was met
MetSuprapubicTendernessCriterion : tinyint
1/0 column that indicates whether the suprapubic tenderness criterion was met
MetSwellingCriterion : tinyint
1/0 column that indicates whether the swelling criterion was met
MetVomitingCriterion : tinyint
1/0 column that indicates whether the vomiting criterion was met
MetWoundDehiscenceCriterion : tinyint
1/0 column that indicates whether the wound dehiscence criterion was met
PatientDied : tinyint
1/0 column that indicates whether the patient died after the infection event
RelatedSecondaryBsiIdentified : tinyint
1/0 column that indicates whether a related bloodstream infection was identified for the infection event
WasOutpatientProcedure : tinyint
1/0 column that indicates whether the associated procedure was an outpatient procedure
```

---

## AbstractedNhsnUtiFact

**Extracted:** 2025-07-22 23:35:27
**Content Length:** 6263 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class D Fact
Try It
AbstractedNhsnUtiFact
The abstracted urinary tract infection (UTI) fact contains information about UTI events abstracted at an organization. Each row represents an infection case. Change Type: Non-Snapshot
Columns
AbstractedNhsnUtiKey : bigint
Surrogate key used to uniquely identify the record
AbstractedInfectionKey : bigint
Links to AbstractedInfectionFact
Infection case associated with this urinary tract infection
AbstractedInfectionEpicId : numeric(18,0)
Epic ID of the infection case. This column identifies abstraction (RDI) records.
PatientDurableKey : bigint
Links to PatientDim
Patient associated with the infection case
FirstAdmissionToFacilityDateKey : bigint
Links to DateDim
Date when the patient was first admitted to the facility
FirstAdmissionToFacilityDate : date
Date when the patient was first admitted to the facility
InfectionDateKey : bigint
Links to DateDim
Date the patient met the definition for the abstracted infection
InfectionDate : date
Date the patient met the definition for the abstracted infection
LastTransferFromAcuteCareDateKey : bigint
Links to DateDim
Date when the resident was transferred from acute care before the event
LastTransferFromAcuteCareDate : date
Date when the resident was transferred from acute care before the event
UrinaryCatheterInsertionDepartmentKey : bigint
Links to DepartmentDim
Department where the urinary catheter was inserted
DeviceInsertionSite : nvarchar(300)
The site where the device was inserted
LongTermCarePrimaryResidentServiceType : nvarchar(300)
The primary resident service type (e.g., "Long-term dementia" or "Skilled nursing/Short-term rehab")
NhsnProcedureCategory : nvarchar(100)
The type of procedure attached to the urinary tract infection
OtherUrinaryDeviceType : nvarchar(300)
The type of the other urinary device that was present
UrinaryCatheterStatus : nvarchar(300)
Whether a urinary catheter was in place, recently removed, or neither at the time of infection
UrinaryCatheterInsertionInstant : datetime
Time/Date the urinary catheter was inserted
HadCatheterAtTimeOfTransfer : tinyint
1/0 column that indicates whether the patient had a catheter at the time they transferred from acute care
HasAnotherUrinaryDeviceInPlace : tinyint
1/0 column that indicates whether another urinary device was present
InfectionContributedToDeath : tinyint
1/0 column that indicates whether the infection event contributed to the patient's death
IsPostProcedureInfection : tinyint
1/0 column that indicates whether the infection event was post-procedure
MetAbscessCriterion : tinyint
1/0 column that indicates whether the abscess criterion was met
MetApneaCriterion : tinyint
1/0 column that indicates whether the apnea criterion was met
MetBradycardiaCriterion : tinyint
1/0 column that indicates whether the bradycardia criterion was met
MetConfusionCriterion : tinyint
1/0 column that indicates whether the confusion criterion was met
MetCostovertebralAnglePainTendernessCriterion : tinyint
1/0 column that indicates whether the costovertebral angle pain or tenderness criterion was met
MetDysuriaCriterion : tinyint
1/0 column that indicates whether the dysuria criterion was met
MetFeverCriterion : tinyint
1/0 column that indicates whether the fever criterion was met
MetFrequencyCriterion : tinyint
1/0 column that indicates whether the frequency criterion was met
MetHematuriaCriterion : tinyint
1/0 column that indicates whether the visible (gross) hematuria criterion was met
MetHypotensionCriterion : tinyint
1/0 column that indicates whether the hypotension criterion was met
MetHypothermiaCriterion : tinyint
1/0 column that indicates whether the hypothermia criterion was met
MetImagingTestEvidenceCriterion : tinyint
1/0 column that indicates whether the imaging test evidence of infection criterion was met
MetIncontinenceCriterion : tinyint
1/0 column that indicates whether the incontinence criterion was met
MetLethargyCriterion : tinyint
1/0 column that indicates whether the lethargy criterion was met
MetLeukocytosisCriterion : tinyint
1/0 column that indicates whether the leukocytosis criterion was met
MetMdroInfectionSurveillanceDefinition : tinyint
1/0 column that indicates whether the infection is included in the Multidrug-Resistant Organism Infection Surveillance reporting plan
MetOtherInfectionEvidenceCriterion : tinyint
1/0 column that indicates whether the other evidence of infection criterion was met
MetOrganismsIdentifiedBloodCriterion : tinyint
1/0 column that indicates whether the organisms identified from blood specimen criterion was met
MetOrganismsIdentifiedCriterion : tinyint
1/0 column that indicates whether the organisms identified from non-urine culture criterion was met
MetPainSwellingTendernessCriterion : tinyint
1/0 column that indicates whether the acute pain, swelling, or tenderness criterion was met
MetPainTendernessCriterion : tinyint
1/0 column that indicates whether the pain or tenderness criterion was met
MetPositiveUrineCulture100000Criterion : tinyint
1/0 column that indicates whether the positive urine culture of at least 100,000 CFU/mL criterion was met
MetPurulentDrainageCriterion : tinyint
1/0 column that indicates whether the purulent drainage criterion was met
MetRigorsCriterion : tinyint
1/0 column that indicates whether the rigors criterion was met
MetSuprapubicTendernessCriterion : tinyint
1/0 column that indicates whether the suprapubic tenderness criterion was met
MetUrgencyCriterion : tinyint
1/0 column that indicates whether the urgency criterion was met
MetVomitingCriterion : tinyint
1/0 column that indicates whether the vomiting criterion was met
PatientDied : tinyint
1/0 column that indicates whether the patient died after the infection event
RelatedSecondaryBsiIdentified : tinyint
1/0 column that indicates whether a related bloodstream infection was identified for the infection event
TransferredFromAcuteCare : tinyint
1/0 column that indicates whether the resident was transferred from acute care in the 4 weeks before the event
TransferredToAcuteCare : tinyint
1/0 column that indicates whether the resident was transferred to acute care in the 7 days following the event
```

---

## AbstractedNhsnVaeFact

**Extracted:** 2025-07-22 23:35:43
**Content Length:** 4439 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class D Fact
Try It
AbstractedNhsnVaeFact
The abstracted ventilator-associated event (VAE) fact contains information about VAEs abstracted at an organization. Each row represents an infection case. Change Type: Non-Snapshot
Columns
AbstractedNhsnVaeKey : bigint
Surrogate key used to uniquely identify the record
AbstractedInfectionKey : bigint
Links to AbstractedInfectionFact
Infection case associated with this ventilator-associated event
AbstractedInfectionEpicId : numeric(18,0)
Epic ID of the infection case. This column identifies abstraction (RDI) records.
InfectionDateKey : bigint
Links to DateDim
Date the patient met the definition for the abstracted event
InfectionDate : date
Date the patient met the definition for the abstracted event
PatientDurableKey : bigint
Links to PatientDim
Patient associated with the infection case
VentInitiatedDateKey : bigint
Links to DateDim
Date when the ventilation was initiated
VentInitiatedDate : date
Date when the ventilation was initiated
VentInitiatedDepartmentKey : bigint
Links to DepartmentDim
Department where the ventilation was initiated
NhsnProcedureCategory : nvarchar(100)
Type of procedure the VAE is tied to
HadAprvRiskFactor : tinyint
1/0 column that indicates whether the ventilation mode was APRV on the infection event date
InfectionContributedToDeath : tinyint
1/0 column that indicates whether the infection event contributed to the patient's death
IsPostProcedureInfection : tinyint
1/0 column that indicates whether the infection event was post-procedure
MetAbnormalTemperatureCriterion : tinyint
1/0 column that indicates whether the abnormal temperature criterion was met
MetAbnormalWbcCriterion : tinyint
1/0 column that indicates whether the abnormal white blood cell count criterion was met
MetBronchoalveolarLavageCultureCriterion : tinyint
1/0 column that indicates whether the bronchoalveolar lavage culture criterion was met
MetEndotrachealAspirateCultureCriterion : tinyint
1/0 column that indicates whether the endotracheal aspirate culture criterion was met
MetFiO2IncreaseCriterion : tinyint
1/0 column that indicates whether the FiO2 increase criterion was met
MetLegionellaSpeciesCriterion : tinyint
1/0 column that indicates whether the diagnostic test for Legionella species criterion was met
MetLungHistopathologyCriterion : tinyint
1/0 column that indicates whether the lung histopathology criterion was met
MetLungTissueCultureCriterion : tinyint
1/0 column that indicates whether the lung tissue culture criterion was met
MetMdroInfectionSurveillanceDefinition : tinyint
1/0 column that indicates whether the infection is included in the MDRO infection surveillance reporting plan
MetNewAbxStartCriterion : tinyint
1/0 column that indicates whether the new antimicrobial starts criterion was met
MetPeepIncreaseCriterion : tinyint
1/0 column that indicates whether the PEEP increase criterion was met
MetPleuralFluidCultureCriterion : tinyint
1/0 column that indicates whether the pleural fluid culture criterion was met
MetProtectedSpecimenBrushCultureCriterion : tinyint
1/0 column that indicates whether the protected specimen brush culture criterion was met
MetPurulentRespiratorySecretionsCriterion : tinyint
1/0 column that indicates whether the purulent respiratory secretions criterion was met
MetQualBronchoalveolarLavageCultureCriterion : tinyint
1/0 column that indicates whether the qualitative bronchoalveolar lavage culture criterion was met
MetQualEndotrachealAspirateCultureCriterion : tinyint
1/0 column that indicates whether the qualitative endotracheal aspirate culture criterion was met
MetQualLungTissueCultureCriterion : tinyint
1/0 column that indicates whether the qualitative lung tissue culture criterion was met
MetQualProtectedSpecimenBrushCultureCriterion : tinyint
1/0 column that indicates whether the qualitative protected specimen brush culture criterion was met
MetSputumCultureCriterion : tinyint
1/0 column that indicates whether the sputum culture criterion was met
MetViralPathogenCriterion : tinyint
1/0 column that indicates whether the viral pathogen criterion was met
PatientDied : tinyint
1/0 column that indicates whether the patient died after the infection event
RelatedSecondaryBsiIdentified : tinyint
1/0 column that indicates whether a related bloodstream infection was identified for the infection event
```

---

## AbstractedSurgicalProcedureFact

**Extracted:** 2025-07-22 23:36:00
**Content Length:** 4651 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class D Fact
Try It
AbstractedSurgicalProcedureFact
The abstracted surgical procedure fact contains general information about procedure events abstracted at an organization. Each row represents a procedure abstraction created to track a procedure for reporting and surgical site infection surveillance. Change Type: Non-Snapshot
Columns
AbstractedSurgicalProcedureKey : bigint
Surrogate key used to uniquely identify the record
RegistryDataEpicId : bigint
Epic ID of the procedure abstraction. This column identifies abstraction (RDI) records.
PatientDurableKey : bigint
Links to PatientDim
Patient associated with the procedure abstraction
ProcedureDateKey : bigint
Links to DateDim
The date the procedure was performed. This is the partition date key.
ProcedureDate : date
The date the procedure was performed
AdmissionDateKey : bigint
Links to DateDim
Admission date for the encounter where the surgery was performed
AdmissionDate : date
Admission date for the encounter where the surgery was performed
AssociatedLocationKey : bigint
Links to DepartmentDim
The location (hospital) associated with the procedure abstraction
AssociatedProcedureICDCodeDurableKey : bigint
Links to ProcedureDim
ICD code associated with the procedure abstraction
AssociatedProviderComboKey : bigint
Links to AbstractedSurgicalProcedureProviderBridge
Providers associated with the procedure abstraction
AssociatedSurgicalCaseKey : bigint
Links to SurgicalCaseFact
Surgical case associated with the procedure abstraction
InfectionControlReportingHospitalKey : bigint
Links to InfectionControlReportingLocationDim
The reporting hospital associated with the procedure abstraction
AbstractedProcedureCreationMethod : nvarchar(300)
The method used to create the procedure abstraction
AbstractionSource : nvarchar(50)
The source of information for this procedure abstraction (e.g "NHSN" or "Surveillance")
AbstractionStatus : nvarchar(300)
The current status of the procedure abstraction
ASAScore : nvarchar(300)
The ASA (American Society of Anesthesiologists) Physical Status score for the operative procedure
ClosureTechnique : nvarchar(300)
The closure technique for the operative procedure
ProcedureCodeAbbreviation : nvarchar(300)
The abbreviation for the NHSN procedure code associated with the procedure abstraction
ProcedureCode : nvarchar(300)
The NHSN procedure code associated with procedure abstraction
ProsthesisType : nvarchar(300)
The prosthesis type for the operative procedure
SpinalFusionLevel : nvarchar(300)
The spinal fusion level for the operative procedure
SpinalFusionTechnique : nvarchar(300)
The spinal fusion technique for the operative procedure
SurgeonCode : nvarchar(50)
The code of the surgeon who performed the principal operative procedure
WoundClass : nvarchar(300)
The wound classification for the operative procedure
NhsnComponent : nvarchar(300)
NHSN Component that the procedure abstraction is for
HeightPriorToSurgeryInches : numeric(18,3)
The patient's most recent height documented in the medical record in inches (in) prior to the operative procedure
LaborDurationHours : smallint
The number of hours the patient was in labor in the hospital
ORLogPanelNumber : smallint
The panel number from the OR log used to create the procedure abstraction
ProcedureDurationMinutes : smallint
The procedure duration in minutes
WeightPriorToSurgeryOunces : numeric(18,3)
The patient's most recent weight documented in the medical record in ounces (oz) prior to the operative procedure
GeneralAnesthesiaUsed : tinyint
1/0 column indicating whether general anesthesia was used for the operative procedure
HadJointInfection : tinyint
1/0 column that indicates whether the prothesis is associated with an infection at the index joint
IsDiabeticPatient : tinyint
1/0 column indicating whether the patient has a diagnosis of diabetes requiring management with insulin or a non-insulin anti-diabetic agent
IsEmergency : tinyint
1/0 column indicating whether the operative procedure was a non-elective, unscheduled operative procedure
IsOutpatient : tinyint
1/0 column indicating whether the operative procedure was performed on an NHSN Outpatient patient
IsTraumaCase : tinyint
1/0 column Indicating whether the operative procedure was performed because of blunt or penetrating traumatic injury to the patient
ScopeUsed : tinyint
1/0 column indicating whether the entire operative procedure was performed using a laparoscope/robotic assist
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## AbstractedSurgicalProcedureProviderBridge

**Extracted:** 2025-07-22 23:36:15
**Content Length:** 542 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class A Helper
Try It
AbstractedSurgicalProcedureProviderBridge
The abstracted surgical procedure provider bridge contains unique combinations of providers associated with a procedure abstraction. Each row represents a provider in a combination. Change Type: Non-Snapshot
Columns
AbstractedSurgicalProcedureProviderComboKey : bigint
Surrogate key used to uniquely identify the record
ProviderDurableKey : bigint
Links to ProviderDim
The destination key
```

---

## AbstractionQuestionAnswerFact

**Extracted:** 2025-07-22 23:36:31
**Content Length:** 1843 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Fact
Try It
AbstractionQuestionAnswerFact
This table contains answers to custom questions on infection case abstractions Change Type: Non-Snapshot
Columns
AbstractionQuestionAnswerKey : bigint
Surrogate key used to uniquely identify the record
AnsweredByUserDurableKey : bigint
Links to EmployeeDim
The user that entered the answer
AbstractedInfectionKey : bigint
Links to AbstractedInfectionFact
Infection case or LabID event associated with this answer
AbstractedSurgicalProcedureKey : bigint
Links to AbstractedSurgicalProcedureFact
Procedure abstraction associated with this answer
DateResponseKey : bigint
Links to DateDim
If applicable, response to the question in date format
RelevantDateKey : bigint
Links to DateDim
Date of the relevant abstraction. This is the partition date key.
InfectionDateKey : bigint
Links to DateDim
This column is deprecated and will be removed in the November 2025 version. Use RelevantDateKey for the partition date key. Date the patient met the definition for the abstracted infection.
QuestionKey : bigint
Links to SurveyQuestionDim
Question being answered
QuestionnaireKey : bigint
Links to SurveyDim
Questionnaire containing the question being answered
TimeOfDayResponseKey : bigint
Links to TimeOfDayDim
If applicable, response to the question in time format
AnsweredInstant : datetime
The date and time the question was answered
BooleanResponse : tinyint
If applicable, response to the question in boolean format
NumericResponse : numeric(20,6)
If applicable, response to the question in numeric format
Response : nvarchar(4000)
Response to the question as formatted free text
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## AbstractionReviewFact

**Extracted:** 2025-07-22 23:36:46
**Content Length:** 1146 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Fact
Try It
AbstractionReviewFact
The abstraction review fact contains information about indicators of infection or lab results that were reviewed by a user. Each row represents a single review action. Change Type: Non-Snapshot
Columns
AbstractionReviewKey : bigint
Surrogate key used to uniquely identify the record
AbstractedSurgicalProcedureKey : bigint
Links to AbstractedSurgicalProcedureFact
The abstracted surgical procedure reviewed by the user
ReviewDateKey : bigint
Links to DateDim
The date (UTC) that the user reviewed the abstraction
ReviewEmployeeDurableKey : bigint
Links to EmployeeDim
The user that reviewed the abstraction
ReviewAction : nvarchar(300)
The review action taken by the user while reviewing an abstraction
ReviewInstantUtc : datetime
The instant (UTC) that the user reviewed the abstraction
ReviewReason : nvarchar(300)
The review reason documented by the user while reviewing an abstraction
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## AddressDim

**Extracted:** 2025-07-22 23:37:02
**Content Length:** 2174 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Dim
Try It
AddressDim
The address dimension contains information about addresses. Each row represents an address. Change Type: Non-Snapshot
Columns
AddressKey : bigint
Surrogate key used to uniquely identify the record
SourceAddress : nvarchar(150)
Street address extracted from a source system
SourceCity : nvarchar(150)
City extracted from a source system
SourceCounty : nvarchar(300)
County extracted from a source system
SourceStateOrProvince : nvarchar(300)
State or province extracted from a source system
SourceStateOrProvinceAbbreviation : nvarchar(300)
Abbreviated name of the state or province extracted from a source system
SourceCountry : nvarchar(300)
Country extracted from a source system
SourcePostalCode : nvarchar(100)
Postal code extracted from a source system
SourceCensusBlockGroupFipsCode : nvarchar(50)
Census block group. By default, this is the same as the census tract extracted from the source system.
Address : nvarchar(150)
Street address. By default, this is the same as the street address extracted from the source system.
City : nvarchar(150)
City. By default, this is the same as the city extracted from the source system.
County : nvarchar(300)
County. By default, this is the same as the county extracted from the source system.
StateOrProvince : nvarchar(300)
State or province. By default, this is the same as the state or province extracted from the source system.
StateOrProvinceAbbreviation : nvarchar(300)
Abbreviated name of the state or province. By default, this is the same as the abbreviated name of the state or province extracted from the source system.
Country : nvarchar(300)
Country. By default, this is the same as the country extracted from the source system.
PostalCode : nvarchar(100)
Postal code. By default, this is the same as the postal code extracted from the source system.
CensusBlockGroupFipsCode : nvarchar(50)
Census block group FIPS code extracted from a source system
Latitude : float
Latitude
Longitude : float
Longitude
Status : nvarchar(50)
Indicates whether the address has been standardized and validated
```

---

## AddressHistoryFact

**Extracted:** 2025-07-22 23:37:13
**Content Length:** 9863 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class F Fact
Try It
AppointmentRequestFact
The appointment request fact contains information about appointment requests. Each row represents an appointment request. Change Type: Non-Snapshot
Columns
AppointmentRequestKey : bigint
Surrogate key used to uniquely identify the record
AppointmentRequestEpicId : numeric(18,0)
Epic ID of the appointment request. This column identifies appointment request (ORD) records.
AssociatedReferralKey : bigint
Links to ReferralFact
Referral associated with the appointment request
BaseStatus : nvarchar(300)
Base status of the associated appointment request
Status : nvarchar(300)
Status of the associated appointment request
CancellationDateKey : bigint
Links to DateDim
Local date the appointment request was canceled
CancellationInstant : datetime
Local date and time the appointment request was canceled
CancellationEmployeeDurableKey : bigint
Links to EmployeeDim
Employee who canceled the appointment request
CancelReason : nvarchar(300)
Reason the appointment request was canceled
CreationDateKey : bigint
Links to DateDim
UTC date the appointment request was created
CreationDateLocalKey : bigint
Links to DateDim
Local date the appointment request was created
CreationInstant : datetime
UTC date and time the appointment request was created
CreationInstantLocal : datetime
Local date and time the appointment request was created
CreationDepartmentKey : bigint
Links to DepartmentDim
Department where the appointment request was created
CreationEmployeeDurableKey : bigint
Links to EmployeeDim
Employee who created the appointment request
CurrentStatusDateKey : bigint
Links to DateDim
Local date the appointment request reached the current status
CurrentStatusInstant : datetime
Local date and time the appointment request reached the current status
CurrentStatusInstantUTC : datetime
UTC date and time the appointment request reached the current status
DeferReason : nvarchar(300)
Reason why the appointment request is deferred. This column should only be used when request level defer is turned on (I SDF 10186).
DeferUntilDateKey : bigint
Links to DateDim
UTC date in which the current deferral for the appointment request expires. This column should only be used when request level defer is turned on (I SDF 10186).
CurrentDeferUntilInstant : datetime
UTC date and time at which the current deferral for the appointment request expires. This column should only be used when request level defer is turned on (I SDF 10186).
DepartmentBecameResponsibleDateKey : bigint
Links to DateDim
Local date the department became responsible for the appointment request
DeptBecameResponsibleInstant : datetime
Local date and time the department became responsible for the appointment request
DeptBecameResponsibleInstantUTC : datetime
UTC date and time the department became responsible for the appointment request
EarliestAppointmentDateKey : bigint
Links to DateDim
Local date of the earliest non-canceled appointment linked to this appointment request
EarliestVisitInstant : datetime
Local date and time of the earliest non-canceled appointment linked to this appointment request
EarliestVisitKey : bigint
Links to VisitFact
The earliest appointment scheduled from the appointment request
AppointmentRequestedReason : nvarchar(300)
The patient's reason for requesting an appointment
ExternallyScheduled : tinyint
1/0 column that indicates whether the appointment request was scheduled at an external organization. This column returns 1 if the appointment request was scheduled outside of your organization and 0 if the appointment request was scheduled in your organization (or is not yet scheduled).
ExternallyScheduledReason : nvarchar(300)
Reason the appointment request was externally scheduled
FinancialScreeningLastRunDateKey : bigint
Links to DateDim
Local date the financial screening was last run on the appointment request
FinancialScreeningLastRunInstant : datetime
Local instant the financial screening was last run on the appointment request
FirstCallOutcome : nvarchar(300)
Outcome of the first call associated with the appointment request
FirstTouchDateKey : bigint
Links to DateDim
Local date the appointment request was first worked by an end user
FirstTouchInstant : datetime
Local instant the appointment request was first worked by an end user
InActiveWorkqueueTab : tinyint
1/0 column that indicates whether the appointment request is currently in an active tab in a workqueue. This column returns 1 if the appointment request is currently in an active tab in a workqueue and 0 if the appointment request isn't currently in an active tab in a workqueue.
InAnyWorkqueue : tinyint
1/0 column that indicates whether the appointment request is currently in a workqueue. This column returns 1 if the appointment request is currently in a workqueue and 0 if the appointment request isn't currently in a workqueue.
InDeferredWorkqueueTab : int
1/0 column that indicates whether the appointment request is currently in a deferred tab in a workqueue. This column returns 1 if the appointment request is currently in a deferred tab in a workqueue and 0 if the appointment request isn't currently in a deferred tab in a workqueue.
IndicationCount : smallint
Count of indications listed in the appointment request
LastTouchInstant : datetime
Local date and time the appointment request was last worked by an end user
LastTouchInstantUTC : datetime
UTC date and time the appointment request was last worked by an end user
LastTouchDate : datetime
Local date the appointment request was last worked by an end user
LastTouchDateKey : bigint
Links to DateDim
Local date the appointment request was last worked by an end user
PatientDurableKey : bigint
Links to PatientDim
Patient associated with the appointment request
ProcedureOrderKey : bigint
Links to ProcedureOrderFact
Procedure order associated with the appointment request
ReferredByProviderDurableKey : bigint
Links to ProviderDim
Provider who placed the appointment request
RequestedAppointmentDateKey : bigint
Links to DateDim
Local date the patient requested to be seen
RequestedSpecialty : nvarchar(300)
Specialty associated with the appointment request
RequestedSpecialtyEpicId : nvarchar(50)
Department specialty id associated with the appointment request
RequestMethod : nvarchar(300)
Method used to request treatment
ResponsibleDepartmentKey : bigint
Links to DepartmentDim
Department responsible for scheduling this appointment request
SchedulingDateKey : bigint
Links to DateDim
Local date the appointment request was scheduled
SchedulingInstant : datetime
Local instant the appointment request was scheduled
SecondCallOutcome : nvarchar(300)
Outcome of the second call associated with the appointment request
Source : nvarchar(300)
Source of the appointment request
ThirdCallOutcome : nvarchar(300)
Outcome of the third call associated with the appointment request
TriageCompletedDate : datetime
Local date triage of the appointment request was completed
TriageCompletedDateKey : bigint
Links to DateDim
Local date triage of the appointment request was completed
TriageCompletedInstant : datetime
Local date and time triage of the appointment request was completed
TriagePoolName : nvarchar(300)
Pool triaging the appointment request
TriageStartedDate : datetime
Local date triage of the appointment request was started
TriageStartedDateKey : bigint
Links to DateDim
Local date triage of the appointment request was started
TriageStartedInstant : datetime
Local date and time triage of the appointment request was started
TriageStatus : nvarchar(300)
Triage status of the associated appointment request
WasReminderSent : tinyint
1/0 column that indicates whether communication was sent to remind the patient that an appointment needs to be scheduled. This column returns 1 if a reminder was sent, 0 if a reminder was not sent.
ProcedureDurableKey : bigint
Links to ProcedureDim
The procedure that was ordered
EarliestVisitSchedulingEmployeeDurableKey : bigint
Links to EmployeeDim
Employee who scheduled the first appointment from this appointment request
SourceWorkflow : nvarchar(300)
The workflow from which an order was created or modified
PrimaryVisitType : nvarchar(300)
The first visit type listed for the appointment request
PrimaryVisitTypeEpicId : nvarchar(300)
The Epic ID of the first visit type listed for the appointment request
CreationTimeOfDayKey : bigint
Links to TimeOfDayDim
Local time of day the appointment request was created
AppointmentRequestTagComboKey : bigint
Links to AppointmentRequestTagBridge
All tags for the appointment request
ServiceAreaComboKey : bigint
Links to DepartmentBridge
All service areas associated with this request, including currently and previously responsible service areas, visit service areas, the creation service area, and the current referred-to service area in the linked referral
WasTicketReleased : tinyint
1/0 column that indicates whether the request was released to the patient as a ticket.
WasScheduledOnline : tinyint
1/0 column that indicates whether the request was scheduled by the patient online.
OrderClass : nvarchar(300)
Order class
OrderType : nvarchar(300)
Order type
OrderingMode : nvarchar(300)
Ordering mode. For Epic data, this column can contain Outpatient or Inpatient.
OrderPriority : nvarchar(300)
Priority associated with the procedure order
IsOutpatientPRN : tinyint
1/0 column that indicates the PRN status of a procedure order (OP order mode only). This column returns 1 if the appointment procedure order PRN status is Yes (patient should schedule this order "as needed") and 0 if PRN status is No (order is recommended/required to be scheduled).
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## AdHocPaymentTransactionFact

**Extracted:** 2025-07-22 23:37:26
**Content Length:** 5083 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class E Fact
Try It
AdHocPaymentTransactionFact
AdHocPaymentTransactionFact contains information on transactions created in an ad hoc workflow. Change Type: Non-Snapshot
Columns
AdHocPaymentTransactionKey : bigint
Surrogate key used to uniquely identify the record
CoverageKey : bigint
Links to CoverageDim
The coverage of the member associated with the transaction
EffectiveDateKey : bigint
Links to DateDim
The effective date of the transaction
OwningBusinessSegmentKey : bigint
Links to DepartmentDim
The business segment that created the transaction
PrimaryLocationKey : bigint
Links to DepartmentDim
The primary location associated with the transaction
PrimaryCareProviderDurableKey : bigint
Links to ProviderDim
The primary care provider associated with the transaction
VendorKey : bigint
Links to VendorDim
The vendor associated with the transaction
ServiceAreaKey : bigint
Links to DepartmentDim
The service area associated with the transaction
BenefitPlanKey : bigint
Links to CoverageDim
The benefit plan associated with the transaction
PaymentDateKey : bigint
Links to DateDim
The date of the payment associated with the transaction
PatientDateOfBirthKey : bigint
Links to DateDim
The member's date of birth at the time of the transaction's creation
AttributedMedicalGroupKey : bigint
Links to PlaceOfServiceDim
The medical group (EAF) record associated with the transaction through its associated claim
AttributedRegionKey : bigint
Links to PlaceOfServiceDim
The region to which the transaction is attributed through its associated claim
AssociatedClaimKey : bigint
Links to ApClaimFact
The claim that is associated with the transaction
PatientDurableKey : bigint
Links to PatientDim
The member associated with the transaction
CheckKey : bigint
Links to ApCheckFact
The check associated with the transaction
CarrierEpicId : nvarchar(50)
The Epic ID of the carrier (MCR) record associated with the transaction
CarrierName : nvarchar(50)
The name of the carrier associated with the transaction
CorporationEpicId : nvarchar(50)
The Epic ID of the corporation (CPG) record associated with the transaction
CorporationName : nvarchar(100)
The name of the corporation associated with the transaction
MemberGroupEpicId : nvarchar(50)
The Epic ID of the member group (MGR) record associated with the transaction
MemberGroupName : nvarchar(200)
The name of the member group associated with the transaction
RiskPanelEpicId : nvarchar(50)
The Epic ID of the risk panel (RKP) record associated with the transaction
RiskPanelName : nvarchar(50)
The name of the risk panel associated with the transaction
DivisionEpicId : nvarchar(50)
The Epic ID of the division (DPG) record associated with the transaction
DivisionName : nvarchar(300)
The name of the division associated with the transaction
EmployerGroupKey : bigint
Links to ManagedCareEmployerDim
The employer group associated with the transaction
EmployerGroupEpicId : nvarchar(50)
The Epic ID of the employer group (PPG) associated with the transaction
EmployerGroupName : nvarchar(300)
The name of the employer group associated with the transaction
LineOfBusinessEpicId : nvarchar(50)
The Epic ID of the line of business (EAF) record associated with the transaction
LineOfBusinessName : nvarchar(300)
The name of the line of business associated with the transaction
NetworkEpicId : nvarchar(50)
The Epic ID of the network (NET) record associated with the transaction
NetworkName : nvarchar(200)
The name of the network associated with the transaction
RiskPoolEpicId : nvarchar(50)
The Epic ID of the risk pool (POL) record associated with the transaction
RiskPoolName : nvarchar(50)
The name of the risk pool associated with the transaction
BusinessGroupEpicId : nvarchar(50)
The Epic ID of the business group (BGR) record associated with the transaction
BusinessGroupName : nvarchar(300)
The name of the business group associated with this transaction
ResponsibilityClassEpicId : nvarchar(50)
The Epic ID of the responsibility class (NRC) record associated with the transaction
ResponsibilityClassName : nvarchar(200)
The name of the responsibility class associated with the transaction
Amount : numeric(12,2)
The amount of the transaction
PaymentStatus : nvarchar(300)
Describes what the status of the transaction is in terms of its actual payment, can be Computed, Released to AP, Batched, or Paid
Specialty : nvarchar(300)
The specialty associated with the transaction
Comment : nvarchar(4000)
The comment left on the transaction
PatientSex : nvarchar(450)
The member's sex at the time of the transaction's creation. This is the legal sex of the member as defined by a government body.
TransactionType : nvarchar(300)
The type of transaction associated with the transaction
TransactionEpicId : nvarchar(50)
The Epic ID of the transaction
AdjustmentReason : nvarchar(300)
The reason the adjustment was created
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## AnesthesiaMedicationAdministrationFact

**Extracted:** 2025-07-22 23:37:41
**Content Length:** 1879 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Fact
Try It
AnesthesiaMedicationAdministrationFact
The anesthesia medication administration fact contains information about medication administrations given during anesthesia care. Each row represents a medication administration. Change Type: Non-Snapshot
Columns
AnesthesiaMedicationAdministrationKey : bigint
Surrogate key used to uniquely identify the record
AnesthesiaRecordKey : bigint
Links to AnesthesiaRecordFact
Anesthesia record associated with the administration
MedicationAdministrationKey : bigint
Links to MedicationAdministrationFact
Medication administration
PatientDurableKey : bigint
Links to PatientDim
Patient associated with the administration
MedicationOrderKey : bigint
Links to MedicationOrderFact
Parent medication order associated with the administration
MedicationKey : bigint
Links to MedicationDim
Medication which was administered
AdminstrationDepartmentKey : bigint
Links to DepartmentDim
Department associated with the administration
AuthorizationUserDurableKey : bigint
Links to EmployeeDim
User who authorized the administration
AdministeringUserDurableKey : bigint
Links to EmployeeDim
User who administered the medication
OrderingUserDurableKey : bigint
Links to EmployeeDim
User who ordered the medication
AdministrationStartDateKey : bigint
Links to DateDim
Date when the administration started
AdministrationStartTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the administration started
AdministrationStartInstant : datetime
Date and time the administration started
AdministrationRoute : nvarchar(300)
Route through which the product was administered
OrderSource : nvarchar(300)
The source of the order
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## AnesthesiaRecordFact

**Extracted:** 2025-07-22 23:38:00
**Content Length:** 12987 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class D Fact
Try It
AnesthesiaRecordFact
The anesthesia record fact contains information about anesthesia records. Each row represents an anesthesia record. Change Type: Non-Snapshot
Columns
AnesthesiaRecordKey : bigint
Surrogate key used to uniquely identify the record
AnesthesiaRecordEpicId : nvarchar(50)
Epic ID of the anesthesia record. This column identifies summary block (HSB) records.
PatientKey : bigint
Links to PatientDim
Patient associated with the record
PatientDurableKey : bigint
Links to PatientDim
Patient associated with the record
SurgicalCaseKey : bigint
Links to SurgicalCaseFact
Primary surgical case associated with the anesthesia record
AnesthesiaDayOfSurgeryEncounterKey : bigint
Links to EncounterFact
Encounter containing day of surgery data for the anesthesia record. For Epic data, this is the type 52 encounter.
AnesthesiaNoteEncounterKey : bigint
Links to EncounterFact
Encounter containing note data and other data that applies to the entire anesthesia episode. For Epic data, this is the type 53 encounter.
HospitalEncounterKey : bigint
Links to EncounterFact
Encounter associated with the hospital admission or hospital outpatient visit with which the case is associated
ResponsibleAnesthesiologistKey : bigint
Links to ProviderDim
Responsible provider for the record
ResponsibleAnesthesiologistDurableKey : bigint
Links to ProviderDim
Responsible provider for the record
PrimarySurgeonKey : bigint
Links to ProviderDim
Primary surgeon for the record
PrimarySurgeonDurableKey : bigint
Links to ProviderDim
Primary surgeon for the record
PrimaryProcedureKey : bigint
Links to ProcedureDim
Primary procedure associated with the record
PrimaryProcedureDurableKey : bigint
Links to ProcedureDim
Primary procedure associated with the record
DepartmentKey : bigint
Links to DepartmentDim
Department in which the anesthesia procedure was performed
OperatingRoomKey : bigint
Links to DepartmentDim
Operating room in which the procedure took place
AnesthesiaDateKey : bigint
Links to DateDim
Date of the anesthesia record
AnesthesiaStartInstant : datetime
Date and time that anesthesia started for the patient. For Epic data, this is the instant of the anesthesia start event.
AnesthesiaEndInstant : datetime
Date and time that anesthesia ended for the patient. For Epic data, this is the instant of the anesthesia end event.
PrimaryProcedureName : nvarchar(500)
Primary procedure name associated with the anesthesia record. This can contain the surgical procedure, procedure appointment, or ad hoc procedure.
FirstAnesthesiaType : nvarchar(300)
First anesthesia type
SecondAnesthesiaType : nvarchar(300)
Second anesthesia type
ThirdAnesthesiaType : nvarchar(300)
Third anesthesia type
SurgicalService : nvarchar(300)
Surgical service of the primary procedure associated with the anesthesia record
AdmissionPatientClass : nvarchar(300)
Patient class at the time of admission
AsaPhysicalStatus : nvarchar(100)
American Society of Anesthesiologists (ASA) physical status classification
AnesthesiaProviderGroup : nvarchar(300)
The provider group associated with the responsible anesthesiologist on the record
IsEmergent : tinyint
1/0 column indicating if the anesthesia procedure was emergent. This column returns 1 if the procedure was emergent or 0 if it was not.
IsUnsuccessfulAttempt : tinyint
1/0 column that indicates if the anesthesia record was associated with an unsuccessful attempt case. This column returns 1 if the anesthesia record was associated with an unsuccessful case and 0 otherwise.
IsPatientVerified : tinyint
1/0 column indicating if a patient barcode was scanned during intraprocedure. This column returns 1 if a patient barcode was scanned during intraprocedure or 0 if it was not.
PatientNotScannedReason : nvarchar(300)
First override reason given if the patient barcode was not scanned during intraprocedure.
AnesthesiaSignOffInstant : datetime
The date and time when anesthesia is ready for the procedure on the primary log
AnesthesiaSignOffDateKey : bigint
Links to DateDim
The date when anesthesia is ready for the procedure on the primary log
AnesthesiaSignOffTimeOfDayKey : bigint
Links to TimeOfDayDim
The time of day when anesthesia is ready for the procedure on the primary log
EpiduralToCSectionInstant : datetime
Date and time when the labor epidural transitioned to a C-section on the primary log
EpiduralToCSectionDateKey : bigint
Links to DateDim
Date when the labor epidural transitioned to a C-section on the primary log
EpiduralToCSectionTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the labor epidural transitioned to a C-section on the primary log
ScheduledProcedureStartInstant : datetime
Date and time when the procedure was scheduled to start on the primary log
ScheduledProcedureStartDateKey : bigint
Links to DateDim
Date when the procedure was scheduled to start on the primary log
ScheduledProcedureStartTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the procedure was scheduled to start on the primary log
ScheduledProcedureEndInstant : datetime
Date and time when the procedure was scheduled to end on the primary log
ScheduledProcedureEndDateKey : bigint
Links to DateDim
Date when the procedure was scheduled to end on the primary log
ScheduledProcedureEndTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the procedure was scheduled to end on the primary log
AdmissionInstant : datetime
Date and time that the patient was admitted
AdmissionDateKey : bigint
Links to DateDim
Date that the patient was admitted
AdmissionTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the patient was admitted
FacilityDischargeInstant : datetime
The date and time when the patient is discharged from the facility on the primary log
FacilityDischargeDateKey : bigint
Links to DateDim
The date when the patient is discharged from the facility on the primary log
FacilityDischargeTimeOfDayKey : bigint
Links to TimeOfDayDim
The time of day when the patient is discharged from the facility on the primary log
InFacilityInstant : datetime
The date and time when the patient arrived in the facility on the primary log
InFacilityDateKey : bigint
Links to DateDim
The date when the patient arrived in the facility on the primary log
InFacilityTimeOfDayKey : bigint
Links to TimeOfDayDim
The time of day when the patient arrived in the facility on the primary log
InPreprocedureInstant : datetime
Date and time when the patient entered pre-procedure on the primary log
InPreprocedureDateKey : bigint
Links to DateDim
Date when the patient entered pre-procedure on the primary log
InPreprocedureTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the patient entered pre-procedure on the primary log
PatientInRoomInstant : datetime
Date and time when the patient arrived in the operating room on the primary log
PatientInRoomDateKey : bigint
Links to DateDim
Date when the patient arrived in the operating room on the primary log
PatientInRoomTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the patient arrived in the operating room on the primary log
InductionInstant : datetime
Date and time when anesthesia was induced for the patient on the primary log
InductionDateKey : bigint
Links to DateDim
Date when anesthesia was induced for the patient on the primary log
InductionTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when anesthesia was induced for the patient on the primary log
AnesthesiaReadyInstant : datetime
Date and time when induction has been completed on the primary log
AnesthesiaReadyDateKey : bigint
Links to DateDim
Date when induction has been completed on the primary log
AnesthesiaReadyTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when induction has been completed on the primary log
ProcedureStartInstant : datetime
Date and time when the procedure started on the primary log
ProcedureStartDateKey : bigint
Links to DateDim
Date when the procedure started on the primary log
ProcedureStartTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the procedure started on the primary log
ProcedureEndInstant : datetime
Date and time when the procedure ended on the primary log
ProcedureEndDateKey : bigint
Links to DateDim
Date when the procedure ended on the primary log
ProcedureEndTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the procedure ended on the primary log
PatientOutOfRoomInstant : datetime
Date and time when the patient left the operating room on the primary log
PatientOutOfRoomDateKey : bigint
Links to DateDim
Date when the patient left the operating room on the primary log
PatientOutOfRoomTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the patient left the operating room on the primary log
PatientInPacuInstant : datetime
Date and time when the patient arrived in the post-anesthesia care unit (PACU) on the primary log
PatientInPacuDateKey : bigint
Links to DateDim
Date when the patient arrived in the post-anesthesia care unit (PACU) on the primary log
PatientInPacuTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the patient arrived in the post-anesthesia care unit (PACU) on the primary log
PacuCareCompleteInstant : datetime
Date and time when the patient is done receiving care in the post-anesthesia care unit (PACU) on the primary log
PacuCareCompleteDateKey : bigint
Links to DateDim
Date when the patient is done receiving care in the post-anesthesia care unit (PACU) on the primary log
PacuCareCompleteTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the patient is done receiving care in the post-anesthesia care unit (PACU) on the primary log
PatientOutOfPacuInstant : datetime
Date and time when the patient left the post-anesthesia care unit (PACU) on the primary log
PatientOutOfPacuDateKey : bigint
Links to DateDim
Date when the patient left the post-anesthesia care unit (PACU) on the primary log
PatientOutOfPacuTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the patient left the post-anesthesia care unit (PACU) on the primary log
PatientInPhaseIIInstant : datetime
Date and time when the patient arrived in the phase II recovery area on the primary log
PatientInPhaseIIDateKey : bigint
Links to DateDim
Date when the patient arrived in the phase II recovery area on the primary log
PatientInPhaseIITimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the patient arrived in the phase II recovery area on the primary log
PhaseIICareCompleteInstant : datetime
Date and time when the patient is done receiving care in the phase II recovery area on the primary log
PhaseIICareCompleteDateKey : bigint
Links to DateDim
Date when the patient is done receiving care in the phase II recovery area on the primary log
PhaseIICareCompleteTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the patient is done receiving care in the phase II recovery area on the primary log
PatientOutOfPhaseIIInstant : datetime
Date and time when the patient left the phase II recovery area on the primary log
PatientOutOfPhaseIIDateKey : bigint
Links to DateDim
Date when the patient left the phase II recovery area on the primary log
PatientOutOfPhaseIITimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the patient left the phase II recovery area on the primary log
EmergenceInstant : datetime
Date and time of the patient's emergence from anesthesia on the primary log
EmergenceDateKey : bigint
Links to DateDim
Date of the patient's emergence from anesthesia on the primary log
EmergenceTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day of the patient's emergence from anesthesia on the primary log
IntubationInstant : datetime
The date and time when the patient is intubated on the primary log
IntubationDateKey : bigint
Links to DateDim
The date when the patient is intubated on the primary log
IntubationTimeOfDayKey : bigint
Links to TimeOfDayDim
The time of day when the patient is intubated on the primary log
ExtubationInstant : datetime
The date and time when the patient is extubated on the primary log
ExtubationDateKey : bigint
Links to DateDim
The date when the patient is extubated on the primary log
ExtubationTimeOfDayKey : bigint
Links to TimeOfDayDim
The time of day when the patient is extubated on the primary log
DeathInstant : datetime
The documented instant of death of the patient associated with the anesthesia record
DeathDateKey : bigint
Links to DateDim
The documented date of death of the patient associated with the anesthesia record
DeathTimeOfDayKey : bigint
Links to TimeOfDayDim
The documented time of death of the patient associated with the anesthesia record
RecordSignedInstant : datetime
Date and time when the anesthesia record was signed (closed)
RecordSignedDateKey : bigint
Links to DateDim
Date when the anesthesia record was signed (closed)
RecordSignedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the anesthesia record was signed (closed)
```

---

## AnesthesiaTimingEventFact

**Extracted:** 2025-07-22 23:38:16
**Content Length:** 450 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Fact
Try It
AnesthesiaTimingEventFact
The anesthesia timing event fact contains information about events. Each row represents one event. Change Type: Non-Snapshot
Columns
EventKey : bigint
Surrogate key used to uniquely identify the record
PerfusionRecordKey : bigint
Links to PerfusionRecordFact
The perfusion record on which the event was documented.
```

---

## BirthAnesthesiaBridge

**Extracted:** 2025-07-22 23:38:31
**Content Length:** 529 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class A Helper
Try It
BirthAnesthesiaBridge
The birth anesthesia bridge contains unique combinations of anesthesia methods associated with births. Each row represents an anesthesia method in a combination. Change Type: Non-Snapshot
Columns
BirthAnesthesiaComboKey : bigint
Combination key used to identify a unique combination of anesthesia methods
CategoryKey : bigint
Links to CategoryDim
One of the anesthesia methods in the combination
```

---

## AppointmentRequestFact

**Extracted:** 2025-07-22 23:38:49
**Content Length:** 9863 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class F Fact
Try It
AppointmentRequestFact
The appointment request fact contains information about appointment requests. Each row represents an appointment request. Change Type: Non-Snapshot
Columns
AppointmentRequestKey : bigint
Surrogate key used to uniquely identify the record
AppointmentRequestEpicId : numeric(18,0)
Epic ID of the appointment request. This column identifies appointment request (ORD) records.
AssociatedReferralKey : bigint
Links to ReferralFact
Referral associated with the appointment request
BaseStatus : nvarchar(300)
Base status of the associated appointment request
Status : nvarchar(300)
Status of the associated appointment request
CancellationDateKey : bigint
Links to DateDim
Local date the appointment request was canceled
CancellationInstant : datetime
Local date and time the appointment request was canceled
CancellationEmployeeDurableKey : bigint
Links to EmployeeDim
Employee who canceled the appointment request
CancelReason : nvarchar(300)
Reason the appointment request was canceled
CreationDateKey : bigint
Links to DateDim
UTC date the appointment request was created
CreationDateLocalKey : bigint
Links to DateDim
Local date the appointment request was created
CreationInstant : datetime
UTC date and time the appointment request was created
CreationInstantLocal : datetime
Local date and time the appointment request was created
CreationDepartmentKey : bigint
Links to DepartmentDim
Department where the appointment request was created
CreationEmployeeDurableKey : bigint
Links to EmployeeDim
Employee who created the appointment request
CurrentStatusDateKey : bigint
Links to DateDim
Local date the appointment request reached the current status
CurrentStatusInstant : datetime
Local date and time the appointment request reached the current status
CurrentStatusInstantUTC : datetime
UTC date and time the appointment request reached the current status
DeferReason : nvarchar(300)
Reason why the appointment request is deferred. This column should only be used when request level defer is turned on (I SDF 10186).
DeferUntilDateKey : bigint
Links to DateDim
UTC date in which the current deferral for the appointment request expires. This column should only be used when request level defer is turned on (I SDF 10186).
CurrentDeferUntilInstant : datetime
UTC date and time at which the current deferral for the appointment request expires. This column should only be used when request level defer is turned on (I SDF 10186).
DepartmentBecameResponsibleDateKey : bigint
Links to DateDim
Local date the department became responsible for the appointment request
DeptBecameResponsibleInstant : datetime
Local date and time the department became responsible for the appointment request
DeptBecameResponsibleInstantUTC : datetime
UTC date and time the department became responsible for the appointment request
EarliestAppointmentDateKey : bigint
Links to DateDim
Local date of the earliest non-canceled appointment linked to this appointment request
EarliestVisitInstant : datetime
Local date and time of the earliest non-canceled appointment linked to this appointment request
EarliestVisitKey : bigint
Links to VisitFact
The earliest appointment scheduled from the appointment request
AppointmentRequestedReason : nvarchar(300)
The patient's reason for requesting an appointment
ExternallyScheduled : tinyint
1/0 column that indicates whether the appointment request was scheduled at an external organization. This column returns 1 if the appointment request was scheduled outside of your organization and 0 if the appointment request was scheduled in your organization (or is not yet scheduled).
ExternallyScheduledReason : nvarchar(300)
Reason the appointment request was externally scheduled
FinancialScreeningLastRunDateKey : bigint
Links to DateDim
Local date the financial screening was last run on the appointment request
FinancialScreeningLastRunInstant : datetime
Local instant the financial screening was last run on the appointment request
FirstCallOutcome : nvarchar(300)
Outcome of the first call associated with the appointment request
FirstTouchDateKey : bigint
Links to DateDim
Local date the appointment request was first worked by an end user
FirstTouchInstant : datetime
Local instant the appointment request was first worked by an end user
InActiveWorkqueueTab : tinyint
1/0 column that indicates whether the appointment request is currently in an active tab in a workqueue. This column returns 1 if the appointment request is currently in an active tab in a workqueue and 0 if the appointment request isn't currently in an active tab in a workqueue.
InAnyWorkqueue : tinyint
1/0 column that indicates whether the appointment request is currently in a workqueue. This column returns 1 if the appointment request is currently in a workqueue and 0 if the appointment request isn't currently in a workqueue.
InDeferredWorkqueueTab : int
1/0 column that indicates whether the appointment request is currently in a deferred tab in a workqueue. This column returns 1 if the appointment request is currently in a deferred tab in a workqueue and 0 if the appointment request isn't currently in a deferred tab in a workqueue.
IndicationCount : smallint
Count of indications listed in the appointment request
LastTouchInstant : datetime
Local date and time the appointment request was last worked by an end user
LastTouchInstantUTC : datetime
UTC date and time the appointment request was last worked by an end user
LastTouchDate : datetime
Local date the appointment request was last worked by an end user
LastTouchDateKey : bigint
Links to DateDim
Local date the appointment request was last worked by an end user
PatientDurableKey : bigint
Links to PatientDim
Patient associated with the appointment request
ProcedureOrderKey : bigint
Links to ProcedureOrderFact
Procedure order associated with the appointment request
ReferredByProviderDurableKey : bigint
Links to ProviderDim
Provider who placed the appointment request
RequestedAppointmentDateKey : bigint
Links to DateDim
Local date the patient requested to be seen
RequestedSpecialty : nvarchar(300)
Specialty associated with the appointment request
RequestedSpecialtyEpicId : nvarchar(50)
Department specialty id associated with the appointment request
RequestMethod : nvarchar(300)
Method used to request treatment
ResponsibleDepartmentKey : bigint
Links to DepartmentDim
Department responsible for scheduling this appointment request
SchedulingDateKey : bigint
Links to DateDim
Local date the appointment request was scheduled
SchedulingInstant : datetime
Local instant the appointment request was scheduled
SecondCallOutcome : nvarchar(300)
Outcome of the second call associated with the appointment request
Source : nvarchar(300)
Source of the appointment request
ThirdCallOutcome : nvarchar(300)
Outcome of the third call associated with the appointment request
TriageCompletedDate : datetime
Local date triage of the appointment request was completed
TriageCompletedDateKey : bigint
Links to DateDim
Local date triage of the appointment request was completed
TriageCompletedInstant : datetime
Local date and time triage of the appointment request was completed
TriagePoolName : nvarchar(300)
Pool triaging the appointment request
TriageStartedDate : datetime
Local date triage of the appointment request was started
TriageStartedDateKey : bigint
Links to DateDim
Local date triage of the appointment request was started
TriageStartedInstant : datetime
Local date and time triage of the appointment request was started
TriageStatus : nvarchar(300)
Triage status of the associated appointment request
WasReminderSent : tinyint
1/0 column that indicates whether communication was sent to remind the patient that an appointment needs to be scheduled. This column returns 1 if a reminder was sent, 0 if a reminder was not sent.
ProcedureDurableKey : bigint
Links to ProcedureDim
The procedure that was ordered
EarliestVisitSchedulingEmployeeDurableKey : bigint
Links to EmployeeDim
Employee who scheduled the first appointment from this appointment request
SourceWorkflow : nvarchar(300)
The workflow from which an order was created or modified
PrimaryVisitType : nvarchar(300)
The first visit type listed for the appointment request
PrimaryVisitTypeEpicId : nvarchar(300)
The Epic ID of the first visit type listed for the appointment request
CreationTimeOfDayKey : bigint
Links to TimeOfDayDim
Local time of day the appointment request was created
AppointmentRequestTagComboKey : bigint
Links to AppointmentRequestTagBridge
All tags for the appointment request
ServiceAreaComboKey : bigint
Links to DepartmentBridge
All service areas associated with this request, including currently and previously responsible service areas, visit service areas, the creation service area, and the current referred-to service area in the linked referral
WasTicketReleased : tinyint
1/0 column that indicates whether the request was released to the patient as a ticket.
WasScheduledOnline : tinyint
1/0 column that indicates whether the request was scheduled by the patient online.
OrderClass : nvarchar(300)
Order class
OrderType : nvarchar(300)
Order type
OrderingMode : nvarchar(300)
Ordering mode. For Epic data, this column can contain Outpatient or Inpatient.
OrderPriority : nvarchar(300)
Priority associated with the procedure order
IsOutpatientPRN : tinyint
1/0 column that indicates the PRN status of a procedure order (OP order mode only). This column returns 1 if the appointment procedure order PRN status is Yes (patient should schedule this order "as needed") and 0 if PRN status is No (order is recommended/required to be scheduled).
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## AppointmentRequestIndicationFact

**Extracted:** 2025-07-22 23:39:05
**Content Length:** 1230 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Fact
Try It
AppointmentRequestIndicationFact
The appointment request indication fact contains information about indications associated with appointment requests. Each row represents an indication associated with an appointment request. Change Type: Non-Snapshot
Columns
AppointmentRequestIndicationKey : bigint
Surrogate key used to uniquely identify the record
AppointmentRequestCreationDateKey : bigint
Links to DateDim
Date the appointment request was created
AppointmentRequestKey : bigint
Links to AppointmentRequestFact
Request associated with the indication
IndicationKey : bigint
Links to DiagnosisDim
Indication associated with the appointment request
IndicationComment : nvarchar(1100)
Comment detailing the association of the indication
IsPrimary : tinyint
1/0 column that indicates whether the indication is considered to be a primary complaint. This column returns 1 if the indication is considered to be a primary complaint and 0 if the indication is not considered to be a primary complaint.
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## AppointmentRequestTagBridge

**Extracted:** 2025-07-22 23:39:21
**Content Length:** 559 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class A Helper
Try It
AppointmentRequestTagBridge
The appointment request tag bridge contains unique combinations of tags associated with appointment requests. Each row represents a tag in a combination. Change Type: Non-Snapshot
Columns
AppointmentRequestTagComboKey : bigint
Surrogate key used to uniquely identify the record
CategoryKey : bigint
Links to CategoryDim
The destination key to the category row in CategoryDim representing a tag on an appointment request
```

---

## AppointmentRequestVisitMappingFact

**Extracted:** 2025-07-22 23:39:36
**Content Length:** 2495 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Fact
Try It
AppointmentRequestVisitMappingFact
The appointment request visit mapping fact contains information about visits linked to appointment requests. Each row represents an appointment request and one of its linked visits. Change Type: Non-Snapshot
Columns
AppointmentRequestVisitMappingKey : bigint
Surrogate key used to uniquely identify the record
AppointmentRequestCreationDateKey : bigint
Links to DateDim
Date the appointment request was created
AppointmentRequestKey : bigint
Links to AppointmentRequestFact
Appointment request associated with the visit
VisitKey : bigint
Links to VisitFact
Visit associated with the appointment request
AppointmentSerialNumber : numeric(18,0)
This column stores an identifier of the appointment linked to the request. If an appointment is canceled and then rescheduled, both the canceled appointment and the rescheduled appointment will share an appointment serial number. This column can be used to find any appointments that were ever linked to this request, even if they were canceled and rescheduled.
EncounterEpicCsn : numeric(18,0)
This column contains the most recently scheduled appointment for the series in APPT_SERIAL_NUM. In a cancel/reschedule chain, this will be the final rescheduled appointment.
LinkStatus : nvarchar(300)
This column stores the status of the link between this request and the appointment specified by this row. When appointments are unlinked from the request the status is updated to an inactive status (Dissociated, Unkept, or Unlinked) instead of removing the row. Once linked to the appointment request, an appointment will typically not be removed, though its status might change. A status of 1-Scheduled indicates that the link is active, and the appointment will happen or has happened. 2-Disassociated indicates that the appointment was linked to the request, but is no longer associated with the request. Other kinds of links can be downgraded to Disassociated if the request is no longer relevant to the appointment. 3-Unkept indicates that the appointment did not or will not occur as scheduled. This usually happens when the linked appointment enters a status of "Canceled" or "No Show". 4-Unlinked indicates that the appointment scheduled from the request was directly unlinked.
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## AttendingProviderFact

**Extracted:** 2025-07-22 23:39:52
**Content Length:** 2051 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Fact
Try It
AttendingProviderFact
The attending provider fact contains information about attending providers. Each row represents an attending provider for a hospital admission or emergency department visit during a given date range. Change Type: Non-Snapshot
Columns
AttendingProviderKey : bigint
Surrogate key used to uniquely identify the record
EncounterKey : bigint
Links to EncounterFact
Encounter during which the associated provider was an attending provider
ProviderKey : bigint
Links to ProviderDim
Attending provider for the hospital admission
ProviderDurableKey : bigint
Links to ProviderDim
Attending provider for the hospital admission
PatientKey : bigint
Links to PatientDim
Patient associated with the attending provider
PatientDurableKey : bigint
Links to PatientDim
Patient associated with the attending provider
StartDateKey : bigint
Links to DateDim
Date the provider became the attending provider for the patient
StartTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day the provider became the attending provider for the patient
EndDateKey : bigint
Links to DateDim
Date the provider stopped being the attending provider for the patient
EndTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day the provider stopped being the attending provider for the patient
HoursAttending : smallint
Number of hours the provider was the attending provider for the patient. By default, this is calculated as the number of hours between the StartDateKey with the StartTimeOfDayKey and the EndDateKey with the EndTimeOfDayKey columns.
EdAttendingProvider : tinyint
1/0 column that indicates whether the provider was an emergency department attending provider. This column returns 1 if the provider was an emergency department attending provider and 0 if the provider wasn't an emergency department attending provider.
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## BillAreaDim

**Extracted:** 2025-07-22 23:40:07
**Content Length:** 958 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Dim
Try It
BillAreaDim
The bill area dimension contains information about bill areas. Each row represents a bill area. Change Type: Non-Snapshot
Columns
BillAreaKey : bigint
Surrogate key used to uniquely identify the record
BillAreaEpicId : numeric(18,0)
Epic ID of the bill area
BillAreaName : nvarchar(200)
Name of the bill area
BillAreaAbbreviation : nvarchar(50)
Abbreviated bill area name
FinancialSubdivisionEpicId : numeric(18,0)
Epic ID of the financial subdivision
FinancialSubdivisionName : nvarchar(200)
Name of the financial subdivision
FinancialSubdivisionAbbreviation : nvarchar(50)
Abbreviated financial subdivision name
FinancialDivisionEpicId : numeric(18,0)
Epic ID of the financial division
FinancialDivisionName : nvarchar(200)
Name of the financial division
FinancialDivisionAbbreviation : nvarchar(50)
Abbreviated financial division name
```

---

## BillAreaSetDim

**Extracted:** 2025-07-22 23:40:23
**Content Length:** 661 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Dim
Try It
BillAreaSetDim
The bill area set dimension contains information about bill area value sets. Each row represents a bill area in a value set. Change Type: Non-Snapshot
Columns
BillAreaSetKey : bigint
Surrogate key used to uniquely identify the record
BillAreaKey : bigint
Links to BillAreaDim
Bill area in the value set
ValueSetEpicId : nvarchar(50)
Epic ID of the value set. This column identifies grouper (VCG) records.
ExternalId : nvarchar(200)
External identifier
Name : nvarchar(300)
Name of the value set
Type : nvarchar(100)
Type of the value set
```

---

## BillingAccountEncounterMappingFact

**Extracted:** 2025-07-22 23:40:38
**Content Length:** 661 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Dim
Try It
BillAreaSetDim
The bill area set dimension contains information about bill area value sets. Each row represents a bill area in a value set. Change Type: Non-Snapshot
Columns
BillAreaSetKey : bigint
Surrogate key used to uniquely identify the record
BillAreaKey : bigint
Links to BillAreaDim
Bill area in the value set
ValueSetEpicId : nvarchar(50)
Epic ID of the value set. This column identifies grouper (VCG) records.
ExternalId : nvarchar(200)
External identifier
Name : nvarchar(300)
Name of the value set
Type : nvarchar(100)
Type of the value set
```

---

## BillingAccountFact

**Extracted:** 2025-07-22 23:40:53
**Content Length:** 827 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Fact
Try It
BillingAccountEncounterMappingFact
The billing account mapping fact contains information about encounters for billing accounts. Each row represents a billing account and one of its associated encounters. Change Type: Non-Snapshot
Columns
BillingAccountEncounterMappingKey : bigint
Surrogate key used to uniquely identify the record
BillingAccountKey : bigint
Links to BillingAccountFact
Billing account associated with an encounter
EncounterKey : bigint
Links to EncounterFact
Encounter associated with a billing account
EncounterDateKey : bigint
Links to DateDim
Start date of the encounter
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## BillingServiceAreaMappingDim

**Extracted:** 2025-07-22 23:41:14
**Content Length:** 25761 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class G Fact
Try It
BillingAccountFact
The billing account fact contains information about billing accounts. Each row represents a billing account. For Epic data, the fact includes Epic hospital billing accounts for single billing office (professional and hospital), professional accounts in service areas with visit filing order enabled, and hospital billing only service areas. If your organization uses shared mode single billing office, the fact might not be able to distinguish between professional and hospital amounts. Change Type: Non-Snapshot
Columns
BillingAccountKey : bigint
Surrogate key used to uniquely identify the record
PrimaryEncounterKey : bigint
Links to EncounterFact
Primary encounter associated with the account
PatientKey : bigint
Links to PatientDim
Patient associated with the account
PatientDurableKey : bigint
Links to PatientDim
Patient associated with the account
PrimaryBenefitPlanCoverageKey : bigint
Links to CoverageDim
Primary plan associated with the account
PrimaryCoverageKey : bigint
Links to CoverageDim
Primary coverage associated with the account. This is the earliest coverage in the coverage list that is not marked to be ignored as primary payer and therefore this coverage is used to determine the account financial class. For Epic data, this column will only be populated for professional billing accounts if visit filing order (VFO) is enabled.
FirstCoverageKey : bigint
Links to CoverageDim
First coverage associated with the account. In cases where coverages are marked to be ignored for primary payer, this column will be the first coverage in the filing order even if it is marked as ignored. For Epic data, this column will only be populated for professional billing accounts if visit filing order (VFO) is enabled.
SecondCoverageKey : bigint
Links to CoverageDim
Second coverage associated with the account. For Epic data, this column will only be populated for professional billing accounts if visit filing order (VFO) is enabled.
ThirdCoverageKey : bigint
Links to CoverageDim
Third coverage associated with the account. For Epic data, this column will only be populated for professional billing accounts if visit filing order (VFO) is enabled.
FourthCoverageKey : bigint
Links to CoverageDim
Fourth coverage associated with the account. For Epic data, this column will only be populated for professional billing accounts if visit filing order (VFO) is enabled.
FifthCoverageKey : bigint
Links to CoverageDim
Fifth coverage associated with the account. For Epic data, this column will only be populated for professional billing accounts if visit filing order (VFO) is enabled.
GuarantorKey : bigint
Links to GuarantorDim
Guarantor associated with the account
GuarantorDurableKey : bigint
Links to GuarantorDim
Guarantor associated with the account
ReferredByProviderKey : bigint
Links to ProviderDim
Referring provider associated with the account
ReferredByProviderDurableKey : bigint
Links to ProviderDim
Referring provider associated with the account
AdmittingProviderKey : bigint
Links to ProviderDim
Admitting provider associated with the account
AdmittingProviderDurableKey : bigint
Links to ProviderDim
Admitting provider associated with the account
AttendingProviderKey : bigint
Links to ProviderDim
Attending provider associated with the account
AttendingProviderDurableKey : bigint
Links to ProviderDim
Attending provider associated with the account
DischargingProviderKey : bigint
Links to ProviderDim
Discharging provider associated with the account
DischargingProviderDurableKey : bigint
Links to ProviderDim
Discharging provider associated with the account
DepartmentKey : bigint
Links to DepartmentDim
Department associated with the account. For Epic data, the value will be the location associated with the account if available. Otherwise the value will be the service area associated with the account.
ParentLocationKey : bigint
Links to DepartmentDim
The location associated with the visit account if available. Otherwise, the value will be the service area associated with the visit account.
DischargedFromDepartmentKey : bigint
Links to DepartmentDim
Department the patient associated with the account was in when discharged
PrimaryDiagnosisKey : bigint
Links to DiagnosisDim
Primary diagnosis associated with the account
DiagnosisComboKey : bigint
Links to DiagnosisBridge
All diagnoses corresponding to the account
CdiReviewImpactKey : bigint
Links to CdiReviewImpactFact
Clinical documentation improvement review associated with the account, if one was performed
FinalDrgKey : bigint
Links to DrgDim
Final coded diagnosis related group (DRG) associated with the account
BillingServiceAreaMappingKey : bigint
Links to BillingServiceAreaMappingDim
Indicates the billing system and ID of the service area of the account
AccountCreateDateKey : bigint
Links to DateDim
Date the hospital account was created
ResearchStudyKey : bigint
Links to ResearchStudyDim
The research study associated with the account
ResearchStudyDurableKey : bigint
Links to ResearchStudyDim
The research study associated with the account
AdmitDepartmentKey : bigint
Links to DepartmentDim
The admit department on the account
IcdProcedureComboKey : bigint
Links to ProcedureBridge
All ICD procedures on the hospital account
BillingIndicatorComboKey : bigint
Links to BillingIndicatorBridge
All billing indicators associated with the account
AccountTypeComboKey : bigint
Links to BillingAccountTypeBridge
All account types associated with the account
RelatedAccountKey : bigint
Links to BillingAccountFact
The related hospital account
HomeHealthCertificationPeriodKey : bigint
Links to HomeHealthCertificationPeriodFact
The home health certification period that this account is part of
AccountDateKey : bigint
Links to DateDim
Information about the account reference date. For Epic data, this column stores the coding date if it is available. Otherwise it stores the discharge date if it is available. Otherwise it stores the admission date if it is available. Otherwise it stores the record creation date.
AdmissionDateKey : bigint
Links to DateDim
Date the patient was admitted
AdmissionTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day the patient was admitted
DischargeDateKey : bigint
Links to DateDim
Date the patient was discharged
DischargeTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day the patient was discharged
CodingDateKey : bigint
Links to DateDim
Date the account was coded
CodingTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day the account was coded
FirstBilledDateKey : bigint
Links to DateDim
Date the account was first billed
FirstStatementDateKey : bigint
Links to DateDim
Date the first statement for the account was sent
FirstFullStatementDateKey : bigint
Links to DateDim
Date the first full statement was sent
LastStatementDateKey : bigint
Links to DateDim
Date the most recent statement for the account was sent
LastFullStatementDateKey : bigint
Links to DateDim
Date the last full statement was sent
SelfPayCycleStartDateKey : bigint
Links to DateDim
Date the self-pay cycle started for the account
FirstClaimDateKey : bigint
Links to DateDim
Date the first claim for the account was sent
LastClaimDateKey : bigint
Links to DateDim
Date the most recent claim for the account was sent
LastInsurancePaymentDateKey : bigint
Links to DateDim
Date the most recent insurance payment for the account was received
LastSelfPayPaymentDateKey : bigint
Links to DateDim
Date the most recent self-pay payment for the account was received
AccountClosedDateKey : bigint
Links to DateDim
Date the account was closed
ZeroBalanceDateKey : bigint
Links to DateDim
Date the account reached a zero balance
FirstCompletionCoderDurableKey : bigint
Links to EmployeeDim
The person who first completed coding the account
MostRecentCompletionCoderDurableKey : bigint
Links to EmployeeDim
The person who most recently completed coding the account
AtServicePrimaryBenefitPlanCoverageKey : bigint
Links to CoverageDim
The visit account's primary plan at the end of the first day of service. The first day of service is the minimum charge service date.
AtServicePrimaryCoverageKey : bigint
Links to CoverageDim
The visit account's primary coverage at the end of the first day of service. The first day of service is the minimum charge service date.
AtBillingPrimaryBenefitPlanCoverageKey : bigint
Links to CoverageDim
The visit account's primary plan at the end of the first day of billing. The first day of billing for an account is the first insurance claim accept date, the start date of the first self-pay follow-up cycle or the first full self-pay statement date.
AtBillingPrimaryCoverageKey : bigint
Links to CoverageDim
The visit account's primary coverage at the end of the first day of billing. The first day of billing for an account is the first insurance claim accept date, the start date of the first self-pay follow-up cycle or the first full self-pay statement date.
AtZeroActiveARPrimaryBenefitPlanCoverageKey : bigint
Links to CoverageDim
The visit account's primary plan at the end of the first day the account's active AR balance reaches zero. The first day an account's active AR balance reaches zero is the first date the account balance is sent to collections or the first date the account's balance reaches zero.
AtZeroActiveARPrimaryCoverageKey : bigint
Links to CoverageDim
The visit account's primary coverage at the end of the first day the account's active AR balance reaches zero. The first day an account's active AR balance reaches zero is the first date the account balance is sent to collections or the first date the account's balance reaches zero.
BillingAccountType : nvarchar(50)
The type of hospital account record, such as HB, PB - SBO, or PB Visit.
BillingSystemType : nvarchar(300)
Billing system type
CensusClassification : nvarchar(50)
The census class of the account
FinancialClass : nvarchar(300)
Primary financial class associated with the account. For Epic data, this column can contain Commercial, Medicare, Worker's Comp, or other values.
AdmissionType : nvarchar(300)
Admission type of the hospital account as it appears on a claim
PatientAdmissionType : nvarchar(300)
Patient admission type associated with the account as shown in coding
SelfPayFollowUpLevel : nvarchar(300)
Self-pay follow-up level associated with the account
AgencyName : nvarchar(150)
Collection agency associated with the account
AgencyAssignmentType : nvarchar(300)
The type of agency the account is assigned to. Currently, the only value supported is Pre-collect and more values will be added in future versions.
PrimaryService : nvarchar(300)
Primary service associated with the account
AccountSource : nvarchar(300)
Clinical source for the account. For Epic data, this column can contain Inpatient, Outpatient, or Emergency.
InpatientBillingLengthOfStayInDays : int
The total number of days between admission and discharge for the hospital account. This will only be populated for inpatient accounts.
AccountClass : nvarchar(300)
Account class used to further classify an account
CodingStatus : nvarchar(300)
Coding status associated with the account. For Epic data, this column can contain Not Started, In Progress, Completed, or other values.
BillStatus : nvarchar(300)
Bill status associated with the account. For Epic data, this column can contain Open, Billed, Bad Debt, or other values.
SelfPayStatus : nvarchar(300)
Self-pay status associated with the account. For Epic data, this column can contain Full Self-Pay Due, Payment Plan, Bad Debt, or other values.
ArStatus : nvarchar(50)
Accounts receivable (AR) classification associated with the account. For Epic data, this column can contain Active AR, External AR, or Bad Debt. If you are using Consolidated Self-Pay, then those amounts will be split out separately.
RecurringStatus : nvarchar(300)
Recurring status associated with the account. For Epic data, this column can contain Open or Closed.
PrimaryAccountType : nvarchar(300)
The primary account type on the account
RelatedAccountType : nvarchar(300)
The related account type for related hospital accounts
PrimaryWriteOffReason : nvarchar(300)
The primary write-off reason on the account
PrimaryInsuranceWriteOffReason : nvarchar(300)
The primary insurance-related write-off reason associated with the account. For Epic data, this column is only populated for hospital billing accounts and professional billing SBO accounts.
PrimarySelfPayWriteOffReason : nvarchar(300)
The primary self-pay related write-off reason associated with the account. For Epic data, this column is only populated for hospital billing accounts and professional billing SBO accounts.
WholePaymentClassification : nvarchar(300)
The whole payment classification of the account
AccountEpicId : numeric(18,0)
Epic ID of the account. This column identifies account (HAR) records.
AccountVerificationEmployeeDurableKey : bigint
Links to EmployeeDim
User who most recently verified the account
VisitEpicId : numeric(18,0)
Epic ID of the visit. This column identifies PB Visit Account (HAR) records.
VisitNumber : nvarchar(50)
Number of the PB visit.
BillingAccountName : nvarchar(200)
Name of the account
PaymentCase : nvarchar(50)
The payment case of the Home Health account
HippsCode : nvarchar(50)
Contains the final HIPPS code for the Home Health Account
CaseMix : nvarchar(50)
Contains the final Case Mix for the Home Health Account
EpisodeTiming : nvarchar(50)
Contains the final PDGM episode timing for the Home Health Account
AdmissionSource : nvarchar(50)
Contains the final PDGM admission source for the Home Health Account
SimpleVisitCodingStatus : nvarchar(50)
The hospital simple visit coding status for the account. Determines if the account has successfully run, failed to run, or has never run simple visit coding.
ClinicalGroup : nvarchar(50)
Contains the final PDGM clinical group for the Home Health Account
Comorbidity : nvarchar(50)
Contains the final PDGM comorbidity for the Home Health Account
FunctionalLevel : nvarchar(50)
Contains the final PDGM functional impairment level for the Home Health Account
AtServiceFinancialClass : nvarchar(300)
The visit account's financial class at the end of the first day of service. The first day of service is the minimum charge service date.
AtBillingFinancialClass : nvarchar(300)
The visit account's financial class at the end of the first day of billing. The first day of billing for an account is the first insurance claim accept date, the start date of the first self-pay follow-up cycle or the first full self-pay statement date.
AtZeroActiveARFinancialClass : nvarchar(300)
The visit account's financial class at the end of the first day the account's active AR balance reaches zero. The first day an account's active AR balance reaches zero is the first date the account balance is sent to collections or the first date the account's balance reaches zero.
AccountPaymentPlanStatus : nvarchar(300)
The current or most recent payment plan status associated with the hospital account. This can be "Completed" if the account had its balance paid, "Removed/Terminated" if the account was removed from the plan due to manual removal or plan cancellation, or "Active On Plan" if the account is currently on a payment plan.
PaymentPlanSignupTiming : nvarchar(300)
When this hospital account was signed up for its current or most recent payment plan. This can be "Pre-Service" or "Post-Service".
EndOfDayAccountBalance : numeric(18,2)
The current account balance as of midnight. If no value is recorded in the system, this amount is converted to zero.
TotalAccountBalance : numeric(18,2)
Current balance associated with the account. If no value is recorded in the system, this amount is converted to zero.
TotalChargeAmount : numeric(18,2)
Total of all charges associated with the account. If no value is recorded in the system, this amount is converted to zero.
TotalPaymentAmount : numeric(18,2)
Total of all payments associated with the account. If no value is recorded in the system, this amount is converted to zero.
TotalAdjustmentAmount : numeric(18,2)
Total of all adjustments associated with the account. If no value is recorded in the system, this amount is converted to zero.
ActiveArBalance : numeric(18,2)
Accounts Receivable (AR) that the organization is actively collecting
TaxAmount : numeric(18,2)
Total of all tax posted to this account. This includes tax tracked as charges or as adjustments. If no value is recorded in the system, this amount is converted to zero. For Epic data, this column is only populated for hospital billing accounts.
TaxPaidAmount : numeric(18,2)
Total of all credits towards the tax amount on the account. This includes both insurance and self-pay payments. If no value is recorded in the system, this amount is converted to zero. For Epic data, this column is only populated for hospital billing accounts.
TaxPaidByInsuranceAmount : numeric(18,2)
Total of all insurance credits towards the tax amount on the account. This doesn't include any payments made by self-pay. If no value is recorded in the system, this amount is converted to zero. For Epic data, this column is only populated for hospital billing accounts.
TaxPaidBySelfPayAmount : numeric(18,2)
Total of all self-pay credits towards the tax amount on the account. This doesn't include any payments made by insurance. If no value is recorded in the system, this amount is converted to zero. For Epic data, this column is only populated for hospital billing accounts.
TotalSelfPayBalance : numeric(18,2)
Total self-pay balance associated with the account. If no value is recorded in the system, this amount is converted to zero.
TotalSelfPayPaymentAmount : numeric(18,2)
Total of all self-pay payments associated with the account. If no value is recorded in the system, this amount is converted to zero.
TotalSelfPayAdjustmentAmount : numeric(18,2)
Total of all self-pay adjustments associated with the account. If no value is recorded in the system, this amount is converted to zero.
TotalSelfPayAllowanceAmount : numeric(18,2)
The total amount of active Accounts Receivable (AR) self-pay allowance adjustments posted to this account
TotalPrimaryInsuranceBalance : numeric(18,2)
Total primary insurance balance associated with the account. If no value is recorded in the system, this amount is converted to zero. For Epic data, professional billing balances aren't included.
TotalPrimaryInsurancePaymentAmount : numeric(18,2)
Total of all primary insurance payments associated with the account. If no value is recorded in the system, this amount is converted to zero.
TotalPrimaryInsuranceAdjustmentAmount : numeric(18,2)
Total of all primary insurance adjustments associated with the account. If no value is recorded in the system, this amount is converted to zero.
TotalInsuranceAllowanceAmount : numeric(18,2)
The total amount of active Accounts Receivable (AR) insurance allowance adjustments posted to this account
PrimaryInsuranceNotAllowedAmount : numeric(18,2)
Adjustment amount that has been contractually written-off for primary insurance buckets
TotalNonPrimaryInsuranceBalance : numeric(18,2)
Total non-primary insurance balance associated with the account. If no value is recorded in the system, this amount is converted to zero. For Epic data, professional billing balances aren't included.
TotalNonPrimaryInsurancePaymentAmount : numeric(18,2)
Total of all non-primary insurance payments associated with the account. If no value is recorded in the system, this amount is converted to zero.
TotalNonPrimaryInsuranceAdjustmentAmount : numeric(18,2)
Total of all non-primary insurance adjustments associated with the account. If no value is recorded in the system, this amount is converted to zero.
NonPrimaryInsuranceNotAllowedAmount : numeric(18,2)
Adjustment amount that has been contractually written-off for non-primary insurance buckets
TotalPrebilledBalance : numeric(18,2)
Total prebilled balance associated with the account. If no value is recorded in the system, this amount is converted to zero.
TotalUndistributedBalance : numeric(18,2)
Total undistributed balance associated with the account. If no value is recorded in the system, this amount is converted to zero.
TotalUndistributedPaymentAmount : numeric(18,2)
Total of all undistributed payments associated with the account. If no value is recorded in the system, this amount is converted to zero.
TotalUndistributedAdjustmentAmount : numeric(18,2)
Total of all undistributed adjustments associated with the account. If no value is recorded in the system, this amount is converted to zero.
TotalBadDebtBalance : numeric(18,2)
Total bad debt balance associated with the account. If no value is recorded in the system, this amount is converted to zero.
TotalBadDebtPaymentAmount : numeric(18,2)
Total of all bad debt payments associated with the account. If no value is recorded in the system, this amount is converted to zero.
TotalBadDebtAdjustmentAmount : numeric(18,2)
Total of all bad debt adjustments associated with the account. If no value is recorded in the system, this amount is converted to zero.
TotalInsuranceBadDebtSystemAdjustments : numeric(18,2)
The total amount of bad debt system adjustments posted to insurance or undistributed buckets associated with the account
TotalSelfPayBadDebtSystemAdjustments : numeric(18,2)
The total amount of bad debt system adjustments posted to self-pay or bad debt buckets associated with the account
TotalExternalArBalance : numeric(18,2)
Total external Accounts Receivable (AR) balance associated with the account
TotalExternalArPaymentAmount : numeric(18,2)
Total of all external Accounts Receivable (AR) payments associated with the account
TotalExternalArAdjustmentAmount : numeric(18,2)
Total of all external Accounts Receivable (AR) adjustments associated with the account
TotalInsuranceExternalArSystemAdjustments : numeric(18,2)
The total amount of external AR system adjustments posted to insurance or undistributed buckets associated with the account
TotalSelfPayExternalArSystemAdjustments : numeric(18,2)
The total amount of external AR system adjustments posted to self-pay buckets associated with the account
BillingActivityCount : numeric(18,0)
The total count of billing activities performed by users on this account. This includes all activities linked to the account, regardless of activity context.
SelfPayCopayAmount : numeric(18,2)
The total copay specified by insurance on payments. If no value is recorded in the system, this amount is converted to zero.
SelfPayCoinsuranceAmount : numeric(18,2)
The total coinsurance specified by insurance on payments. If no value is recorded in the system, this amount is converted to zero.
SelfPayDeductibleAmount : numeric(18,2)
The total deductible specified by insurance on payments. If no value is recorded in the system, this amount is converted to zero.
SelfPayNonCoveredAmount : numeric(18,2)
The total noncovered specified by insurance on payments. If no value is recorded in the system, this amount is converted to zero.
SelfPayTotalExplanationOfBenefitsAmount : numeric(18,2)
The total self-pay EOB amount specified by insurance on payments. If no value is recorded in the system, this amount is converted to zero.
HasPaymentPlan : tinyint
1/0 column that indicates whether an account is currently on a payment plan. The column returns 1 if the account is currently on a payment plan and 0 if it is not on a payment plan.
HasOpenDenial : tinyint
1/0 column that indicates whether an account has an open denial. The column returns 1 if the account has an open denial and 0 if it does not have an open denial.
HasOpenOverPayment : tinyint
1/0 column that indicates whether an account has an open overpayment. The column returns 1 if the account has an open overpayment, and 0 if it does not have an open overpayment.
HasOpenUnderPayment : tinyint
1/0 column that indicates whether an account has an open underpayment. The column returns 1 if the account has an open underpayment and 0 if it does not have an open underpayment.
HasOpenRemark : tinyint
1/0 column that indicates whether an account has an open remark. The column returns 1 if the account has an open remark and 0 if it does not have an open remark.
HasOpenCorrespondence : tinyint
1/0 column that indicates whether an account has an open correspondence. The column returns 1 if the account has an open correspondence, and 0 if it does not have an open correspondence.
IsOutsourced : tinyint
1/0 column that indicates if the account is outsourced. This column returns 1 if the account is outsourced and 0 otherwise.
HasEstimate : tinyint
1/0 column that indicates if an estimate was created for the account. This column returns 1 if an estimate was created for this account and 0 otherwise.
HasAuthorization : tinyint
1/0 column that indicates if there is an authorization number associated with the account. The column returns 1 if the account has an authorization number and 0 if it does not.
IsBillableAccountType : tinyint
1/0 column that indicates whether the account can be billed to insurance payers and/or Self-Pay based on its type.
IsCreditBalanceAccount : tinyint
1/0 column that indicates if the account has a credit balance. The column returns 1 if the account has a credit balance and 0 if it does not.
IsAutoPayPaymentPlan : tinyint
1/0 column that indicates if this hospital account's current or most recent payment plan is an auto pay payment plan. This column returns 1 if the payment plan is on auto pay and 0 otherwise.
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## BillingTransactionFact

**Extracted:** 2025-07-22 23:41:36
**Content Length:** 25761 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class G Fact
Try It
BillingAccountFact
The billing account fact contains information about billing accounts. Each row represents a billing account. For Epic data, the fact includes Epic hospital billing accounts for single billing office (professional and hospital), professional accounts in service areas with visit filing order enabled, and hospital billing only service areas. If your organization uses shared mode single billing office, the fact might not be able to distinguish between professional and hospital amounts. Change Type: Non-Snapshot
Columns
BillingAccountKey : bigint
Surrogate key used to uniquely identify the record
PrimaryEncounterKey : bigint
Links to EncounterFact
Primary encounter associated with the account
PatientKey : bigint
Links to PatientDim
Patient associated with the account
PatientDurableKey : bigint
Links to PatientDim
Patient associated with the account
PrimaryBenefitPlanCoverageKey : bigint
Links to CoverageDim
Primary plan associated with the account
PrimaryCoverageKey : bigint
Links to CoverageDim
Primary coverage associated with the account. This is the earliest coverage in the coverage list that is not marked to be ignored as primary payer and therefore this coverage is used to determine the account financial class. For Epic data, this column will only be populated for professional billing accounts if visit filing order (VFO) is enabled.
FirstCoverageKey : bigint
Links to CoverageDim
First coverage associated with the account. In cases where coverages are marked to be ignored for primary payer, this column will be the first coverage in the filing order even if it is marked as ignored. For Epic data, this column will only be populated for professional billing accounts if visit filing order (VFO) is enabled.
SecondCoverageKey : bigint
Links to CoverageDim
Second coverage associated with the account. For Epic data, this column will only be populated for professional billing accounts if visit filing order (VFO) is enabled.
ThirdCoverageKey : bigint
Links to CoverageDim
Third coverage associated with the account. For Epic data, this column will only be populated for professional billing accounts if visit filing order (VFO) is enabled.
FourthCoverageKey : bigint
Links to CoverageDim
Fourth coverage associated with the account. For Epic data, this column will only be populated for professional billing accounts if visit filing order (VFO) is enabled.
FifthCoverageKey : bigint
Links to CoverageDim
Fifth coverage associated with the account. For Epic data, this column will only be populated for professional billing accounts if visit filing order (VFO) is enabled.
GuarantorKey : bigint
Links to GuarantorDim
Guarantor associated with the account
GuarantorDurableKey : bigint
Links to GuarantorDim
Guarantor associated with the account
ReferredByProviderKey : bigint
Links to ProviderDim
Referring provider associated with the account
ReferredByProviderDurableKey : bigint
Links to ProviderDim
Referring provider associated with the account
AdmittingProviderKey : bigint
Links to ProviderDim
Admitting provider associated with the account
AdmittingProviderDurableKey : bigint
Links to ProviderDim
Admitting provider associated with the account
AttendingProviderKey : bigint
Links to ProviderDim
Attending provider associated with the account
AttendingProviderDurableKey : bigint
Links to ProviderDim
Attending provider associated with the account
DischargingProviderKey : bigint
Links to ProviderDim
Discharging provider associated with the account
DischargingProviderDurableKey : bigint
Links to ProviderDim
Discharging provider associated with the account
DepartmentKey : bigint
Links to DepartmentDim
Department associated with the account. For Epic data, the value will be the location associated with the account if available. Otherwise the value will be the service area associated with the account.
ParentLocationKey : bigint
Links to DepartmentDim
The location associated with the visit account if available. Otherwise, the value will be the service area associated with the visit account.
DischargedFromDepartmentKey : bigint
Links to DepartmentDim
Department the patient associated with the account was in when discharged
PrimaryDiagnosisKey : bigint
Links to DiagnosisDim
Primary diagnosis associated with the account
DiagnosisComboKey : bigint
Links to DiagnosisBridge
All diagnoses corresponding to the account
CdiReviewImpactKey : bigint
Links to CdiReviewImpactFact
Clinical documentation improvement review associated with the account, if one was performed
FinalDrgKey : bigint
Links to DrgDim
Final coded diagnosis related group (DRG) associated with the account
BillingServiceAreaMappingKey : bigint
Links to BillingServiceAreaMappingDim
Indicates the billing system and ID of the service area of the account
AccountCreateDateKey : bigint
Links to DateDim
Date the hospital account was created
ResearchStudyKey : bigint
Links to ResearchStudyDim
The research study associated with the account
ResearchStudyDurableKey : bigint
Links to ResearchStudyDim
The research study associated with the account
AdmitDepartmentKey : bigint
Links to DepartmentDim
The admit department on the account
IcdProcedureComboKey : bigint
Links to ProcedureBridge
All ICD procedures on the hospital account
BillingIndicatorComboKey : bigint
Links to BillingIndicatorBridge
All billing indicators associated with the account
AccountTypeComboKey : bigint
Links to BillingAccountTypeBridge
All account types associated with the account
RelatedAccountKey : bigint
Links to BillingAccountFact
The related hospital account
HomeHealthCertificationPeriodKey : bigint
Links to HomeHealthCertificationPeriodFact
The home health certification period that this account is part of
AccountDateKey : bigint
Links to DateDim
Information about the account reference date. For Epic data, this column stores the coding date if it is available. Otherwise it stores the discharge date if it is available. Otherwise it stores the admission date if it is available. Otherwise it stores the record creation date.
AdmissionDateKey : bigint
Links to DateDim
Date the patient was admitted
AdmissionTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day the patient was admitted
DischargeDateKey : bigint
Links to DateDim
Date the patient was discharged
DischargeTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day the patient was discharged
CodingDateKey : bigint
Links to DateDim
Date the account was coded
CodingTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day the account was coded
FirstBilledDateKey : bigint
Links to DateDim
Date the account was first billed
FirstStatementDateKey : bigint
Links to DateDim
Date the first statement for the account was sent
FirstFullStatementDateKey : bigint
Links to DateDim
Date the first full statement was sent
LastStatementDateKey : bigint
Links to DateDim
Date the most recent statement for the account was sent
LastFullStatementDateKey : bigint
Links to DateDim
Date the last full statement was sent
SelfPayCycleStartDateKey : bigint
Links to DateDim
Date the self-pay cycle started for the account
FirstClaimDateKey : bigint
Links to DateDim
Date the first claim for the account was sent
LastClaimDateKey : bigint
Links to DateDim
Date the most recent claim for the account was sent
LastInsurancePaymentDateKey : bigint
Links to DateDim
Date the most recent insurance payment for the account was received
LastSelfPayPaymentDateKey : bigint
Links to DateDim
Date the most recent self-pay payment for the account was received
AccountClosedDateKey : bigint
Links to DateDim
Date the account was closed
ZeroBalanceDateKey : bigint
Links to DateDim
Date the account reached a zero balance
FirstCompletionCoderDurableKey : bigint
Links to EmployeeDim
The person who first completed coding the account
MostRecentCompletionCoderDurableKey : bigint
Links to EmployeeDim
The person who most recently completed coding the account
AtServicePrimaryBenefitPlanCoverageKey : bigint
Links to CoverageDim
The visit account's primary plan at the end of the first day of service. The first day of service is the minimum charge service date.
AtServicePrimaryCoverageKey : bigint
Links to CoverageDim
The visit account's primary coverage at the end of the first day of service. The first day of service is the minimum charge service date.
AtBillingPrimaryBenefitPlanCoverageKey : bigint
Links to CoverageDim
The visit account's primary plan at the end of the first day of billing. The first day of billing for an account is the first insurance claim accept date, the start date of the first self-pay follow-up cycle or the first full self-pay statement date.
AtBillingPrimaryCoverageKey : bigint
Links to CoverageDim
The visit account's primary coverage at the end of the first day of billing. The first day of billing for an account is the first insurance claim accept date, the start date of the first self-pay follow-up cycle or the first full self-pay statement date.
AtZeroActiveARPrimaryBenefitPlanCoverageKey : bigint
Links to CoverageDim
The visit account's primary plan at the end of the first day the account's active AR balance reaches zero. The first day an account's active AR balance reaches zero is the first date the account balance is sent to collections or the first date the account's balance reaches zero.
AtZeroActiveARPrimaryCoverageKey : bigint
Links to CoverageDim
The visit account's primary coverage at the end of the first day the account's active AR balance reaches zero. The first day an account's active AR balance reaches zero is the first date the account balance is sent to collections or the first date the account's balance reaches zero.
BillingAccountType : nvarchar(50)
The type of hospital account record, such as HB, PB - SBO, or PB Visit.
BillingSystemType : nvarchar(300)
Billing system type
CensusClassification : nvarchar(50)
The census class of the account
FinancialClass : nvarchar(300)
Primary financial class associated with the account. For Epic data, this column can contain Commercial, Medicare, Worker's Comp, or other values.
AdmissionType : nvarchar(300)
Admission type of the hospital account as it appears on a claim
PatientAdmissionType : nvarchar(300)
Patient admission type associated with the account as shown in coding
SelfPayFollowUpLevel : nvarchar(300)
Self-pay follow-up level associated with the account
AgencyName : nvarchar(150)
Collection agency associated with the account
AgencyAssignmentType : nvarchar(300)
The type of agency the account is assigned to. Currently, the only value supported is Pre-collect and more values will be added in future versions.
PrimaryService : nvarchar(300)
Primary service associated with the account
AccountSource : nvarchar(300)
Clinical source for the account. For Epic data, this column can contain Inpatient, Outpatient, or Emergency.
InpatientBillingLengthOfStayInDays : int
The total number of days between admission and discharge for the hospital account. This will only be populated for inpatient accounts.
AccountClass : nvarchar(300)
Account class used to further classify an account
CodingStatus : nvarchar(300)
Coding status associated with the account. For Epic data, this column can contain Not Started, In Progress, Completed, or other values.
BillStatus : nvarchar(300)
Bill status associated with the account. For Epic data, this column can contain Open, Billed, Bad Debt, or other values.
SelfPayStatus : nvarchar(300)
Self-pay status associated with the account. For Epic data, this column can contain Full Self-Pay Due, Payment Plan, Bad Debt, or other values.
ArStatus : nvarchar(50)
Accounts receivable (AR) classification associated with the account. For Epic data, this column can contain Active AR, External AR, or Bad Debt. If you are using Consolidated Self-Pay, then those amounts will be split out separately.
RecurringStatus : nvarchar(300)
Recurring status associated with the account. For Epic data, this column can contain Open or Closed.
PrimaryAccountType : nvarchar(300)
The primary account type on the account
RelatedAccountType : nvarchar(300)
The related account type for related hospital accounts
PrimaryWriteOffReason : nvarchar(300)
The primary write-off reason on the account
PrimaryInsuranceWriteOffReason : nvarchar(300)
The primary insurance-related write-off reason associated with the account. For Epic data, this column is only populated for hospital billing accounts and professional billing SBO accounts.
PrimarySelfPayWriteOffReason : nvarchar(300)
The primary self-pay related write-off reason associated with the account. For Epic data, this column is only populated for hospital billing accounts and professional billing SBO accounts.
WholePaymentClassification : nvarchar(300)
The whole payment classification of the account
AccountEpicId : numeric(18,0)
Epic ID of the account. This column identifies account (HAR) records.
AccountVerificationEmployeeDurableKey : bigint
Links to EmployeeDim
User who most recently verified the account
VisitEpicId : numeric(18,0)
Epic ID of the visit. This column identifies PB Visit Account (HAR) records.
VisitNumber : nvarchar(50)
Number of the PB visit.
BillingAccountName : nvarchar(200)
Name of the account
PaymentCase : nvarchar(50)
The payment case of the Home Health account
HippsCode : nvarchar(50)
Contains the final HIPPS code for the Home Health Account
CaseMix : nvarchar(50)
Contains the final Case Mix for the Home Health Account
EpisodeTiming : nvarchar(50)
Contains the final PDGM episode timing for the Home Health Account
AdmissionSource : nvarchar(50)
Contains the final PDGM admission source for the Home Health Account
SimpleVisitCodingStatus : nvarchar(50)
The hospital simple visit coding status for the account. Determines if the account has successfully run, failed to run, or has never run simple visit coding.
ClinicalGroup : nvarchar(50)
Contains the final PDGM clinical group for the Home Health Account
Comorbidity : nvarchar(50)
Contains the final PDGM comorbidity for the Home Health Account
FunctionalLevel : nvarchar(50)
Contains the final PDGM functional impairment level for the Home Health Account
AtServiceFinancialClass : nvarchar(300)
The visit account's financial class at the end of the first day of service. The first day of service is the minimum charge service date.
AtBillingFinancialClass : nvarchar(300)
The visit account's financial class at the end of the first day of billing. The first day of billing for an account is the first insurance claim accept date, the start date of the first self-pay follow-up cycle or the first full self-pay statement date.
AtZeroActiveARFinancialClass : nvarchar(300)
The visit account's financial class at the end of the first day the account's active AR balance reaches zero. The first day an account's active AR balance reaches zero is the first date the account balance is sent to collections or the first date the account's balance reaches zero.
AccountPaymentPlanStatus : nvarchar(300)
The current or most recent payment plan status associated with the hospital account. This can be "Completed" if the account had its balance paid, "Removed/Terminated" if the account was removed from the plan due to manual removal or plan cancellation, or "Active On Plan" if the account is currently on a payment plan.
PaymentPlanSignupTiming : nvarchar(300)
When this hospital account was signed up for its current or most recent payment plan. This can be "Pre-Service" or "Post-Service".
EndOfDayAccountBalance : numeric(18,2)
The current account balance as of midnight. If no value is recorded in the system, this amount is converted to zero.
TotalAccountBalance : numeric(18,2)
Current balance associated with the account. If no value is recorded in the system, this amount is converted to zero.
TotalChargeAmount : numeric(18,2)
Total of all charges associated with the account. If no value is recorded in the system, this amount is converted to zero.
TotalPaymentAmount : numeric(18,2)
Total of all payments associated with the account. If no value is recorded in the system, this amount is converted to zero.
TotalAdjustmentAmount : numeric(18,2)
Total of all adjustments associated with the account. If no value is recorded in the system, this amount is converted to zero.
ActiveArBalance : numeric(18,2)
Accounts Receivable (AR) that the organization is actively collecting
TaxAmount : numeric(18,2)
Total of all tax posted to this account. This includes tax tracked as charges or as adjustments. If no value is recorded in the system, this amount is converted to zero. For Epic data, this column is only populated for hospital billing accounts.
TaxPaidAmount : numeric(18,2)
Total of all credits towards the tax amount on the account. This includes both insurance and self-pay payments. If no value is recorded in the system, this amount is converted to zero. For Epic data, this column is only populated for hospital billing accounts.
TaxPaidByInsuranceAmount : numeric(18,2)
Total of all insurance credits towards the tax amount on the account. This doesn't include any payments made by self-pay. If no value is recorded in the system, this amount is converted to zero. For Epic data, this column is only populated for hospital billing accounts.
TaxPaidBySelfPayAmount : numeric(18,2)
Total of all self-pay credits towards the tax amount on the account. This doesn't include any payments made by insurance. If no value is recorded in the system, this amount is converted to zero. For Epic data, this column is only populated for hospital billing accounts.
TotalSelfPayBalance : numeric(18,2)
Total self-pay balance associated with the account. If no value is recorded in the system, this amount is converted to zero.
TotalSelfPayPaymentAmount : numeric(18,2)
Total of all self-pay payments associated with the account. If no value is recorded in the system, this amount is converted to zero.
TotalSelfPayAdjustmentAmount : numeric(18,2)
Total of all self-pay adjustments associated with the account. If no value is recorded in the system, this amount is converted to zero.
TotalSelfPayAllowanceAmount : numeric(18,2)
The total amount of active Accounts Receivable (AR) self-pay allowance adjustments posted to this account
TotalPrimaryInsuranceBalance : numeric(18,2)
Total primary insurance balance associated with the account. If no value is recorded in the system, this amount is converted to zero. For Epic data, professional billing balances aren't included.
TotalPrimaryInsurancePaymentAmount : numeric(18,2)
Total of all primary insurance payments associated with the account. If no value is recorded in the system, this amount is converted to zero.
TotalPrimaryInsuranceAdjustmentAmount : numeric(18,2)
Total of all primary insurance adjustments associated with the account. If no value is recorded in the system, this amount is converted to zero.
TotalInsuranceAllowanceAmount : numeric(18,2)
The total amount of active Accounts Receivable (AR) insurance allowance adjustments posted to this account
PrimaryInsuranceNotAllowedAmount : numeric(18,2)
Adjustment amount that has been contractually written-off for primary insurance buckets
TotalNonPrimaryInsuranceBalance : numeric(18,2)
Total non-primary insurance balance associated with the account. If no value is recorded in the system, this amount is converted to zero. For Epic data, professional billing balances aren't included.
TotalNonPrimaryInsurancePaymentAmount : numeric(18,2)
Total of all non-primary insurance payments associated with the account. If no value is recorded in the system, this amount is converted to zero.
TotalNonPrimaryInsuranceAdjustmentAmount : numeric(18,2)
Total of all non-primary insurance adjustments associated with the account. If no value is recorded in the system, this amount is converted to zero.
NonPrimaryInsuranceNotAllowedAmount : numeric(18,2)
Adjustment amount that has been contractually written-off for non-primary insurance buckets
TotalPrebilledBalance : numeric(18,2)
Total prebilled balance associated with the account. If no value is recorded in the system, this amount is converted to zero.
TotalUndistributedBalance : numeric(18,2)
Total undistributed balance associated with the account. If no value is recorded in the system, this amount is converted to zero.
TotalUndistributedPaymentAmount : numeric(18,2)
Total of all undistributed payments associated with the account. If no value is recorded in the system, this amount is converted to zero.
TotalUndistributedAdjustmentAmount : numeric(18,2)
Total of all undistributed adjustments associated with the account. If no value is recorded in the system, this amount is converted to zero.
TotalBadDebtBalance : numeric(18,2)
Total bad debt balance associated with the account. If no value is recorded in the system, this amount is converted to zero.
TotalBadDebtPaymentAmount : numeric(18,2)
Total of all bad debt payments associated with the account. If no value is recorded in the system, this amount is converted to zero.
TotalBadDebtAdjustmentAmount : numeric(18,2)
Total of all bad debt adjustments associated with the account. If no value is recorded in the system, this amount is converted to zero.
TotalInsuranceBadDebtSystemAdjustments : numeric(18,2)
The total amount of bad debt system adjustments posted to insurance or undistributed buckets associated with the account
TotalSelfPayBadDebtSystemAdjustments : numeric(18,2)
The total amount of bad debt system adjustments posted to self-pay or bad debt buckets associated with the account
TotalExternalArBalance : numeric(18,2)
Total external Accounts Receivable (AR) balance associated with the account
TotalExternalArPaymentAmount : numeric(18,2)
Total of all external Accounts Receivable (AR) payments associated with the account
TotalExternalArAdjustmentAmount : numeric(18,2)
Total of all external Accounts Receivable (AR) adjustments associated with the account
TotalInsuranceExternalArSystemAdjustments : numeric(18,2)
The total amount of external AR system adjustments posted to insurance or undistributed buckets associated with the account
TotalSelfPayExternalArSystemAdjustments : numeric(18,2)
The total amount of external AR system adjustments posted to self-pay buckets associated with the account
BillingActivityCount : numeric(18,0)
The total count of billing activities performed by users on this account. This includes all activities linked to the account, regardless of activity context.
SelfPayCopayAmount : numeric(18,2)
The total copay specified by insurance on payments. If no value is recorded in the system, this amount is converted to zero.
SelfPayCoinsuranceAmount : numeric(18,2)
The total coinsurance specified by insurance on payments. If no value is recorded in the system, this amount is converted to zero.
SelfPayDeductibleAmount : numeric(18,2)
The total deductible specified by insurance on payments. If no value is recorded in the system, this amount is converted to zero.
SelfPayNonCoveredAmount : numeric(18,2)
The total noncovered specified by insurance on payments. If no value is recorded in the system, this amount is converted to zero.
SelfPayTotalExplanationOfBenefitsAmount : numeric(18,2)
The total self-pay EOB amount specified by insurance on payments. If no value is recorded in the system, this amount is converted to zero.
HasPaymentPlan : tinyint
1/0 column that indicates whether an account is currently on a payment plan. The column returns 1 if the account is currently on a payment plan and 0 if it is not on a payment plan.
HasOpenDenial : tinyint
1/0 column that indicates whether an account has an open denial. The column returns 1 if the account has an open denial and 0 if it does not have an open denial.
HasOpenOverPayment : tinyint
1/0 column that indicates whether an account has an open overpayment. The column returns 1 if the account has an open overpayment, and 0 if it does not have an open overpayment.
HasOpenUnderPayment : tinyint
1/0 column that indicates whether an account has an open underpayment. The column returns 1 if the account has an open underpayment and 0 if it does not have an open underpayment.
HasOpenRemark : tinyint
1/0 column that indicates whether an account has an open remark. The column returns 1 if the account has an open remark and 0 if it does not have an open remark.
HasOpenCorrespondence : tinyint
1/0 column that indicates whether an account has an open correspondence. The column returns 1 if the account has an open correspondence, and 0 if it does not have an open correspondence.
IsOutsourced : tinyint
1/0 column that indicates if the account is outsourced. This column returns 1 if the account is outsourced and 0 otherwise.
HasEstimate : tinyint
1/0 column that indicates if an estimate was created for the account. This column returns 1 if an estimate was created for this account and 0 otherwise.
HasAuthorization : tinyint
1/0 column that indicates if there is an authorization number associated with the account. The column returns 1 if the account has an authorization number and 0 if it does not.
IsBillableAccountType : tinyint
1/0 column that indicates whether the account can be billed to insurance payers and/or Self-Pay based on its type.
IsCreditBalanceAccount : tinyint
1/0 column that indicates if the account has a credit balance. The column returns 1 if the account has a credit balance and 0 if it does not.
IsAutoPayPaymentPlan : tinyint
1/0 column that indicates if this hospital account's current or most recent payment plan is an auto pay payment plan. This column returns 1 if the payment plan is on auto pay and 0 otherwise.
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## BillingUserServiceAreaMappingFact

**Extracted:** 2025-07-22 23:41:51
**Content Length:** 1454 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Dim
Try It
BillingServiceAreaMappingDim
BillingServiceAreaMappingDim maps service areas and billing systems. Change Type: Non-Snapshot
Columns
BillingServiceAreaMappingKey : bigint
Surrogate key used to uniquely identify the record
ServiceAreaId : nvarchar(50)
Indicates the ID of the service area the user has access to
HospitalBillingServiceAreaId : nvarchar(50)
The hospital billing service area ID, or "PB" for PB records or "EB" for EB records to allow for efficient filtering on a user's service area and billing system access
ProfessionalBillingServiceAreaId : nvarchar(50)
The professional billing service area ID, or "HB" for HB records or "EB" for EB records to allow for efficient filtering on a user's service area and billing system access
EnterpriseBillingServiceAreaId : nvarchar(50)
The enterprise billing service area ID, or "HB" for HB records or "PB" for PB records to allow for efficient filtering on a user's service area and billing system access
IsHospitalBilling : tinyint
1/0 column that indicates whether the user has hospital billing access to this service area. The column returns 1 if the user has HB access and 0 if they do not.
IsProfessionalBilling : tinyint
1/0 column that indicates whether the user has professional billing access to this service area. The column returns 1 if the user has PB access and 0 if they do not.
```

---

## BirthAugmentationBridge

**Extracted:** 2025-07-22 23:42:06
**Content Length:** 543 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class A Helper
Try It
BirthAugmentationBridge
The birth augmentation bridge contains unique combinations of augmentation methods associated with births. Each row represents an augmentation method in a combination. Change Type: Non-Snapshot
Columns
BirthAugmentationComboKey : bigint
Combination key used to identify a unique combination of augmentation methods
CategoryKey : bigint
Links to CategoryDim
One of the augmentation methods in the combination
```

---

## BirthAugmentationIndicationBridge

**Extracted:** 2025-07-22 23:42:22
**Content Length:** 543 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class A Helper
Try It
BirthAugmentationBridge
The birth augmentation bridge contains unique combinations of augmentation methods associated with births. Each row represents an augmentation method in a combination. Change Type: Non-Snapshot
Columns
BirthAugmentationComboKey : bigint
Combination key used to identify a unique combination of augmentation methods
CategoryKey : bigint
Links to CategoryDim
One of the augmentation methods in the combination
```

---

## BirthCervicalRipeningBridge

**Extracted:** 2025-07-22 23:42:37
**Content Length:** 590 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class A Helper
Try It
BirthAugmentationIndicationBridge
The birth augmentation indication bridge contains unique combinations of augmentation indications associated with births. Each row represents an augmentation indication in a combination. Change Type: Non-Snapshot
Columns
BirthAugmentationIndicationComboKey : bigint
Combination key used to identify a unique combination of augmentation indications
CategoryKey : bigint
Links to CategoryDim
One of the augmentation indications in the combination
```

---

## BirthCesareanIndicationBridge

**Extracted:** 2025-07-22 23:43:00
**Content Length:** 575 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class A Helper
Try It
BirthCervicalRipeningBridge
The birth cervical ripening bridge contains unique combinations of cervical ripening methods associated with births. Each row represents a cervical ripening method in a combination. Change Type: Non-Snapshot
Columns
BirthCervicalRipeningComboKey : bigint
Combination key used to identify a unique combination of cervical ripening methods
CategoryKey : bigint
Links to CategoryDim
One of the cervical ripening methods in the combination
```

---

## BirthComplicationBridge

**Extracted:** 2025-07-22 23:43:16
**Content Length:** 520 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class A Helper
Try It
BirthComplicationBridge
The birth complication bridge contains unique combinations of complications that were documented in the category item for births. Each row represents a complication in a combination. Change Type: Non-Snapshot
Columns
BirthComplicationComboKey : bigint
Combination key used to identify a unique combination of complications
CategoryKey : bigint
Links to CategoryDim
The destination key
```

---

## BirthEpisiotomyBridge

**Extracted:** 2025-07-22 23:43:32
**Content Length:** 520 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class A Helper
Try It
BirthComplicationBridge
The birth complication bridge contains unique combinations of complications that were documented in the category item for births. Each row represents a complication in a combination. Change Type: Non-Snapshot
Columns
BirthComplicationComboKey : bigint
Combination key used to identify a unique combination of complications
CategoryKey : bigint
Links to CategoryDim
The destination key
```

---

## BirthFact

**Extracted:** 2025-07-22 23:43:47
**Content Length:** 498 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class A Helper
Try It
BirthEpisiotomyBridge
The episiotomy bridge contains unique combinations of episiotomies associated with births. Each row represents an episiotomy in a combination. Change Type: Non-Snapshot
Columns
BirthEpisiotomyComboKey : bigint
Combination key used to identify a unique combination of episiotomies
CategoryKey : bigint
Links to CategoryDim
One of the episiotomies in the combination
```

---

## BirthInductionBridge

**Extracted:** 2025-07-22 23:44:06
**Content Length:** 16022 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class G Fact
Try It
BirthFact
The birth fact contains information about births and abortions. Each row represents the birth of a newborn or fetus. Change Type: Non-Snapshot
Columns
BirthKey : bigint
Surrogate key used to uniquely identify the record
MotherPatientKey : bigint
Links to PatientDim
Patient that gave birth.
MotherPatientDurableKey : bigint
Links to PatientDim
Patient that gave birth.
BabyPatientKey : bigint
Links to PatientDim
Patient that was born. This column is not reliably populated for historical delivery records documented directly in OB History.
BabyPatientDurableKey : bigint
Links to PatientDim
Patient that was born. This column is not reliably populated for historical delivery records documented directly in OB History.
AttributedPatientDurableKey : bigint
Links to PatientDim
If a baby patient record is linked, this is the patient that was born. Otherwise, this is the patient that gave birth.
DeliveringProviderKey : bigint
Links to ProviderDim
Provider who performed the delivery
DeliveringProviderDurableKey : bigint
Links to ProviderDim
Provider who performed the delivery
AttendingProviderDurableKey : bigint
Links to ProviderDim
Attending provider as of delivery
DeliveryDepartmentKey : bigint
Links to DepartmentDim
Department where the delivery took place
BabyEncounterKey : bigint
Links to EncounterFact
Newborn encounter associated with the birth
MotherEncounterKey : bigint
Links to EncounterFact
Maternal delivery encounter associated with the birth
PregnancyKey : bigint
Links to PregnancyFact
Pregnancy associated with the birth
BirthDateKey : bigint
Links to DateDim
Date when the birth occurred in the patient's local time. These values will never be documented at a confidence level less confident than a date. This column is not reliably populated for historical delivery records documented directly in OB History.
BirthTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the birth occurred in the patient's local time. If the birth date is not confident to the time, this is midnight. This column is not reliably populated for historical delivery records documented directly in OB History.
BirthInstant : datetime
Date and time when the birth occurred in the patient's local time. If the birth date is not confident to the time, this is midnight on the date of birth. These values will never be documented at a confidence level less confident than a date. This column is not reliably populated for historical delivery records documented directly in OB History.
BirthDateUtcKey : bigint
Links to DateDim
Date when the birth occurred. If the birth date is only confident to the month or year, this is the earliest date that the fuzzy date could represent. The BirthDateConfidentToYear, BirthDateConfidentToMonth, BirthDateConfidentToDate, and BirthDateConfidentToTime columns indicate whether a fuzzy date was documented and at what level of confidence.
BirthTimeOfDayUtcKey : bigint
Links to TimeOfDayDim
Date and time when the birth occurred. If the birth date is not confident to the time, this is midnight in the patient's local time expressed in UTC.
BirthInstantUtc : datetime
Date and time when the birth occurred. If the birth date is not confident to the time, this is midnight in the patient's local time on the earliest date that the fuzzy date could represent, expressed in UTC.
LaborStartDateKey : bigint
Links to DateDim
Date when labor began
LaborStartTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when labor began
LaborStartInstant : datetime
Date and time when labor began
CervicalRipeningDateKey : bigint
Links to DateDim
Date when cervical ripening occurred
CervicalRipeningTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when cervical ripening occurred
CervicalRipeningInstant : datetime
Date and time when cervical ripening occurred
DilationCompleteDateKey : bigint
Links to DateDim
Date when dilation completed
DilationCompleteTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when dilation completed
DilationCompleteInstant : datetime
Date and time when dilation completed
PushingStartDateKey : bigint
Links to DateDim
Date when pushing began
PushingStartTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when pushing began
PushingStartInstant : datetime
Date and time when pushing began
CordClampDateKey : bigint
Links to DateDim
Date when the cord was clamped
CordClampTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the cord was clamped
CordClampInstant : datetime
Date and time when the cord was clamped
SkinToSkinDateKey : bigint
Links to DateDim
Date when skin to skin was initiated
SkinToSkinTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when skin to skin was initiated
SkinToSkinInstant : datetime
Date and time when skin to skin was initiated
PlacentaDeliveryDateKey : bigint
Links to DateDim
Date when the placenta was delivered
PlacentaDeliveryTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the placenta was delivered
PlacentaDeliveryInstant : datetime
Date and time when the placenta was delivered
MotherArrivalDateKey : bigint
Links to DateDim
Date when the mother arrived at labor and delivery
MotherArrivalTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the mother arrived at labor and delivery
MotherArrivalInstant : datetime
Date and time when the mother arrived at labor and delivery
RuptureDateKey : bigint
Links to DateDim
Date of rupture of membranes for this birth
RuptureTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when rupture of membranes occurred for this birth
RuptureInstant : datetime
Date and time when rupture of membranes occurred for this birth
BirthAnesthesiaComboKey : bigint
Links to BirthAnesthesiaBridge
All anesthesia methods associated with the birth
BirthAugmentationComboKey : bigint
Links to BirthAugmentationBridge
All augmentation methods associated with the birth
BirthAugmentationIndicationComboKey : bigint
Links to BirthAugmentationIndicationBridge
All augmentation indications associated with the birth
BirthCervicalRipeningComboKey : bigint
Links to BirthCervicalRipeningBridge
All cervical ripening methods associated with the birth
BirthCesareanIndicationComboKey : bigint
Links to BirthCesareanIndicationBridge
All cesarean indications associated with the birth
BirthEpisiotomyComboKey : bigint
Links to BirthEpisiotomyBridge
All episiotomies associated with the birth
BirthInductionComboKey : bigint
Links to BirthInductionBridge
All induction methods associated with the birth
BirthInductionIndicationComboKey : bigint
Links to BirthInductionIndicationBridge
All induction indications associated with the birth
BirthRuptureTypeComboKey : bigint
Links to BirthRuptureTypeBridge
All rupture types associated with the birth
BirthComplicationComboKey : bigint
Links to BirthComplicationBridge
All complications associated with the birth that were documented in the category item
BirthEpicId : numeric(18,0)
Epic ID of the birth. This column identifies delivery (HSB) records.
DeliveryMethod : nvarchar(300)
Delivery method for the birth
LivingStatus : nvarchar(300)
Newborn living status at birth
AntenatalSteroids : nvarchar(300)
Antenatal steroids given
AdoptionType : nvarchar(300)
Adoption type for this delivery. This column is not populated for historical delivery records documented directly in OB History.
PresentationType : nvarchar(300)
Presentation type for this birth
PlacentaMethod : nvarchar(300)
Placenta removal method for the birth
LaborType : nvarchar(300)
The type of labor for this birth
FirstStageLengthMinutes : int
Length of the first stage of labor in minutes
SecondStageLengthMinutes : int
Length of the second stage of labor in minutes
ThirdStageLengthMinutes : int
Length of the third stage of labor in minutes
GestationalAgeDays : int
Gestational age at birth in days
MultipleDeliveryCount : tinyint
Number of non-abortion births associated with this birth's pregnancy. If this birth is an abortion, this column returns NULL. This column is not reliably populated for historical delivery records documented directly in OB History.
BirthWeight : numeric(10,3)
Newborn weight at birth in ounces
BirthWeightGrams : numeric(10,3)
Newborn weight at birth in grams. This column is a counterpart to the BirthWeight column, which holds the weight either in ounces or grams depending on system-wide configuration. This column always displays in grams, regardless of configuration, in order to be used consistently in reports.
BabyDischargeWeight : numeric(10,3)
Newborn weight at discharge in ounces
BirthLength : numeric(8,3)
Newborn length at birth in inches
HeadCircumference : numeric(8,3)
Newborn head circumference at birth in inches
TotalApgarOneMinute : tinyint
One-minute Apgar score
TotalApgarFiveMinute : tinyint
Five-minute Apgar score
TotalApgarTenMinute : tinyint
Ten-minute Apgar score
TotalApgarFifteenMinute : tinyint
Fifteen-minute Apgar score
TotalApgarTwentyMinute : tinyint
Twenty-minute Apgar score
SpontaneousVaginalDelivery : tinyint
1/0 column that indicates whether the delivery was a spontaneous vaginal delivery. This column returns 1 if the delivery type is spontaneous vaginal, 0 if it is a different delivery type, and NULL if no delivery type was documented.
ForcepsDelivery : tinyint
1/0 column that indicates whether the delivery was by forceps. This column returns 1 if the delivery type is forceps, 0 if it is a different delivery type, and NULL if no delivery type was documented.
VacuumDelivery : tinyint
1/0 column that indicates whether the delivery was by vacuum. This column returns 1 if the delivery type is vacuum, 0 if it is a different delivery type, and NULL if no delivery type was documented.
CesareanDelivery : tinyint
1/0 column that indicates whether the delivery was by cesarean section. This column returns 1 if the delivery type is cesarean, 0 if it is a different delivery type, and NULL if no delivery type was documented.
ForcepsAttempted : tinyint
1/0 column that indicates whether delivery by forceps was attempted. This column returns 1 for positive documentation, 0 for negative documentation, and NULL for no documentation.
VacuumAttempted : tinyint
1/0 column that indicates whether delivery by vacuum was attempted. This column returns 1 for positive documentation, 0 for negative documentation, and NULL for no documentation.
LaborAttempted : tinyint
1/0 column that indicates whether a trial of labor was attempted. This column returns 1 for positive documentation, 0 for negative documentation, and NULL for no documentation.
AugmentationUsed : tinyint
1/0 column that indicates whether augmentation was used. This column returns 1 for positive documentation, 0 for negative documentation, and NULL for no documentation.
InductionUsed : tinyint
1/0 column that indicates whether induction was performed. This column returns 1 for positive documentation, 0 for negative documentation, and NULL for no documentation.
EpiduralOrSpinalGiven : tinyint
1/NULL column that indicates whether epidural or spinal anesthesia was used. This column returns 1 if epidural or spinal anesthesia was documented.
SeverePerinealLacerationOccurred : tinyint
1/NULL column that indicates whether a 3rd or 4th degree perineal laceration occurred. This column returns 1 if a severe perineal laceration was documented.
BornAlive : tinyint
1/0 column that indicates whether the newborn was born alive. This column returns 0 if a living status of fetal demise or abortion was documented and 1 otherwise.
NeonatalDemise : tinyint
1/0 column that indicates whether the newborn was a neonatal demise. This column returns 1 when there is not a last known living status and there is a recorded date of death that is not greater than 28 days after the date of birth. Otherwise, this column returns 0 when there is not a last known living status. Otherwise, this column returns 1 when the last known living status is 3-Neonatal Demise. Otherwise, this column returns 1 when the living status at birth is not 1-Yes, 4-FetalDemise, or in the Fetal Demise configuration mapping and matches the last known living status. Otherwise, this column returns 1 when the last known living status is in the Neonatal Demise configuration mapping. Otherwise, this column returns 0 when the living status at birth is 4-Fetal Demise or in the Fetal Demise configuration mapping. Otherwise, this column returns 1 when the recorded date of death is not greater than 28 days after the date of birth. Otherwise, this column returns 0.
HiddenAdoptionFlag : tinyint
1/0 column that indicates whether this delivery involves an adoption where the mother and newborn's information should be hidden from the other's chart. This column returns 1 for positive documentation, 0 for negative documentation, and NULL for no documentation. This column is not populated for historical delivery records documented directly in OB History.
BreastMilkGiven : tinyint
1/NULL column that indicates whether the newborn was given breast milk during their birth encounter. This column returns 1 if breast milk was documented. For Epic data, this column is populated based on "Breast Milk Intake Flowsheets" component configuration.
NonBreastMilkGiven : tinyint
1/NULL column that indicates whether the newborn's diet included anything other than breast milk during the birth encounter. This column returns 1 if the newborn was documented as receiving food that was not breast milk. For Epic data, this column is populated based "Dietary Intake Other Than Breast Milk Flowsheets" component configuration.
CesareanExpected : tinyint
1/0 column that indicates whether the delivery was expected to be performed by cesarean section. This column returns 1 if the expected delivery type is cesarean, 0 if it is a different delivery type, and NULL if no delivery type was documented.
EssentialDeliveryDocumentationComplete : tinyint
1/0 column that indicates whether all the essential delivery documentation has been captured for this birth. This column is not populated for historical delivery records.
PresentationVertex : tinyint
1/0 column that indicates whether the presentation type for this delivery was vertex. This column returns 1 if the presentation type is vertex, 0 if it is a different type, and NULL if no presentation type was documented.
ShoulderDystocia : tinyint
1/0 column that indicates whether shoulder dystocia occurred for this birth. This column returns 1 for positive documentation, 0 for negative documentation, and NULL for no documentation.
BirthDateConfidentToTime : tinyint
1/0 column that indicates if the birth date and time are fully confident. This column returns 1 if they are fully confident, 0 if they are confident to another level, and NULL if no delivery date was found.
BirthDateConfidentToDate : tinyint
1/0 column that indicates if the birth date and time are only confident to the date. This column returns 1 if they are only confident to the date, 0 if they are confident to another level, and NULL if no delivery date was found.
BirthDateConfidentToMonth : tinyint
1/0 column that indicates if the birth date and time are only confident to the month. This column returns 1 if they are only confident to the month, 0 if they are confident to another level, and NULL if no delivery date was found.
BirthDateConfidentToYear : tinyint
1/0 column that indicates if the birth date and time are only confident to the year. This column returns 1 if they are only confident to the year, 0 if they are confident to another level, and NULL if no delivery date was found.
IsHistorical : tinyint
1/0 column that indicates whether this birth is a historical birth documented directly in the patient's obstetric history. This column returns 1 if the birth record is historical, and 0 if it is a regular birth record. Records created for fetal charts or created with the Link to Mom navigator section can be considered historical if they delivered outside the organization.
```

---

## BirthInductionIndicationBridge

**Extracted:** 2025-07-22 23:44:24
**Content Length:** 16022 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class G Fact
Try It
BirthFact
The birth fact contains information about births and abortions. Each row represents the birth of a newborn or fetus. Change Type: Non-Snapshot
Columns
BirthKey : bigint
Surrogate key used to uniquely identify the record
MotherPatientKey : bigint
Links to PatientDim
Patient that gave birth.
MotherPatientDurableKey : bigint
Links to PatientDim
Patient that gave birth.
BabyPatientKey : bigint
Links to PatientDim
Patient that was born. This column is not reliably populated for historical delivery records documented directly in OB History.
BabyPatientDurableKey : bigint
Links to PatientDim
Patient that was born. This column is not reliably populated for historical delivery records documented directly in OB History.
AttributedPatientDurableKey : bigint
Links to PatientDim
If a baby patient record is linked, this is the patient that was born. Otherwise, this is the patient that gave birth.
DeliveringProviderKey : bigint
Links to ProviderDim
Provider who performed the delivery
DeliveringProviderDurableKey : bigint
Links to ProviderDim
Provider who performed the delivery
AttendingProviderDurableKey : bigint
Links to ProviderDim
Attending provider as of delivery
DeliveryDepartmentKey : bigint
Links to DepartmentDim
Department where the delivery took place
BabyEncounterKey : bigint
Links to EncounterFact
Newborn encounter associated with the birth
MotherEncounterKey : bigint
Links to EncounterFact
Maternal delivery encounter associated with the birth
PregnancyKey : bigint
Links to PregnancyFact
Pregnancy associated with the birth
BirthDateKey : bigint
Links to DateDim
Date when the birth occurred in the patient's local time. These values will never be documented at a confidence level less confident than a date. This column is not reliably populated for historical delivery records documented directly in OB History.
BirthTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the birth occurred in the patient's local time. If the birth date is not confident to the time, this is midnight. This column is not reliably populated for historical delivery records documented directly in OB History.
BirthInstant : datetime
Date and time when the birth occurred in the patient's local time. If the birth date is not confident to the time, this is midnight on the date of birth. These values will never be documented at a confidence level less confident than a date. This column is not reliably populated for historical delivery records documented directly in OB History.
BirthDateUtcKey : bigint
Links to DateDim
Date when the birth occurred. If the birth date is only confident to the month or year, this is the earliest date that the fuzzy date could represent. The BirthDateConfidentToYear, BirthDateConfidentToMonth, BirthDateConfidentToDate, and BirthDateConfidentToTime columns indicate whether a fuzzy date was documented and at what level of confidence.
BirthTimeOfDayUtcKey : bigint
Links to TimeOfDayDim
Date and time when the birth occurred. If the birth date is not confident to the time, this is midnight in the patient's local time expressed in UTC.
BirthInstantUtc : datetime
Date and time when the birth occurred. If the birth date is not confident to the time, this is midnight in the patient's local time on the earliest date that the fuzzy date could represent, expressed in UTC.
LaborStartDateKey : bigint
Links to DateDim
Date when labor began
LaborStartTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when labor began
LaborStartInstant : datetime
Date and time when labor began
CervicalRipeningDateKey : bigint
Links to DateDim
Date when cervical ripening occurred
CervicalRipeningTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when cervical ripening occurred
CervicalRipeningInstant : datetime
Date and time when cervical ripening occurred
DilationCompleteDateKey : bigint
Links to DateDim
Date when dilation completed
DilationCompleteTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when dilation completed
DilationCompleteInstant : datetime
Date and time when dilation completed
PushingStartDateKey : bigint
Links to DateDim
Date when pushing began
PushingStartTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when pushing began
PushingStartInstant : datetime
Date and time when pushing began
CordClampDateKey : bigint
Links to DateDim
Date when the cord was clamped
CordClampTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the cord was clamped
CordClampInstant : datetime
Date and time when the cord was clamped
SkinToSkinDateKey : bigint
Links to DateDim
Date when skin to skin was initiated
SkinToSkinTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when skin to skin was initiated
SkinToSkinInstant : datetime
Date and time when skin to skin was initiated
PlacentaDeliveryDateKey : bigint
Links to DateDim
Date when the placenta was delivered
PlacentaDeliveryTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the placenta was delivered
PlacentaDeliveryInstant : datetime
Date and time when the placenta was delivered
MotherArrivalDateKey : bigint
Links to DateDim
Date when the mother arrived at labor and delivery
MotherArrivalTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the mother arrived at labor and delivery
MotherArrivalInstant : datetime
Date and time when the mother arrived at labor and delivery
RuptureDateKey : bigint
Links to DateDim
Date of rupture of membranes for this birth
RuptureTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when rupture of membranes occurred for this birth
RuptureInstant : datetime
Date and time when rupture of membranes occurred for this birth
BirthAnesthesiaComboKey : bigint
Links to BirthAnesthesiaBridge
All anesthesia methods associated with the birth
BirthAugmentationComboKey : bigint
Links to BirthAugmentationBridge
All augmentation methods associated with the birth
BirthAugmentationIndicationComboKey : bigint
Links to BirthAugmentationIndicationBridge
All augmentation indications associated with the birth
BirthCervicalRipeningComboKey : bigint
Links to BirthCervicalRipeningBridge
All cervical ripening methods associated with the birth
BirthCesareanIndicationComboKey : bigint
Links to BirthCesareanIndicationBridge
All cesarean indications associated with the birth
BirthEpisiotomyComboKey : bigint
Links to BirthEpisiotomyBridge
All episiotomies associated with the birth
BirthInductionComboKey : bigint
Links to BirthInductionBridge
All induction methods associated with the birth
BirthInductionIndicationComboKey : bigint
Links to BirthInductionIndicationBridge
All induction indications associated with the birth
BirthRuptureTypeComboKey : bigint
Links to BirthRuptureTypeBridge
All rupture types associated with the birth
BirthComplicationComboKey : bigint
Links to BirthComplicationBridge
All complications associated with the birth that were documented in the category item
BirthEpicId : numeric(18,0)
Epic ID of the birth. This column identifies delivery (HSB) records.
DeliveryMethod : nvarchar(300)
Delivery method for the birth
LivingStatus : nvarchar(300)
Newborn living status at birth
AntenatalSteroids : nvarchar(300)
Antenatal steroids given
AdoptionType : nvarchar(300)
Adoption type for this delivery. This column is not populated for historical delivery records documented directly in OB History.
PresentationType : nvarchar(300)
Presentation type for this birth
PlacentaMethod : nvarchar(300)
Placenta removal method for the birth
LaborType : nvarchar(300)
The type of labor for this birth
FirstStageLengthMinutes : int
Length of the first stage of labor in minutes
SecondStageLengthMinutes : int
Length of the second stage of labor in minutes
ThirdStageLengthMinutes : int
Length of the third stage of labor in minutes
GestationalAgeDays : int
Gestational age at birth in days
MultipleDeliveryCount : tinyint
Number of non-abortion births associated with this birth's pregnancy. If this birth is an abortion, this column returns NULL. This column is not reliably populated for historical delivery records documented directly in OB History.
BirthWeight : numeric(10,3)
Newborn weight at birth in ounces
BirthWeightGrams : numeric(10,3)
Newborn weight at birth in grams. This column is a counterpart to the BirthWeight column, which holds the weight either in ounces or grams depending on system-wide configuration. This column always displays in grams, regardless of configuration, in order to be used consistently in reports.
BabyDischargeWeight : numeric(10,3)
Newborn weight at discharge in ounces
BirthLength : numeric(8,3)
Newborn length at birth in inches
HeadCircumference : numeric(8,3)
Newborn head circumference at birth in inches
TotalApgarOneMinute : tinyint
One-minute Apgar score
TotalApgarFiveMinute : tinyint
Five-minute Apgar score
TotalApgarTenMinute : tinyint
Ten-minute Apgar score
TotalApgarFifteenMinute : tinyint
Fifteen-minute Apgar score
TotalApgarTwentyMinute : tinyint
Twenty-minute Apgar score
SpontaneousVaginalDelivery : tinyint
1/0 column that indicates whether the delivery was a spontaneous vaginal delivery. This column returns 1 if the delivery type is spontaneous vaginal, 0 if it is a different delivery type, and NULL if no delivery type was documented.
ForcepsDelivery : tinyint
1/0 column that indicates whether the delivery was by forceps. This column returns 1 if the delivery type is forceps, 0 if it is a different delivery type, and NULL if no delivery type was documented.
VacuumDelivery : tinyint
1/0 column that indicates whether the delivery was by vacuum. This column returns 1 if the delivery type is vacuum, 0 if it is a different delivery type, and NULL if no delivery type was documented.
CesareanDelivery : tinyint
1/0 column that indicates whether the delivery was by cesarean section. This column returns 1 if the delivery type is cesarean, 0 if it is a different delivery type, and NULL if no delivery type was documented.
ForcepsAttempted : tinyint
1/0 column that indicates whether delivery by forceps was attempted. This column returns 1 for positive documentation, 0 for negative documentation, and NULL for no documentation.
VacuumAttempted : tinyint
1/0 column that indicates whether delivery by vacuum was attempted. This column returns 1 for positive documentation, 0 for negative documentation, and NULL for no documentation.
LaborAttempted : tinyint
1/0 column that indicates whether a trial of labor was attempted. This column returns 1 for positive documentation, 0 for negative documentation, and NULL for no documentation.
AugmentationUsed : tinyint
1/0 column that indicates whether augmentation was used. This column returns 1 for positive documentation, 0 for negative documentation, and NULL for no documentation.
InductionUsed : tinyint
1/0 column that indicates whether induction was performed. This column returns 1 for positive documentation, 0 for negative documentation, and NULL for no documentation.
EpiduralOrSpinalGiven : tinyint
1/NULL column that indicates whether epidural or spinal anesthesia was used. This column returns 1 if epidural or spinal anesthesia was documented.
SeverePerinealLacerationOccurred : tinyint
1/NULL column that indicates whether a 3rd or 4th degree perineal laceration occurred. This column returns 1 if a severe perineal laceration was documented.
BornAlive : tinyint
1/0 column that indicates whether the newborn was born alive. This column returns 0 if a living status of fetal demise or abortion was documented and 1 otherwise.
NeonatalDemise : tinyint
1/0 column that indicates whether the newborn was a neonatal demise. This column returns 1 when there is not a last known living status and there is a recorded date of death that is not greater than 28 days after the date of birth. Otherwise, this column returns 0 when there is not a last known living status. Otherwise, this column returns 1 when the last known living status is 3-Neonatal Demise. Otherwise, this column returns 1 when the living status at birth is not 1-Yes, 4-FetalDemise, or in the Fetal Demise configuration mapping and matches the last known living status. Otherwise, this column returns 1 when the last known living status is in the Neonatal Demise configuration mapping. Otherwise, this column returns 0 when the living status at birth is 4-Fetal Demise or in the Fetal Demise configuration mapping. Otherwise, this column returns 1 when the recorded date of death is not greater than 28 days after the date of birth. Otherwise, this column returns 0.
HiddenAdoptionFlag : tinyint
1/0 column that indicates whether this delivery involves an adoption where the mother and newborn's information should be hidden from the other's chart. This column returns 1 for positive documentation, 0 for negative documentation, and NULL for no documentation. This column is not populated for historical delivery records documented directly in OB History.
BreastMilkGiven : tinyint
1/NULL column that indicates whether the newborn was given breast milk during their birth encounter. This column returns 1 if breast milk was documented. For Epic data, this column is populated based on "Breast Milk Intake Flowsheets" component configuration.
NonBreastMilkGiven : tinyint
1/NULL column that indicates whether the newborn's diet included anything other than breast milk during the birth encounter. This column returns 1 if the newborn was documented as receiving food that was not breast milk. For Epic data, this column is populated based "Dietary Intake Other Than Breast Milk Flowsheets" component configuration.
CesareanExpected : tinyint
1/0 column that indicates whether the delivery was expected to be performed by cesarean section. This column returns 1 if the expected delivery type is cesarean, 0 if it is a different delivery type, and NULL if no delivery type was documented.
EssentialDeliveryDocumentationComplete : tinyint
1/0 column that indicates whether all the essential delivery documentation has been captured for this birth. This column is not populated for historical delivery records.
PresentationVertex : tinyint
1/0 column that indicates whether the presentation type for this delivery was vertex. This column returns 1 if the presentation type is vertex, 0 if it is a different type, and NULL if no presentation type was documented.
ShoulderDystocia : tinyint
1/0 column that indicates whether shoulder dystocia occurred for this birth. This column returns 1 for positive documentation, 0 for negative documentation, and NULL for no documentation.
BirthDateConfidentToTime : tinyint
1/0 column that indicates if the birth date and time are fully confident. This column returns 1 if they are fully confident, 0 if they are confident to another level, and NULL if no delivery date was found.
BirthDateConfidentToDate : tinyint
1/0 column that indicates if the birth date and time are only confident to the date. This column returns 1 if they are only confident to the date, 0 if they are confident to another level, and NULL if no delivery date was found.
BirthDateConfidentToMonth : tinyint
1/0 column that indicates if the birth date and time are only confident to the month. This column returns 1 if they are only confident to the month, 0 if they are confident to another level, and NULL if no delivery date was found.
BirthDateConfidentToYear : tinyint
1/0 column that indicates if the birth date and time are only confident to the year. This column returns 1 if they are only confident to the year, 0 if they are confident to another level, and NULL if no delivery date was found.
IsHistorical : tinyint
1/0 column that indicates whether this birth is a historical birth documented directly in the patient's obstetric history. This column returns 1 if the birth record is historical, and 0 if it is a regular birth record. Records created for fetal charts or created with the Link to Mom navigator section can be considered historical if they delivered outside the organization.
```

---

## BirthRuptureTypeBridge

**Extracted:** 2025-07-22 23:44:40
**Content Length:** 569 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class A Helper
Try It
BirthInductionIndicationBridge
The birth induction indication bridge contains unique combinations of induction indications associated with births. Each row represents an induction indication in a combination. Change Type: Non-Snapshot
Columns
BirthInductionIndicationComboKey : bigint
Combination key used to identify a unique combination of induction indications
CategoryKey : bigint
Links to CategoryDim
One of the induction indications in the combination
```

---

## BillingProcedureDim

**Extracted:** 2025-07-22 23:44:55
**Content Length:** 512 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class A Helper
Try It
BirthRuptureTypeBridge
The birth rupture type bridge contains unique combinations of rupture types associated with births. Each row represents a rupture type in a combination. Change Type: Non-Snapshot
Columns
BirthRuptureTypeComboKey : bigint
Combination key used to identify a unique combination of rupture types
CategoryKey : bigint
Links to CategoryDim
One of the rupture types in the combination
```

---

## BpaActionTakenFact

**Extracted:** 2025-07-22 23:45:11
**Content Length:** 3445 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class D Dim
Try It
BillingProcedureDim
The billing procedure dimension contains information about billing procedures. Each row represents a billing procedure for a date range. This table contains both current and historical information. For current records, IsCurrent has a value of 1. Historical records contain information that is valid for the date range specified by the StartDate and EndDate columns. For Epic data, this dimension contains only charge, payment, and adjustment procedures. Change Type: Snapshot
Columns
BillingProcedureKey : bigint
Surrogate key used to uniquely identify the record
DurableKey : bigint
Durable key used to identify the record
BillingProcedureEpicId : numeric(18,0)
Epic ID of the billing procedure. This column identifies procedure (EAP) records.
Name : nvarchar(300)
Name of the billing procedure
ShortName : nvarchar(300)
Shortened name of the billing procedure
PatientFriendlyName : nvarchar(4000)
Patient friendly name of the billing procedure
Category : nvarchar(200)
Category associated with the billing procedure
Type : nvarchar(300)
Billing procedure type
GroupName : nvarchar(300)
Name of the procedure group associated with the billing procedure
BillingCategory : nvarchar(300)
Billing category associated with the billing procedure
AdjustmentCategory : nvarchar(300)
Adjustment category associated with adjustment billing procedures
DebitOrCredit : nvarchar(300)
Indicates whether the billing procedure is a debit or credit procedure
SelfPayOrInsurance : nvarchar(300)
Indicates whether the associated billing procedure is an insurance procedure, self-pay procedure, or both
Code : nvarchar(50)
Code associated with the billing procedure
RevenueCode : nvarchar(50)
Revenue code associated with the billing procedure
CptCode : nvarchar(50)
Current Procedural Terminology (CPT) code associated with the billing procedure. This column will be changed in the future to have no change tracking (Type 1).
HcpcsCode : nvarchar(50)
Healthcare Common Procedure Coding System (HCPCS) code associated with the billing procedure. This column will be changed in the future to have no change tracking (Type 1).
AdaCode : nvarchar(50)
American Dental Association (ADA) code associated with the billing procedure. This column will be changed in the future to have no change tracking (Type 1).
AsaCode : nvarchar(50)
American Society of Anesthesiologists (ASA) code associated with the billing procedure. This column will be changed in the future to have no change tracking (Type 1).
OtherCodeType : nvarchar(300)
Code type associated with the billing procedure for code types other than CPT, HCPCS, ADA, or ASA codes. This column will be changed in the future to have no change tracking (Type 1).
OtherCode : nvarchar(50)
Code associated with the billing procedure for code types other than CPT, HCPCS, ADA, or ASA codes. This column will be changed in the future to have no change tracking (Type 1).
StartDate : date
The date of the execution that loaded a change to at least one column that has snapshot tracking enabled. For the first row loaded for the record this will be an arbitrary date in the past.
EndDate : date
The day before the next StartDate for the record. For the IsCurrent = 1 row, this will be an arbitrary date in the future.
IsCurrent : bit
1 indicates this is the most recent information, otherwise 0
```

---

## BpaBuildDim

**Extracted:** 2025-07-22 23:45:27
**Content Length:** 3445 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class D Dim
Try It
BillingProcedureDim
The billing procedure dimension contains information about billing procedures. Each row represents a billing procedure for a date range. This table contains both current and historical information. For current records, IsCurrent has a value of 1. Historical records contain information that is valid for the date range specified by the StartDate and EndDate columns. For Epic data, this dimension contains only charge, payment, and adjustment procedures. Change Type: Snapshot
Columns
BillingProcedureKey : bigint
Surrogate key used to uniquely identify the record
DurableKey : bigint
Durable key used to identify the record
BillingProcedureEpicId : numeric(18,0)
Epic ID of the billing procedure. This column identifies procedure (EAP) records.
Name : nvarchar(300)
Name of the billing procedure
ShortName : nvarchar(300)
Shortened name of the billing procedure
PatientFriendlyName : nvarchar(4000)
Patient friendly name of the billing procedure
Category : nvarchar(200)
Category associated with the billing procedure
Type : nvarchar(300)
Billing procedure type
GroupName : nvarchar(300)
Name of the procedure group associated with the billing procedure
BillingCategory : nvarchar(300)
Billing category associated with the billing procedure
AdjustmentCategory : nvarchar(300)
Adjustment category associated with adjustment billing procedures
DebitOrCredit : nvarchar(300)
Indicates whether the billing procedure is a debit or credit procedure
SelfPayOrInsurance : nvarchar(300)
Indicates whether the associated billing procedure is an insurance procedure, self-pay procedure, or both
Code : nvarchar(50)
Code associated with the billing procedure
RevenueCode : nvarchar(50)
Revenue code associated with the billing procedure
CptCode : nvarchar(50)
Current Procedural Terminology (CPT) code associated with the billing procedure. This column will be changed in the future to have no change tracking (Type 1).
HcpcsCode : nvarchar(50)
Healthcare Common Procedure Coding System (HCPCS) code associated with the billing procedure. This column will be changed in the future to have no change tracking (Type 1).
AdaCode : nvarchar(50)
American Dental Association (ADA) code associated with the billing procedure. This column will be changed in the future to have no change tracking (Type 1).
AsaCode : nvarchar(50)
American Society of Anesthesiologists (ASA) code associated with the billing procedure. This column will be changed in the future to have no change tracking (Type 1).
OtherCodeType : nvarchar(300)
Code type associated with the billing procedure for code types other than CPT, HCPCS, ADA, or ASA codes. This column will be changed in the future to have no change tracking (Type 1).
OtherCode : nvarchar(50)
Code associated with the billing procedure for code types other than CPT, HCPCS, ADA, or ASA codes. This column will be changed in the future to have no change tracking (Type 1).
StartDate : date
The date of the execution that loaded a change to at least one column that has snapshot tracking enabled. For the first row loaded for the record this will be an arbitrary date in the past.
EndDate : date
The day before the next StartDate for the record. For the IsCurrent = 1 row, this will be an arbitrary date in the future.
IsCurrent : bit
1 indicates this is the most recent information, otherwise 0
```

---

## BpaBuildMetadataMappingFact

**Extracted:** 2025-07-22 23:45:43
**Content Length:** 3445 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class D Dim
Try It
BillingProcedureDim
The billing procedure dimension contains information about billing procedures. Each row represents a billing procedure for a date range. This table contains both current and historical information. For current records, IsCurrent has a value of 1. Historical records contain information that is valid for the date range specified by the StartDate and EndDate columns. For Epic data, this dimension contains only charge, payment, and adjustment procedures. Change Type: Snapshot
Columns
BillingProcedureKey : bigint
Surrogate key used to uniquely identify the record
DurableKey : bigint
Durable key used to identify the record
BillingProcedureEpicId : numeric(18,0)
Epic ID of the billing procedure. This column identifies procedure (EAP) records.
Name : nvarchar(300)
Name of the billing procedure
ShortName : nvarchar(300)
Shortened name of the billing procedure
PatientFriendlyName : nvarchar(4000)
Patient friendly name of the billing procedure
Category : nvarchar(200)
Category associated with the billing procedure
Type : nvarchar(300)
Billing procedure type
GroupName : nvarchar(300)
Name of the procedure group associated with the billing procedure
BillingCategory : nvarchar(300)
Billing category associated with the billing procedure
AdjustmentCategory : nvarchar(300)
Adjustment category associated with adjustment billing procedures
DebitOrCredit : nvarchar(300)
Indicates whether the billing procedure is a debit or credit procedure
SelfPayOrInsurance : nvarchar(300)
Indicates whether the associated billing procedure is an insurance procedure, self-pay procedure, or both
Code : nvarchar(50)
Code associated with the billing procedure
RevenueCode : nvarchar(50)
Revenue code associated with the billing procedure
CptCode : nvarchar(50)
Current Procedural Terminology (CPT) code associated with the billing procedure. This column will be changed in the future to have no change tracking (Type 1).
HcpcsCode : nvarchar(50)
Healthcare Common Procedure Coding System (HCPCS) code associated with the billing procedure. This column will be changed in the future to have no change tracking (Type 1).
AdaCode : nvarchar(50)
American Dental Association (ADA) code associated with the billing procedure. This column will be changed in the future to have no change tracking (Type 1).
AsaCode : nvarchar(50)
American Society of Anesthesiologists (ASA) code associated with the billing procedure. This column will be changed in the future to have no change tracking (Type 1).
OtherCodeType : nvarchar(300)
Code type associated with the billing procedure for code types other than CPT, HCPCS, ADA, or ASA codes. This column will be changed in the future to have no change tracking (Type 1).
OtherCode : nvarchar(50)
Code associated with the billing procedure for code types other than CPT, HCPCS, ADA, or ASA codes. This column will be changed in the future to have no change tracking (Type 1).
StartDate : date
The date of the execution that loaded a change to at least one column that has snapshot tracking enabled. For the first row loaded for the record this will be an arbitrary date in the past.
EndDate : date
The day before the next StartDate for the record. For the IsCurrent = 1 row, this will be an arbitrary date in the future.
IsCurrent : bit
1 indicates this is the most recent information, otherwise 0
```

---

## BpaDetailedActionFact

**Extracted:** 2025-07-22 23:45:58
**Content Length:** 622 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Dim
Try It
BpaBuildDim
The BPA Build Dimension contains information about the BestPractice Advisory build. Each row represents a BestPractice Advisory build. Change Type: Non-Snapshot
Columns
BpaBuildKey : bigint
Surrogate key used to uniquely identify the record
BpaBuildEpicId : numeric(18,0)
Epic ID of the OurPractice Advisory build. This column identifies Locator (LGL) records.
Name : nvarchar(300)
Name of the OurPractice Advisory
CareGapType : nvarchar(300)
The care gap type associated with the OurPractice Advisory
```

---

## BpaDetailedCriteriaFact

**Extracted:** 2025-07-22 23:46:14
**Content Length:** 1101 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Fact
Try It
BpaDetailedActionFact
The BPA Detailed Action fact contains details about the actions seen in or taken by the BPA. Each row represents an action seen in or taken by the BPA. Change Type: Non-Snapshot
Columns
BpaDetailedActionKey : bigint
Surrogate key used to uniquely identify the record
BpaKey : bigint
Links to BpaFact
OurPractice Advisory firing associated with this action
TriggerDateKey : bigint
Links to DateDim
Date the OurPractice Advisory was triggered
ActionType : nvarchar(300)
Type of the detailed OurPractice Advisory action
ActionIdentifier : nvarchar(100)
Epic ID of the detailed action. This column identifies the record or category number associated with the action.
ActionName : nvarchar(300)
Name of the detailed action
ActionOutcome : nvarchar(300)
Outcome of the detailed action
ActionFrequency : nvarchar(300)
Frequency of the detailed action
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## BpaFact

**Extracted:** 2025-07-22 23:46:30
**Content Length:** 1185 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Fact
Try It
BpaDetailedCriteriaFact
The BPA Detailed Action fact contains details about the actions seen in or taken by the BPA. Each row represents an action seen in or taken by the BPA. Change Type: Non-Snapshot
Columns
BpaDetailedCriteriaKey : bigint
Surrogate key used to uniquely identify the record
BpaKey : bigint
Links to BpaFact
OurPractice Advisory firing associated with this criteria
TriggerDateKey : bigint
Links to DateDim
Date the OurPractice Advisory was triggered
CriteriaType : nvarchar(300)
Type of detailed OurPractice Advisory criteria
CriteriaIdentifier : nvarchar(100)
Epic ID of the detailed criteria. This column identifies the record or category number associated with the criteria.
CriteriaName : nvarchar(300)
Name of the detailed criteria
IsParentCriteria : tinyint
1/0 column that indicates if this criteria is a parent criteria. This column returns 1 if the criteria is a parent criteria and 0 if the criteria is a child criteria.
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## BpaTextFact

**Extracted:** 2025-07-22 23:46:45
**Content Length:** 642 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Fact
Try It
BpaTextFact
The BPA Text fact contains comments from BestPractice Advisories. Each row represents a BestPractice Advisory comment. Change Type: Non-Snapshot
Columns
BpaTextKey : bigint
Surrogate key used to uniquely identify the record
BpaKey : bigint
Links to BpaFact
OurPractice Advisory firing associated with this comment
AcknowledgementReasonComment : nvarchar(400)
Comment associated with the OurPractice Advisory acknowledgement reason
FeedbackComment : nvarchar(250)
Comment associated with the OurPractice Advisory feedback
```

---

## BpaWebServiceOrderFact

**Extracted:** 2025-07-22 23:47:02
**Content Length:** 604 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Fact
Try It
BpaWebServiceOrderFact
The BPA Web Service Order Fact contains information about medications and procedures that caused a web service BPA to fire. Change Type: Non-Snapshot
Columns
BpaWebServiceOrderKey : bigint
Surrogate key used to uniquely identify the record
BpaKey : bigint
Links to BpaFact
OurPractice Advisory firing associated with this order
TriggerDateKey : bigint
Links to DateDim
Date the OurPractice Advisory was triggered
WebServiceSessionId : nvarchar(300)
Web service session ID
```

---

## PathwayOutcomeEvaluationBpaBuildDim

**Extracted:** 2025-07-22 23:47:18
**Content Length:** 604 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Fact
Try It
BpaWebServiceOrderFact
The BPA Web Service Order Fact contains information about medications and procedures that caused a web service BPA to fire. Change Type: Non-Snapshot
Columns
BpaWebServiceOrderKey : bigint
Surrogate key used to uniquely identify the record
BpaKey : bigint
Links to BpaFact
OurPractice Advisory firing associated with this order
TriggerDateKey : bigint
Links to DateDim
Date the OurPractice Advisory was triggered
WebServiceSessionId : nvarchar(300)
Web service session ID
```

---

## BreastImagingFindingRecommendationMappingFact

**Extracted:** 2025-07-22 23:47:33
**Content Length:** 653 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Dim
Try It
PathwayOutcomeEvaluationBpaBuildDim
The pathway outcome evaluation BPA build dimension contains information about BestPractice Advisory records of type 15 - Pathway Outcome Evaluation Base used to suggest pathway outcome values Change Type: Non-Snapshot
Columns
PathwayOutcomeEvaluationBpaBuildKey : bigint
Surrogate key used to uniquely identify the record
BpaBuildEpicId : numeric(18,0)
The Epic record ID of the OurPractice Advisory build record (LGL)
BpaBuildName : nvarchar(300)
The name (I LGL .2) of the OurPractice Advisory build record
```

---

## BreastImagingPatientLesionDim

**Extracted:** 2025-07-22 23:47:49
**Content Length:** 864 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Fact
Try It
BreastImagingFindingRecommendationMappingFact
The breast imaging finding recommendation mapping fact contains information about breast imaging findings and recommendations documented on them. Each row represents a finding and a recommendation documented on the finding. Change Type: Non-Snapshot
Columns
BreastImagingFindingRecommendationMappingKey : bigint
Surrogate key used to uniquely identify the record
BreastImagingStudyFindingKey : bigint
Links to BreastImagingStudyFindingFact
Breast imaging finding on which a recommendation was documented
ImagingRecommendationKey : bigint
Links to ImagingRecommendationFact
Recommendation documented on a breast imaging finding
FindingDateKey : bigint
Links to DateDim
The date when the finding was documented
```

---

## BreastImagingStudyFindingAttributeBridge

**Extracted:** 2025-07-22 23:48:05
**Content Length:** 665 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Dim
Try It
BreastImagingPatientLesionDim
The breast imaging patient lesion dimension contains information about lesions, which are abnormal sections of tissue. Each row represents a lesion. Change Type: Non-Snapshot
Columns
BreastImagingPatientLesionKey : bigint
Surrogate key used to uniquely identify the record
FirstDocumentedDateKey : bigint
Links to DateDim
The date when the lesion was first documented
PatientDurableKey : bigint
Links to PatientDim
The patient associated with the lesion
FirstDocumentedDate : date
The date when the lesion was first documented
```

---

## BreastImagingStudyFindingFact

**Extracted:** 2025-07-22 23:48:21
**Content Length:** 6762 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class F Fact
Try It
BreastImagingStudyFindingFact
The breast imaging study finding fact contains information about findings. Findings are a description of a lesion, an abnormal section of tissue. If a lesion is imaged multiple times, each imaging study will generate a finding for the lesion. This data model represents findings found in breast imaging. Change Type: Non-Snapshot
Columns
BreastImagingStudyFindingKey : bigint
Surrogate key used to uniquely identify the record
FindingDateKey : bigint
Links to DateDim
The date when the finding was documented
PatientDurableKey : bigint
Links to PatientDim
The patient associated with the finding
BreastImagingPatientLesionKey : bigint
Links to BreastImagingPatientLesionDim
The lesion associated with the finding
SourceOrderKey : bigint
Links to ImagingFact
The imaging order where the finding was evaluated
ChangesSinceLastStudyComboKey : bigint
Links to BreastImagingStudyFindingAttributeBridge
The changes since last study associated with the finding
CalcificationMorphologyComboKey : bigint
Links to BreastImagingStudyFindingAttributeBridge
The calcification morphology associated with the finding. Values include amorphous, coarse heterogeneous, fine pleomorphic, fine linear, and fine linear-branching.
DuctEctasiaFillingComboKey : bigint
Links to BreastImagingStudyFindingAttributeBridge
The duct ectasia filling associated with the finding. Values include fluid and debris.
UltrasoundCalcificationTypeComboKey : bigint
Links to BreastImagingStudyFindingAttributeBridge
The ultrasound calcification type associated with the finding. Values include calcification in a mass, calcification outside of a mass, and intraductal calcification.
ViewComboKey : bigint
Links to BreastImagingStudyFindingAttributeBridge
The views associated with the finding
FindingLaterality : nvarchar(300)
The laterality of the finding
FindingType : nvarchar(300)
The type of breast imaging finding
Assessment : nvarchar(300)
The assessment for the finding
AssessmentIncompleteReason : nvarchar(300)
The reason for an assessment of incomplete
ModalityType : nvarchar(300)
The type of breast imaging procedure
AsymmetryType : nvarchar(300)
The asymmetry type associated with the finding. Values include global, focal, and developing.
ClockPosition : nvarchar(300)
The clock position associated with the finding
CalcificationDistribution : nvarchar(300)
The calcification distribution associated with the finding
CystType : nvarchar(300)
The cyst type associated with the finding. Values include simple cyst, clustered microcyst, or complicated cyst.
Depth : nvarchar(300)
The depth associated with the finding
EchoPattern : nvarchar(300)
The echo pattern associated with the finding
FatContainingLesionType : nvarchar(300)
The fat-containing lesion type associated with the finding. Values include normal lymph node, abnormal lymph node, fat necrosis, hamartoma, postoperative seroma with fat, and postoperative hematoma with fat.
KineticCurveDelayedPhaseAssessment : nvarchar(300)
The delayed phase associated with the finding
KineticCurveInitialRiseAssessment : nvarchar(300)
The initial phase associated with the finding
GynecomastiaDegree : nvarchar(300)
The gynecomastia degree associated with the finding
GynecomastiaPattern : nvarchar(300)
The gynecomastia pattern associated with the finding
LymphNodeLocation : nvarchar(300)
The lymph node location associated with the finding. Values include axillary and intramammary.
Margin : nvarchar(300)
The margin associated with the finding
MassDensity : nvarchar(300)
The mass density associated with the finding. Values include high, equal, low, and fat-containing.
MassInternalEnhancementCharacteristic : nvarchar(300)
The internal enhancement characteristics associated with the finding
NonEnhancingFindingType : nvarchar(300)
The non-enhancing finding type. Values include ductal precontrast high signal on T1W, cyst, non-enhancing mass, signal void from foreign bodies, postoperative collections seroma, postoperative collections hematoma, post-therapy skin thickening and trabecular thickening, and architectural distortion.
NonMassEnhancementDistribution : nvarchar(300)
The non-mass enhancement distribution associated with the finding
NonMassInternalEnhancementPattern : nvarchar(300)
The non-mass internal enhancement pattern associated with the finding. Values include homogeneous, heterogeneous, clumped, and clustered ring.
Orientation : nvarchar(300)
The orientation associated with the finding
PosteriorAcousticFeatures : nvarchar(300)
The posterior features associated with the finding
Quadrant : nvarchar(300)
The quadrant / region associated with the finding
Shape : nvarchar(300)
The shape associated with the finding
SpecialCaseType : nvarchar(300)
The special case type associated with the finding. Values include simple cyst, clustered microcysts, complicated cysts, mass in or on skin, foreign body including implants, intramammary lymph nodes, axillary lymph nodes, AVMs, Mondor's disease, postsurgical fluid collection, fat necrosis, and foreign body.
T2Appearance : nvarchar(300)
The T2 appearance associated with the finding
StudyFindingEpicId : nvarchar(50)
Epic ID of the finding. This column identifies finding (RES) records.
SourceOrderEpicId : nvarchar(50)
Epic ID of the imaging order. This column identifies order (ORD) records.
FindingDate : date
The date when the finding was documented
DistanceFromChestWallInCm : numeric(18,2)
The distance from the chest wall to the finding (cm)
DistanceFromSkinInCm : numeric(18,2)
The distance from the skin to the finding (cm)
DistanceFromNippleInCm : numeric(18,2)
The distance from nipple to the finding (cm)
HeightInMm : numeric(18,2)
The height of the finding (mm)
WidthInMm : numeric(18,2)
The width of the finding (mm)
LengthInMm : numeric(18,2)
The length of the finding (mm)
LymphNodeLeftCorticalThicknessInMm : numeric(18,2)
The lymph node left cortical thickness (mm)
LymphNodeRightCorticalThicknessInMm : numeric(18,2)
The lymph node right cortical thickness (mm)
NumberOfSimilarFindings : smallint
The number of similar findings
CcSliceNumber : smallint
The CC (craniocaudal) slice number
MlSliceNumber : smallint
The ML (mediolateral) slice number
MloSliceNumber : smallint
The MLO (mediolateral oblique) slice number
XcclSliceNumber : smallint
The XCCL (craniocaudal exaggerated laterally) slice number
IsMostRecentFinding : tinyint
1/0 column that indicates whether the finding is most recent evaluation of a lesion
IsMultipleSimilarFindings : tinyint
1/0 column that indicates multiple similar findings
IsNotSeenOnModality : tinyint
1/0 column that indicates the finding was not seen on the modality
```

---

## BuildMetadataFact

**Extracted:** 2025-07-22 23:48:38
**Content Length:** 6762 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class F Fact
Try It
BreastImagingStudyFindingFact
The breast imaging study finding fact contains information about findings. Findings are a description of a lesion, an abnormal section of tissue. If a lesion is imaged multiple times, each imaging study will generate a finding for the lesion. This data model represents findings found in breast imaging. Change Type: Non-Snapshot
Columns
BreastImagingStudyFindingKey : bigint
Surrogate key used to uniquely identify the record
FindingDateKey : bigint
Links to DateDim
The date when the finding was documented
PatientDurableKey : bigint
Links to PatientDim
The patient associated with the finding
BreastImagingPatientLesionKey : bigint
Links to BreastImagingPatientLesionDim
The lesion associated with the finding
SourceOrderKey : bigint
Links to ImagingFact
The imaging order where the finding was evaluated
ChangesSinceLastStudyComboKey : bigint
Links to BreastImagingStudyFindingAttributeBridge
The changes since last study associated with the finding
CalcificationMorphologyComboKey : bigint
Links to BreastImagingStudyFindingAttributeBridge
The calcification morphology associated with the finding. Values include amorphous, coarse heterogeneous, fine pleomorphic, fine linear, and fine linear-branching.
DuctEctasiaFillingComboKey : bigint
Links to BreastImagingStudyFindingAttributeBridge
The duct ectasia filling associated with the finding. Values include fluid and debris.
UltrasoundCalcificationTypeComboKey : bigint
Links to BreastImagingStudyFindingAttributeBridge
The ultrasound calcification type associated with the finding. Values include calcification in a mass, calcification outside of a mass, and intraductal calcification.
ViewComboKey : bigint
Links to BreastImagingStudyFindingAttributeBridge
The views associated with the finding
FindingLaterality : nvarchar(300)
The laterality of the finding
FindingType : nvarchar(300)
The type of breast imaging finding
Assessment : nvarchar(300)
The assessment for the finding
AssessmentIncompleteReason : nvarchar(300)
The reason for an assessment of incomplete
ModalityType : nvarchar(300)
The type of breast imaging procedure
AsymmetryType : nvarchar(300)
The asymmetry type associated with the finding. Values include global, focal, and developing.
ClockPosition : nvarchar(300)
The clock position associated with the finding
CalcificationDistribution : nvarchar(300)
The calcification distribution associated with the finding
CystType : nvarchar(300)
The cyst type associated with the finding. Values include simple cyst, clustered microcyst, or complicated cyst.
Depth : nvarchar(300)
The depth associated with the finding
EchoPattern : nvarchar(300)
The echo pattern associated with the finding
FatContainingLesionType : nvarchar(300)
The fat-containing lesion type associated with the finding. Values include normal lymph node, abnormal lymph node, fat necrosis, hamartoma, postoperative seroma with fat, and postoperative hematoma with fat.
KineticCurveDelayedPhaseAssessment : nvarchar(300)
The delayed phase associated with the finding
KineticCurveInitialRiseAssessment : nvarchar(300)
The initial phase associated with the finding
GynecomastiaDegree : nvarchar(300)
The gynecomastia degree associated with the finding
GynecomastiaPattern : nvarchar(300)
The gynecomastia pattern associated with the finding
LymphNodeLocation : nvarchar(300)
The lymph node location associated with the finding. Values include axillary and intramammary.
Margin : nvarchar(300)
The margin associated with the finding
MassDensity : nvarchar(300)
The mass density associated with the finding. Values include high, equal, low, and fat-containing.
MassInternalEnhancementCharacteristic : nvarchar(300)
The internal enhancement characteristics associated with the finding
NonEnhancingFindingType : nvarchar(300)
The non-enhancing finding type. Values include ductal precontrast high signal on T1W, cyst, non-enhancing mass, signal void from foreign bodies, postoperative collections seroma, postoperative collections hematoma, post-therapy skin thickening and trabecular thickening, and architectural distortion.
NonMassEnhancementDistribution : nvarchar(300)
The non-mass enhancement distribution associated with the finding
NonMassInternalEnhancementPattern : nvarchar(300)
The non-mass internal enhancement pattern associated with the finding. Values include homogeneous, heterogeneous, clumped, and clustered ring.
Orientation : nvarchar(300)
The orientation associated with the finding
PosteriorAcousticFeatures : nvarchar(300)
The posterior features associated with the finding
Quadrant : nvarchar(300)
The quadrant / region associated with the finding
Shape : nvarchar(300)
The shape associated with the finding
SpecialCaseType : nvarchar(300)
The special case type associated with the finding. Values include simple cyst, clustered microcysts, complicated cysts, mass in or on skin, foreign body including implants, intramammary lymph nodes, axillary lymph nodes, AVMs, Mondor's disease, postsurgical fluid collection, fat necrosis, and foreign body.
T2Appearance : nvarchar(300)
The T2 appearance associated with the finding
StudyFindingEpicId : nvarchar(50)
Epic ID of the finding. This column identifies finding (RES) records.
SourceOrderEpicId : nvarchar(50)
Epic ID of the imaging order. This column identifies order (ORD) records.
FindingDate : date
The date when the finding was documented
DistanceFromChestWallInCm : numeric(18,2)
The distance from the chest wall to the finding (cm)
DistanceFromSkinInCm : numeric(18,2)
The distance from the skin to the finding (cm)
DistanceFromNippleInCm : numeric(18,2)
The distance from nipple to the finding (cm)
HeightInMm : numeric(18,2)
The height of the finding (mm)
WidthInMm : numeric(18,2)
The width of the finding (mm)
LengthInMm : numeric(18,2)
The length of the finding (mm)
LymphNodeLeftCorticalThicknessInMm : numeric(18,2)
The lymph node left cortical thickness (mm)
LymphNodeRightCorticalThicknessInMm : numeric(18,2)
The lymph node right cortical thickness (mm)
NumberOfSimilarFindings : smallint
The number of similar findings
CcSliceNumber : smallint
The CC (craniocaudal) slice number
MlSliceNumber : smallint
The ML (mediolateral) slice number
MloSliceNumber : smallint
The MLO (mediolateral oblique) slice number
XcclSliceNumber : smallint
The XCCL (craniocaudal exaggerated laterally) slice number
IsMostRecentFinding : tinyint
1/0 column that indicates whether the finding is most recent evaluation of a lesion
IsMultipleSimilarFindings : tinyint
1/0 column that indicates multiple similar findings
IsNotSeenOnModality : tinyint
1/0 column that indicates the finding was not seen on the modality
```

---

## BuildMetadataOwnerBridge

**Extracted:** 2025-07-22 23:48:54
**Content Length:** 958 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Fact
Try It
BuildMetadataFact
The build metadata fact contains information about build metadata records for BestPractice Advisories. Each row represents a build metadata record. Change Type: Non-Snapshot
Columns
BuildMetadataKey : bigint
Surrogate key used to uniquely identify the record
BuildMetadataOwnerComboKey : bigint
Links to BuildMetadataOwnerBridge
All owners associated with the build metadata record
BuildMetadataPropertyComboKey : bigint
Links to BuildMetadataPropertyBridge
All properties associated with the build metadata record
BuildMetadataEpicId : numeric(18,0)
Epic ID of the build metadata record. This column identifies GetSmart (HCM) records.
Name : nvarchar(200)
Name of the build metadata record
ExternalId : nvarchar(200)
External ID of the build metadata record
ReviewStatus : nvarchar(300)
Review status of the build metadata record
```

---

## BuildMetadataPropertyBridge

**Extracted:** 2025-07-22 23:49:10
**Content Length:** 517 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class A Helper
Try It
BuildMetadataOwnerBridge
The build metadata owner bridge contains unique combinations of owners associated with a build metadata record. Each row represents an owner in a combination. Change Type: Non-Snapshot
Columns
BuildMetadataOwnerComboKey : bigint
Surrogate key used to uniquely identify the record
EmployeeDurableKey : bigint
Links to EmployeeDim
One of the build metadata owners in the combination
```

---

## CampaignConfigurationDim

**Extracted:** 2025-07-22 23:49:25
**Content Length:** 1031 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Dim
Try It
CampaignConfigurationDim
The campaign configuration dimension contains information about campaign configurations. Each row represents a single campaign configuration. Change Type: Non-Snapshot
Columns
CampaignConfigurationKey : bigint
Surrogate key used to uniquely identify the record
Name : nvarchar(200)
Name of the campaign
CampaignConfigurationEpicId : nvarchar(50)
Epic ID of the campaign configuration. This column identifies campaign configuration (CCT) records.
CampaignConfigurationDepartmentComboKey : bigint
Links to CampaignConfigurationDepartmentBridge
Surrogate key used to uniquely identify a combination of campaign configuration and department
StatusName : nvarchar(300)
Status of the campaign
RecurrenceType : nvarchar(300)
Recurrence type of the campaign
IsExternal : tinyint
1/0 column that indicates if this is an external campaign. This column returns 1 if this is an external campaign and 0 if not.
```

---

## CampaignOutreachFact

**Extracted:** 2025-07-22 23:49:41
**Content Length:** 1031 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Dim
Try It
CampaignConfigurationDim
The campaign configuration dimension contains information about campaign configurations. Each row represents a single campaign configuration. Change Type: Non-Snapshot
Columns
CampaignConfigurationKey : bigint
Surrogate key used to uniquely identify the record
Name : nvarchar(200)
Name of the campaign
CampaignConfigurationEpicId : nvarchar(50)
Epic ID of the campaign configuration. This column identifies campaign configuration (CCT) records.
CampaignConfigurationDepartmentComboKey : bigint
Links to CampaignConfigurationDepartmentBridge
Surrogate key used to uniquely identify a combination of campaign configuration and department
StatusName : nvarchar(300)
Status of the campaign
RecurrenceType : nvarchar(300)
Recurrence type of the campaign
IsExternal : tinyint
1/0 column that indicates if this is an external campaign. This column returns 1 if this is an external campaign and 0 if not.
```

---

## CampaignRecurrenceDim

**Extracted:** 2025-07-22 23:49:59
**Content Length:** 4795 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class D Fact
Try It
CampaignOutreachFact
The campaign outreach fact table contains information about campaign outreach. Each row represents a single outreach. Change Type: Non-Snapshot
Columns
CampaignOutreachKey : bigint
Surrogate key used to uniquely identify the record
PatientKey : bigint
Links to PatientDim
Patient associated with the outreach
PatientDurableKey : bigint
Links to PatientDim
Patient associated with the outreach
ProspectivePatientKey : bigint
Links to ProspectivePatientDim
Prospective patient associated with the outreach
CampaignRecurrenceLeadFactKey : bigint
Links to CampaignRecurrenceLeadFact
This column is deprecated and will be removed after the MAY 2026 version. Use CampaignOutreachIntentFact instead. Lead Recurrence for whom the outreach was created
CampaignConfigurationKey : bigint
Links to CampaignConfigurationDim
Campaign configuration associated with the campaign outreach
OutreachCreatingPhase : nvarchar(300)
The phase in which the outreach was created
OutreachCreationDateKey : bigint
Links to DateDim
Date the outreach was created
CampaignRecurrenceKey : bigint
Links to CampaignRecurrenceDim
Campaign recurrence associated with the campaign outreach
OutreachCompletionDateKey : bigint
Links to DateDim
Date the outreach was marked as completed
OutreachEpicId : numeric(18,0)
Epic ID of the outreach
OutreachEpicCsn : numeric(18,0)
The Epic contact serial number (CSN) of the outreach
OutreachHasBeenSent : tinyint
1/0 column that indicates whether this outreach has been sent or not. This column returns 1 if the the outreach was sent and 0 if not.
OutreachSentInstantLocal : datetime
Local instant the outreach was most recently sent
OutreachSentLocalDateKey : bigint
Links to DateDim
Date the outreach was most recently sent
OutreachHasBeenViewed : tinyint
1/0 column that indicates whether the lead has viewed this outreach. This column returns 1 if the lead viewed the outreach and 0 if not.
OutreachViewedInstantLocal : datetime
Local instant the outreach was first viewed
OutreachViewedLocalDateKey : bigint
Links to DateDim
Date the outreach was first viewed
OutreachHasBeenEngagedWith : tinyint
1/0 column that indicates whether the lead has taken an action directly from this outreach. For example, scheduling an appointment would be engagement. This column returns 1 if the lead engaged with the outreach and 0 if not.
OutreachEngagedInstantLocal : datetime
Local instant the outreach was first engaged with
OutreachEngagedLocalDateKey : bigint
Links to DateDim
Date the outreach was first engaged with
OutreachHasBeenOptedOut : tinyint
1/0 column that indicates whether the lead has opted out from this outreach. This column returns 1 if the lead opted out of the outreach and 0 if not.
OutreachOptOutInstantLocal : datetime
Local instant the lead opted out of the outreach
OutreachOptOutLocalDateKey : bigint
Links to DateDim
Date the lead opted out of the outreach
OutreachEngagementDeviceType : nvarchar(300)
Device type used for the most recent engagement event
OutreachMethod : nvarchar(300)
Outreach method used
OutreachStatus : nvarchar(300)
Status of the outreach
OutreachSuccessStatus : nvarchar(300)
Success status of the outreach
IsGeneratedWithAI : tinyint
1/0 column that indicates whether this outreach was generated with the help of AI
IsMyChartForAllOutreach : tinyint
1/0 column that indicates whether this outreach was sent to a MyChart inactive patient using the messaging for all framework
OutreachAttributionPercent : numeric(18,2)
Percentage of success which should be attributed to the outreach for causing the lead to be successful for a campaign recurrence. For Epic data, the column displays a number between 0 and 100 if attribution was calculated.
OutreachCreationInstant : datetime
Instant the outreach was created
OutreachCompletionInstant : datetime
Instant the outreach was marked as completed
OutreachTemplateEpicId : nvarchar(50)
Epic ID of the outreach template. This column identifies outreach template (CMR) records.
OutreachTemplateTemplateEpicId : numeric(18,0)
Epic ID of the outreach template from the campaign template. This column identifies outreach template (CCT) records. This column contains the Epic ID of the record from which OutreachTemplateEpicId was created.
OutreachTemplateTemplateName : nvarchar(200)
Name of the outreach template from the campaign template. This column names outreach template (CCT) records. This column contains the name of the record from which OutreachTemplateEpicId was created.
IsExternal : tinyint
1/0 column that indicates if this outreach was generated by an external campaign. This column returns 1 if the outreach was generated by an external campaign and 0 if not.
```

---

## CampaignRecurrenceLeadFact

**Extracted:** 2025-07-22 23:50:15
**Content Length:** 1011 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Dim
Try It
CampaignRecurrenceDim
The campaign recurrence dimension contains information about campaign snapshots (formerly recurrences). Each row represents a single campaign snapshot. Change Type: Non-Snapshot
Columns
CampaignRecurrenceKey : bigint
Surrogate key used to uniquely identify the record
CampaignKey : bigint
Links to CampaignConfigurationDim
Campaign configuration associated with the campaign version
StartDateKey : bigint
Links to DateDim
Date the campaign version started
EndDateKey : bigint
Links to DateDim
Date the campaign version ended
Name : nvarchar(200)
Name of the campaign version
Cycle : nvarchar(300)
Recurrence frequency
CompletionStatus : nvarchar(300)
Completion status of the version
IsExternal : tinyint
1/0 column that indicates if this recurrence was generated by an external campaign. This column returns 1 if the recurrence was generated by an external campaign and 0 if not.
```

---

## CancerStagingFact

**Extracted:** 2025-07-22 23:50:33
**Content Length:** 5210 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Fact
Try It
CampaignRecurrenceLeadFact
The campaign recurrence lead fact table contains information about the status of leads in campaign recurrences. Each row represents the status of a single lead in a single campaign recurrence. Change Type: Non-Snapshot
Columns
CampaignRecurrenceLeadKey : bigint
Surrogate key used to uniquely identify the record
PatientKey : bigint
Links to PatientDim
Patient associated with the campaign recurrence
PatientDurableKey : bigint
Links to PatientDim
Patient associated with the campaign recurrence
ProspectivePatientKey : bigint
Links to ProspectivePatientDim
Prospective patient associated with the campaign recurrence
AddressKey : bigint
Links to AddressDim
Address for the lead's residence
LeadEpicId : numeric(18,0)
Epic ID of the lead
PostalCodeKey : bigint
Links to PostalCodeDim
Postal code lookup for the lead's residence
LeadName : nvarchar(200)
Name of the lead
CampaignKey : bigint
Links to CampaignConfigurationDim
Campaign configuration associated with the record
RecurrenceKey : bigint
Links to CampaignRecurrenceDim
Campaign recurrence associated with the record
LeadType : nvarchar(300)
The type of lead associated with the record (Patient or Prospective Patient).
LeadAddedToCampaignDateKey : bigint
Links to DateDim
Date the lead was added to the campaign recurrence
LeadAddedToCampaignInstant : datetime
Instant the lead was added to the campaign
LeadFirstOutreachSentDateKey : bigint
Links to DateDim
The first date a lead was sent outreach from the recurrence
LeadFirstOutreachSentInstantLocal : datetime
The instant a lead was first sent outreach from the recurrence
LeadSentEngageable : tinyint
1/0 column that indicates whether the lead received outreach from the campaign that is eligible for engagement. This column returns 1 if the lead has received engageable outreach and 0 if not.
LeadEngagedDateKey : bigint
Links to DateDim
The first date a lead engaged with an outreach from the campaign
LeadEngagementStatus : nvarchar(300)
Campaign engagement status of the lead associated with the record
LeadEngagedInstantLocal : datetime
The first instant a lead engaged with an outreach from the campaign
LeadStatusChangeDateKey : bigint
Links to DateDim
Most recent date a lead's status in the campaign was changed
LeadStatus : nvarchar(300)
Campaign status of the lead associated with the record
LeadStatusChangeInstant : datetime
Most recent instant a lead's status in the campaign was changed
RevenueEvaluationEndInstant : datetime
The last instant we will consider revenue to be associated with this lead
RevenueEvaluationEndDateKey : bigint
Links to DateDim
The last day we will consider revenue to be associated with this lead. For Epic data, this is the duration of success evaluation after the day the lead succeeded
LeadStopStatus : nvarchar(300)
The stop status of the given lead. A stopped lead should receive no outreach until they are no longer stopped.
LeadStopInstantLocal : datetime
The local instant the lead was marked as stopped or unstopped
LeadStopLocalDateKey : bigint
Links to DateDim
The date the lead was marked as stopped or unstopped
LeadPreSuccessChangeDateKey : bigint
Links to DateDim
Most recent date a lead's pre-success status in the campaign was changed
LeadPreSuccessStatus : nvarchar(300)
Campaign pre-success status of the lead associated with the record
LeadPreSuccessChangeInstantLocal : datetime
Most recent instant a lead's pre-success status in the campaign was changed
LeadPostSuccessChangeDateKey : bigint
Links to DateDim
Most recent date a lead's post-success status in the campaign was changed
LeadPostSuccessStatus : nvarchar(300)
Campaign post-success status of the lead associated with the record
LeadPostSuccessChangeInstantLocal : datetime
Most recent instant a lead's post-success status in the campaign was changed
ResearchStudyPatientAssociationKey : bigint
Links to ResearchStudyPatientAssociationFact
Research study enrollment record associated with this lead
OptOutDateKey : bigint
Links to DateDim
If a lead has opted out of a campaign, the date that opt out went into effect
HasOptedOut : tinyint
1/0 column that indicates whether the lead opted out of this campaign. This column returns 1 if the lead opted out and 0 if not.
OptOutInstant : datetime
If a lead has opted out of a campaign, the instant that opt out went into effect
LeadPriority : nvarchar(300)
The priority given to the lead for the recurrence
LeadFirstEvaluationForInclusionInCampaignDateKey : bigint
Links to DateDim
Date the lead was first evaluated for inclusion on the campaign
LeadFirstEvaluationForInclusionInCampaignInstant : datetime
Instant the lead was first evaluated for inclusion on the campaign
LeadInclusionStatus : nvarchar(300)
Whether the lead is included in the campaign or has passed inclusion rules, but has been excluded by population limits
LeadAssociatedCoverageKey : bigint
Links to CoverageDim
The insurance coverage associated with this lead.
AppointmentRequestKey : bigint
Links to AppointmentRequestFact
The appointment request that the campaign automated and which put this lead on the campaign
```

---

## CareAreaDim

**Extracted:** 2025-07-22 23:50:51
**Content Length:** 5210 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Fact
Try It
CampaignRecurrenceLeadFact
The campaign recurrence lead fact table contains information about the status of leads in campaign recurrences. Each row represents the status of a single lead in a single campaign recurrence. Change Type: Non-Snapshot
Columns
CampaignRecurrenceLeadKey : bigint
Surrogate key used to uniquely identify the record
PatientKey : bigint
Links to PatientDim
Patient associated with the campaign recurrence
PatientDurableKey : bigint
Links to PatientDim
Patient associated with the campaign recurrence
ProspectivePatientKey : bigint
Links to ProspectivePatientDim
Prospective patient associated with the campaign recurrence
AddressKey : bigint
Links to AddressDim
Address for the lead's residence
LeadEpicId : numeric(18,0)
Epic ID of the lead
PostalCodeKey : bigint
Links to PostalCodeDim
Postal code lookup for the lead's residence
LeadName : nvarchar(200)
Name of the lead
CampaignKey : bigint
Links to CampaignConfigurationDim
Campaign configuration associated with the record
RecurrenceKey : bigint
Links to CampaignRecurrenceDim
Campaign recurrence associated with the record
LeadType : nvarchar(300)
The type of lead associated with the record (Patient or Prospective Patient).
LeadAddedToCampaignDateKey : bigint
Links to DateDim
Date the lead was added to the campaign recurrence
LeadAddedToCampaignInstant : datetime
Instant the lead was added to the campaign
LeadFirstOutreachSentDateKey : bigint
Links to DateDim
The first date a lead was sent outreach from the recurrence
LeadFirstOutreachSentInstantLocal : datetime
The instant a lead was first sent outreach from the recurrence
LeadSentEngageable : tinyint
1/0 column that indicates whether the lead received outreach from the campaign that is eligible for engagement. This column returns 1 if the lead has received engageable outreach and 0 if not.
LeadEngagedDateKey : bigint
Links to DateDim
The first date a lead engaged with an outreach from the campaign
LeadEngagementStatus : nvarchar(300)
Campaign engagement status of the lead associated with the record
LeadEngagedInstantLocal : datetime
The first instant a lead engaged with an outreach from the campaign
LeadStatusChangeDateKey : bigint
Links to DateDim
Most recent date a lead's status in the campaign was changed
LeadStatus : nvarchar(300)
Campaign status of the lead associated with the record
LeadStatusChangeInstant : datetime
Most recent instant a lead's status in the campaign was changed
RevenueEvaluationEndInstant : datetime
The last instant we will consider revenue to be associated with this lead
RevenueEvaluationEndDateKey : bigint
Links to DateDim
The last day we will consider revenue to be associated with this lead. For Epic data, this is the duration of success evaluation after the day the lead succeeded
LeadStopStatus : nvarchar(300)
The stop status of the given lead. A stopped lead should receive no outreach until they are no longer stopped.
LeadStopInstantLocal : datetime
The local instant the lead was marked as stopped or unstopped
LeadStopLocalDateKey : bigint
Links to DateDim
The date the lead was marked as stopped or unstopped
LeadPreSuccessChangeDateKey : bigint
Links to DateDim
Most recent date a lead's pre-success status in the campaign was changed
LeadPreSuccessStatus : nvarchar(300)
Campaign pre-success status of the lead associated with the record
LeadPreSuccessChangeInstantLocal : datetime
Most recent instant a lead's pre-success status in the campaign was changed
LeadPostSuccessChangeDateKey : bigint
Links to DateDim
Most recent date a lead's post-success status in the campaign was changed
LeadPostSuccessStatus : nvarchar(300)
Campaign post-success status of the lead associated with the record
LeadPostSuccessChangeInstantLocal : datetime
Most recent instant a lead's post-success status in the campaign was changed
ResearchStudyPatientAssociationKey : bigint
Links to ResearchStudyPatientAssociationFact
Research study enrollment record associated with this lead
OptOutDateKey : bigint
Links to DateDim
If a lead has opted out of a campaign, the date that opt out went into effect
HasOptedOut : tinyint
1/0 column that indicates whether the lead opted out of this campaign. This column returns 1 if the lead opted out and 0 if not.
OptOutInstant : datetime
If a lead has opted out of a campaign, the instant that opt out went into effect
LeadPriority : nvarchar(300)
The priority given to the lead for the recurrence
LeadFirstEvaluationForInclusionInCampaignDateKey : bigint
Links to DateDim
Date the lead was first evaluated for inclusion on the campaign
LeadFirstEvaluationForInclusionInCampaignInstant : datetime
Instant the lead was first evaluated for inclusion on the campaign
LeadInclusionStatus : nvarchar(300)
Whether the lead is included in the campaign or has passed inclusion rules, but has been excluded by population limits
LeadAssociatedCoverageKey : bigint
Links to CoverageDim
The insurance coverage associated with this lead.
AppointmentRequestKey : bigint
Links to AppointmentRequestFact
The appointment request that the campaign automated and which put this lead on the campaign
```

---

## CareManagementCaseFact

**Extracted:** 2025-07-22 23:51:09
**Content Length:** 450 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Dim
Try It
CareAreaDim
The care area dimension contains information about care areas. Each row represents a care area. For Epic data, this dimension contains only emergency department care areas. Change Type: Non-Snapshot
Columns
CareAreaKey : bigint
Surrogate key used to uniquely identify the record
CareAreaName : nvarchar(300)
Name of the care area
```

---

## CareManagementCaseTypeBridge

**Extracted:** 2025-07-22 23:51:26
**Content Length:** 450 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Dim
Try It
CareAreaDim
The care area dimension contains information about care areas. Each row represents a care area. For Epic data, this dimension contains only emergency department care areas. Change Type: Non-Snapshot
Columns
CareAreaKey : bigint
Surrogate key used to uniquely identify the record
CareAreaName : nvarchar(300)
Name of the care area
```

---

## CareManagementTeamFact

**Extracted:** 2025-07-22 23:51:46
**Content Length:** 450 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Dim
Try It
CareAreaDim
The care area dimension contains information about care areas. Each row represents a care area. For Epic data, this dimension contains only emergency department care areas. Change Type: Non-Snapshot
Columns
CareAreaKey : bigint
Surrogate key used to uniquely identify the record
CareAreaName : nvarchar(300)
Name of the care area
```

---

## CareManagementTraitFact

**Extracted:** 2025-07-22 23:52:04
**Content Length:** 450 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Dim
Try It
CareAreaDim
The care area dimension contains information about care areas. Each row represents a care area. For Epic data, this dimension contains only emergency department care areas. Change Type: Non-Snapshot
Columns
CareAreaKey : bigint
Surrogate key used to uniquely identify the record
CareAreaName : nvarchar(300)
Name of the care area
```

---

## CarePathBuildDim

**Extracted:** 2025-07-22 23:52:22
**Content Length:** 520 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class A Helper
Try It
CareManagementCaseTypeBridge
The care management case type bridge contains unique combinations of care management case types associated with other records. Each row represents a care management case type in a combination. Change Type: Non-Snapshot
Columns
CareManagementCaseTypeComboKey : bigint
Surrogate key used to uniquely identify the record
CategoryKey : bigint
Links to CategoryDim
The destination key
```

---

## CarePathBuildMetadataMappingFact

**Extracted:** 2025-07-22 23:52:42
**Content Length:** 674 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Dim
Try It
CarePathBuildDim
The Care Path build dimension contains information about the Care Path build. Care Path build is static build information for a Care Path (LGL) and contains information such as the Care Path name. Each row represents a Care Path. Change Type: Non-Snapshot
Columns
CarePathBuildKey : bigint
Surrogate key used to uniquely identify the record
CarePathBuildEpicId : numeric(18,0)
Epic ID of the Care Path build. This column identifies locator (LGL) records.
Name : nvarchar(300)
Care Path record name
DisplayName : nvarchar(300)
Care Path display name
```

---

## CarePathConceptBuildDim

**Extracted:** 2025-07-22 23:53:03
**Content Length:** 812 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Fact
Try It
CarePathBuildMetadataMappingFact
The Care Path build metadata mapping fact connects a Care Path build record to a build metadata record. Each row represents a link between a Care Path build record and a build metadata record. Change Type: Non-Snapshot
Columns
CarePathBuildMetadataMappingKey : bigint
Surrogate key used to uniquely identify the record
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
CarePathBuildKey : bigint
Links to CarePathBuildDim
Care Path build that is linked to the build metadata record
BuildMetadataKey : bigint
Links to BuildMetadataFact
Build metadata record that is linked to the Care Path build
```

---

## CarePathEpisodeConceptFact

**Extracted:** 2025-07-22 23:53:25
**Content Length:** 1403 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Fact
Try It
CarePathEpisodeConceptFact
The Care Path Episode Concept fact contains information about Care Path concepts on a Care Path episode. Care Path episode concept aggregates information in a Care Path episode for a Care Path concept. Each row represents the aggregate information for a Care Path concept for a Care Path episode. Change Type: Non-Snapshot
Columns
CarePathEpisodeConceptKey : bigint
Surrogate key used to uniquely identify the record
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
CarePathConceptBuildKey : bigint
Links to CarePathConceptBuildDim
Care Path concept associated with this row
ConceptDurationInSeconds : bigint
The amount of time (in seconds) spent on this concept
CarePathEpisodeKey : bigint
Links to CarePathEpisodeFact
The Care Path episode this is associated with
ConceptStartDateKey : bigint
Links to DateDim
The clinically relevant start date of this Care Path concept
ConceptStartAuditInstant : datetime
The start instant of this Care Path concept
ConceptLastAuditInstant : datetime
The last recorded instant of this Care Path concept
IsActiveConcept : tinyint
Indicates if this is currently the newest (active) concept on the episode (the active step is associated with this concept)
```

---

## CarePathEpisodeEventFact

**Extracted:** 2025-07-22 23:53:46
**Content Length:** 2602 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Fact
Try It
CarePathEpisodeEventFact
The Care Path Episode Event fact contains information about Care Path episode events. Care Path episode events are changes that are made to a Care Path and contain information such as the step, user, and time that the change was made. Each row represents a change made to a Care Path episode. Change Type: Non-Snapshot
Columns
CarePathEpisodeEventKey : bigint
Surrogate key used to uniquely identify the record
CarePathStepBuildKey : bigint
Links to CarePathStepBuildDim
Care Path step associated with the episode step change (step is stored in Care Path (LGL) record)
PatientDurableKey : bigint
Links to PatientDim
The patient associated with this Care Path episode event
ProviderDurableKey : bigint
Links to ProviderDim
Provider that made the Care Path change
NextCarePathEpisodeEventKey : bigint
Links to CarePathEpisodeEventFact
The Care Path step that follows this change
BpaKey : bigint
Links to BpaFact
The OurPractice Advisory that made this change occur
EventStartDateKey : bigint
Links to DateDim
The clinically relevant start date of this Care Path event
EventEndDateKey : bigint
Links to DateDim
The clinically relevant end date of this Care Path event
InitiatedCarePathEpisodeKey : bigint
Links to CarePathEpisodeFact
Care Path episode that initiated this episode (a Care Path can automatically start another Care Path)
CarePathEpisodeKey : bigint
Links to CarePathEpisodeFact
Information relevant to the episode as a whole
EmployeeDurableKey : bigint
Links to EmployeeDim
User that made the Care Path change
CarePathLinkBuildKey : bigint
Links to CarePathLinkBuildDim
The link associated with this Care Path event
PreviousCarePathEpisodeEventKey : bigint
Links to CarePathEpisodeEventFact
The previous Care Path step the episode was on before this change
ChangeType : nvarchar(300)
The type of change that made this occur (manual or OurPractice Advisory)
EventStartAuditInstant : datetime
The start instant of this Care Path event. This is the audit instant of the event and may or may not be clinically relevant.
EventEndAuditInstant : datetime
The end instant of this Care Path event. This is the audit instant of the event and may or may not be clinically relevant.
OrdinalPosition : int
The ordinal position of the Care Path step
IsActiveStep : tinyint
Indicates if this is currently the newest (active) step on the episode
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## CarePathEpisodeFact

**Extracted:** 2025-07-22 23:54:07
**Content Length:** 2602 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Fact
Try It
CarePathEpisodeEventFact
The Care Path Episode Event fact contains information about Care Path episode events. Care Path episode events are changes that are made to a Care Path and contain information such as the step, user, and time that the change was made. Each row represents a change made to a Care Path episode. Change Type: Non-Snapshot
Columns
CarePathEpisodeEventKey : bigint
Surrogate key used to uniquely identify the record
CarePathStepBuildKey : bigint
Links to CarePathStepBuildDim
Care Path step associated with the episode step change (step is stored in Care Path (LGL) record)
PatientDurableKey : bigint
Links to PatientDim
The patient associated with this Care Path episode event
ProviderDurableKey : bigint
Links to ProviderDim
Provider that made the Care Path change
NextCarePathEpisodeEventKey : bigint
Links to CarePathEpisodeEventFact
The Care Path step that follows this change
BpaKey : bigint
Links to BpaFact
The OurPractice Advisory that made this change occur
EventStartDateKey : bigint
Links to DateDim
The clinically relevant start date of this Care Path event
EventEndDateKey : bigint
Links to DateDim
The clinically relevant end date of this Care Path event
InitiatedCarePathEpisodeKey : bigint
Links to CarePathEpisodeFact
Care Path episode that initiated this episode (a Care Path can automatically start another Care Path)
CarePathEpisodeKey : bigint
Links to CarePathEpisodeFact
Information relevant to the episode as a whole
EmployeeDurableKey : bigint
Links to EmployeeDim
User that made the Care Path change
CarePathLinkBuildKey : bigint
Links to CarePathLinkBuildDim
The link associated with this Care Path event
PreviousCarePathEpisodeEventKey : bigint
Links to CarePathEpisodeEventFact
The previous Care Path step the episode was on before this change
ChangeType : nvarchar(300)
The type of change that made this occur (manual or OurPractice Advisory)
EventStartAuditInstant : datetime
The start instant of this Care Path event. This is the audit instant of the event and may or may not be clinically relevant.
EventEndAuditInstant : datetime
The end instant of this Care Path event. This is the audit instant of the event and may or may not be clinically relevant.
OrdinalPosition : int
The ordinal position of the Care Path step
IsActiveStep : tinyint
Indicates if this is currently the newest (active) step on the episode
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## CarePathEventEncounterMappingFact

**Extracted:** 2025-07-22 23:54:28
**Content Length:** 897 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Fact
Try It
CarePathEventEncounterMappingFact
The Care Path event encounter mapping fact connects a Care Path episode event to an encounter. Each row represents a link between a Care Path episode event and an encounter. Change Type: Non-Snapshot
Columns
CarePathEventEncounterMappingKey : bigint
Surrogate key used to uniquely identify the record
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
CarePathEpisodeEventKey : bigint
Links to CarePathEpisodeEventFact
Care Path episode event that is linked to the encounter
EncounterKey : bigint
Links to EncounterFact
Encounter that is linked to the Care Path episode event
EventStartDateKey : bigint
Links to DateDim
The clinically relevant start date of this Care Path event
```

---

## CarePathLinkBuildDim

**Extracted:** 2025-07-22 23:54:47
**Content Length:** 921 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Dim
Try It
CarePathLinkBuildDim
The Care Path Link Build Dimension contains information about the Care Path Link build. Care Path Links are part of the static Care Path build record (LGL) and contains information such as the name and preferred status of the link. Each row represents a Care Path Link. Change Type: Non-Snapshot
Columns
CarePathLinkBuildKey : bigint
Surrogate key used to uniquely identify the record
CarePathBuildKey : bigint
Links to CarePathBuildDim
Care Path this link is associated with
BeginStepKey : bigint
Links to CarePathStepBuildDim
The step the link begins on
EndStepKey : bigint
Links to CarePathStepBuildDim
The step the link ends on
LinkId : int
Link ID for this link
LinkDisplayText : nvarchar(300)
Display text for the link
IsPreferred : tinyint
Indicates if this link is the preferred path
```

---

## CarePathStepBuildDim

**Extracted:** 2025-07-22 23:55:07
**Content Length:** 773 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Dim
Try It
CarePathStepBuildDim
The Care Path Step Build Dimension contains information about the Care Path Step build. Care Path Steps are part of the static Care Path build record (LGL) and contain information such as the name and ID of the step. Each row represents a Care Path Step. Change Type: Non-Snapshot
Columns
CarePathStepBuildKey : bigint
Surrogate key used to uniquely identify the record
CarePathBuildKey : bigint
Links to CarePathBuildDim
Care Path this step is associated with
StepId : int
Care Path step ID. Corresponds to the generated ID for a step when a step is created in the Care Path editor.
StepDisplayText : nvarchar(300)
Care Path step display text
```

---

## CarePathStepConceptBuildMappingFact

**Extracted:** 2025-07-22 23:55:28
**Content Length:** 789 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Fact
Try It
CarePathStepConceptBuildMappingFact
The Care Path Step Concept Build Mapping fact connects a Care Path step to a Care Path concept. Each row represents a link between a Care Path step and a Care Path concept. Change Type: Non-Snapshot
Columns
CarePathStepConceptBuildMappingKey : bigint
Surrogate key used to uniquely identify the record
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
CarePathStepBuildKey : bigint
Links to CarePathStepBuildDim
Care Path step that is linked to the concept
CarePathConceptBuildKey : bigint
Links to CarePathConceptBuildDim
Concept that is linked to the Care Path step
```

---

## CarePlanFact

**Extracted:** 2025-07-22 23:55:49
**Content Length:** 1734 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Fact
Try It
CarePlanFact
The care plan fact contains information about patient facing care plans. Each row represents a single care plan. Change Type: Non-Snapshot
Columns
CarePlanKey : bigint
Surrogate key used to uniquely identify the record
PatientDurableKey : bigint
Links to PatientDim
Patient associated with the care plan
CarePlanTemplateKey : bigint
Links to CarePlanTemplateDim
Care plan template that was used to generate the care plan
CarePlanStartDateKey : bigint
Links to DateDim
Date the care plan was first active
CarePlanEndDateKey : bigint
Links to DateDim
Date the care plan was last active
DepartmentKey : bigint
Links to DepartmentDim
Managing department for this care plan at the time of enrollment. This department will be updated with the current managing department any time a new anchor event is linked to the care plan.
EmployeeDurableKey : bigint
Links to EmployeeDim
User who enrolled the patient in this care plan
CarePlanEpicId : nvarchar(50)
Epic ID of the care plan. This column identifies care plan (LCP) records.
CarePlanStartInstant : datetime
Date and time care plan was first active
CarePlanEndInstant : datetime
Date and time care plan was last active
IsActive : tinyint
1/0 column that indicates whether the most recent status of the care plan is active
TaskCompletionPercentage : numeric(18,2)
Percent of patient-assigned task instances in the care plan that were completed
EnrollmentWorkflow : nvarchar(300)
Workflow from where this care plan was applied to the patient
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## CareTeamFact

**Extracted:** 2025-07-22 23:56:10
**Content Length:** 2555 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class E Fact
Try It
CareTeamFact
The care team fact contains information about care teams. Each row represents an interval of time a provider spent on a care team. Change Type: Non-Snapshot
Columns
CareTeamKey : bigint
Surrogate key used to uniquely identify the record
PatientKey : bigint
Links to PatientDim
Patient for the care team to which the provider is assigned
PatientDurableKey : bigint
Links to PatientDim
Patient for the care team to which the provider is assigned
EncounterKey : bigint
Links to EncounterFact
Encounter for the care team to which the provider is assigned. For Epic data, this is the hospital encounter for ED and inpatient treatment teams, the surgical encounter for surgical teams, and the anesthesia encounter for anesthesia teams.
BirthKey : bigint
Links to BirthFact
Birth for the care team to which the provider is assigned
PregnancyKey : bigint
Links to PregnancyFact
Pregnancy for the care team to which the provider is assigned
ProviderKey : bigint
Links to ProviderDim
Provider assigned to the care team
ProviderDurableKey : bigint
Links to ProviderDim
Provider assigned to the care team
TransplantEpisodeKey : bigint
Links to TransplantEpisodeFact
Transplant episode for the care team to which the provider is assigned
StartDateKey : bigint
Links to DateDim
Date that the provider's time on the care team started
StartTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the provider's time on the care team started
EndDateKey : bigint
Links to DateDim
Date that the provider's time on the care team ended
EndTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the provider's time on the care team ended
StartInstant : datetime
Date and time that the provider's time on the care team started
EndInstant : datetime
Date and time that the provider's time on the care team ended
TeamType : nvarchar(250)
Type of the care team to which the provider is assigned
Role : nvarchar(300)
Role of the provider on the care team
Specialty : nvarchar(300)
Specialty of the provider
StaffResourceGroup : nvarchar(300)
The staff resource group of the provider's care team entry
StaffResourceGroupEpicId : int
The staff resource group category ID of the provider's care team entry
IsEdTreatmentTeam : tinyint
1/0 column that indicates whether the provider is on the patient's ED treatment team or not
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## CategoryDim

**Extracted:** 2025-07-22 23:56:27
**Content Length:** 1010 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Dim
Try It
CategoryDim
The category dimension contains information about category values. It should be linked to via a bridge table when a concept can be associated with an arbitrary number of category values. For example, a patient can be associated with any number of races. Change Type: Non-Snapshot
Columns
CategoryKey : bigint
Surrogate key used to uniquely identify the record
Name : nvarchar(400)
Name of the category value
Abbreviation : nvarchar(150)
Abbreviation of the category value
CategoryName : nvarchar(300)
Name of the category
SubjectArea : nvarchar(300)
Subject area of the category. Subject area is a broad way to group similar category lists. For Epic data this is the master file to which the category belongs.
IsActive : tinyint
1/0 column that indicates whether the category value is active. This column returns 1 if the category value is active and 0 if the category value is not active.
```

---

## CategoryMappingDim

**Extracted:** 2025-07-22 23:56:45
**Content Length:** 1060 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Dim
Try It
CategoryMappingDim
The category mapping dimension contains information about mappings from category values to standard values. Each row represents a source entity (a row in the CategoryDim) mapped to a standard value for a defined standard, such as SNOMED or LOINC. Change Type: Non-Snapshot
Columns
CategoryMappingKey : bigint
Surrogate key used to uniquely identify the record
CategoryKey : bigint
Links to CategoryDim
Category value mapped to the standard code set and value
MappedCategoryKey : bigint
Links to CategoryDim
Category mapping to CategoryKey in a category-to-category mapping
StandardName : nvarchar(300)
Name of the standard code set used for this mapping, such as SNOMED or LOINC
StandardCode : nvarchar(50)
Code set value used for this mapping
TerminologyName : nvarchar(300)
Terminology name associated with the StandardName and StandardCode
CategoryMappingName : nvarchar(300)
Name associated with the category-to-category mapping
```

---

## ChiefComplaintBridge

**Extracted:** 2025-07-22 23:57:00
**Content Length:** 530 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class A Helper
Try It
ChiefComplaintBridge
The chief complaint bridge contains unique combinations of chief complaints associated with other records. Each row represents a chief complaint in a combination. Change Type: Non-Snapshot
Columns
ChiefComplaintComboKey : bigint
Combination key used to uniquely identify a set of chief complaints
ChiefComplaintKey : bigint
Links to ChiefComplaintDim
One of the chief complaints in the combination
```

---

## ChiefComplaintDim

**Extracted:** 2025-07-22 23:57:16
**Content Length:** 1026 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Dim
Try It
ChiefComplaintDim
The chief complaint dimension contains information about chief complaints. Each row represents a chief complaint. Change Type: Non-Snapshot
Columns
ChiefComplaintKey : bigint
Surrogate key used to uniquely identify the record
ChiefComplaintEpicId : nvarchar(50)
Epic ID of the chief complaint. This column identifies chief complaint (HRV) records.
Name : nvarchar(300)
Chief complaint name
Abbreviation : nvarchar(300)
Chief complaint abbreviation
IsBehavioralHealth : tinyint
1/0 column that indicates whether the chief complaint is a behavioral health chief complaint. This column returns 1 if the chief complain is a behavioral health chief complaint and 0 otherwise.
IsSuicideRelated : tinyint
1/0 column that indicates whether the chief complaint is a suicide attempt or ideation chief complaint. This column returns 1 if the chief complain is a suicide related chief complaint and 0 otherwise.
```

---

## ClaimRecoveryReworkTransactionFact

**Extracted:** 2025-07-22 23:57:31
**Content Length:** 1026 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Dim
Try It
ChiefComplaintDim
The chief complaint dimension contains information about chief complaints. Each row represents a chief complaint. Change Type: Non-Snapshot
Columns
ChiefComplaintKey : bigint
Surrogate key used to uniquely identify the record
ChiefComplaintEpicId : nvarchar(50)
Epic ID of the chief complaint. This column identifies chief complaint (HRV) records.
Name : nvarchar(300)
Chief complaint name
Abbreviation : nvarchar(300)
Chief complaint abbreviation
IsBehavioralHealth : tinyint
1/0 column that indicates whether the chief complaint is a behavioral health chief complaint. This column returns 1 if the chief complain is a behavioral health chief complaint and 0 otherwise.
IsSuicideRelated : tinyint
1/0 column that indicates whether the chief complaint is a suicide attempt or ideation chief complaint. This column returns 1 if the chief complain is a suicide related chief complaint and 0 otherwise.
```

---

## ClinicalNoteFact

**Extracted:** 2025-07-22 23:57:48
**Content Length:** 4576 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class E Fact
Try It
ClaimRecoveryReworkTransactionFact
The claim recovery rework transaction fact contains information on financial transactions created when recovering or reworking payments made on accounts payable (AP) claims. This includes transactions categorized as Withhold Payback, Refund, Extra Refund, Recoupment/Remittance Recovery, and Write-off Refund. Change Type: Non-Snapshot
Columns
ClaimRecoveryReworkTransactionKey : bigint
Surrogate key used to uniquely identify the record
BenefitPlanKey : bigint
Links to CoverageDim
Benefit plan of the member associated with the transaction
OwningBusinessSegmentKey : bigint
Links to DepartmentDim
Owning business segment of the transaction
EffectiveDateKey : bigint
Links to DateDim
Effective date of the transaction
AttributedMedicalGroupKey : bigint
Links to PlaceOfServiceDim
Medical group to which the transaction is attributed
AttributedRegionKey : bigint
Links to PlaceOfServiceDim
Region to which the transaction is attributed
PatientDurableKey : bigint
Links to PatientDim
Member associated with the transaction
PostDateKey : bigint
Links to DateDim
Post date of the transaction
ServiceAreaComboKey : bigint
Links to DepartmentBridge
Service area associated with the transaction
VendorKey : bigint
Links to VendorDim
Vendor associated with the transaction
PaymentDateKey : bigint
Links to DateDim
Date when the payment associated with the transaction was made
PatientDateOfBirthKey : bigint
Links to DateDim
Associated member's date of birth at the time of the transaction's creation
AssociatedClaimKey : bigint
Links to ApClaimFact
Claim associated with the transaction. In the event the associated claim is an intermediate claim (adjustment of a claim paid to the wrong recipient), then the correction claim paid to the correct recipient will be used instead.
ProviderDurableKey : bigint
Links to ProviderDim
Provider associated with the claim on the transaction
CoverageKey : bigint
Links to CoverageDim
Coverage of the member associated with the transaction
CheckKey : bigint
Links to ApCheckFact
Check associated with the transaction
CarrierEpicId : nvarchar(50)
Epic ID of the carrier (MCR) record associated with the transaction
CarrierName : nvarchar(50)
Name of the carrier associated with the transaction
MemberGroupEpicId : nvarchar(50)
Epic ID of the member group (MGR) record of the transaction
MemberGroupName : nvarchar(200)
Name of the member group associated with the transaction
RiskPanelEpicId : nvarchar(50)
Epic ID of the risk panel (RKP) record associated with the transaction
RiskPanelName : nvarchar(50)
Name of the risk panel associated with the transaction
LineOfBusinessEpicId : nvarchar(50)
Epic ID of the line of business (EAF) record associated with the transaction
LineOfBusinessName : nvarchar(300)
Name of the line of business associated with the transaction
NetworkEpicId : nvarchar(50)
Epic ID of the network (NET) record associated with the transaction
NetworkName : nvarchar(200)
Name of the network associated with the transaction
RiskPoolEpicId : nvarchar(50)
Epic ID of the risk pool (POL) record associated with the transaction
RiskPoolName : nvarchar(50)
Name of the risk pool associated with the transaction
TransactionEpicId : nvarchar(50)
Epic ID of the transaction (DTX) record associated with the transaction
TransactionType : nvarchar(300)
Type of adjustment transaction
BusinessGroupEpicId : nvarchar(50)
Epic ID of the business group (BGR) record associated with the transaction
BusinessGroupName : nvarchar(300)
Name of the business group associated with the transaction
ResponsibilityClassEpicId : nvarchar(50)
Epic ID of the responsibility class (NRC) record associated with the transaction
ResponsibilityClassName : nvarchar(200)
Name of the responsibility class associated with the transaction
Amount : numeric(12,2)
Amount of the transaction
PatientSex : nvarchar(300)
Member's sex at the time of the transaction's creation. This is the legal sex of the member as defined by a government body.
Specialty : nvarchar(300)
Specialty associated with the transaction
TransactionReason : nvarchar(300)
Reason why the adjustment was created
PaymentStatus : nvarchar(300)
Describes the actual payment status associated with the transaction, such as Caclulated or Paid
CheckNumber : nvarchar(200)
Number of the check associated with the transaction
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## ClinicalNoteTextFact

**Extracted:** 2025-07-22 23:58:04
**Content Length:** 3854 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class D Fact
Description
Note: Due to the size of this table, customers may not be extracting it and may need to turn it on before using a Kit integration that needs this table.
Try It
ClinicalNoteFact
The clinical note fact contains information about clinical notes. Each row represents a note. For Epic data, the fact includes all clinical notes that are not deleted. Change Type: Non-Snapshot
Columns
ClinicalNoteKey : bigint
Surrogate key used to uniquely identify the record
ClinicalNoteEpicId : nvarchar(50)
Epic ID of the clinical note. This column identifies note (HNO) records.
AuthoringEmployeeKey : bigint
Links to EmployeeDim
User who authored the note
AuthoringEmployeeDurableKey : bigint
Links to EmployeeDim
User who authored the note
AuthoringProviderKey : bigint
Links to ProviderDim
Provider who authored the note
AuthoringProviderDurableKey : bigint
Links to ProviderDim
Provider who authored the note
CosigningEmployeeKey : bigint
Links to EmployeeDim
User who Cosigned the note
CosigningEmployeeDurableKey : bigint
Links to EmployeeDim
User who Cosigned the note
PatientKey : bigint
Links to PatientDim
Patient associated with the note
PatientDurableKey : bigint
Links to PatientDim
Patient associated with the note
EncounterKey : bigint
Links to EncounterFact
Encounter associated with the note
ServiceDateKey : bigint
Links to DateDim
Date of service associated with the note
ServiceTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of service associated with the note
CreationDateKey : bigint
Links to DateDim
Date the note was created
CreationTimeOfDayKey : bigint
Links to TimeOfDayDim
Time the note was created
LastEditedDateKey : bigint
Links to DateDim
Date the note was last edited
LastEditedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time the note was last edited
ServiceInstant : datetime
Date and time of service associated with the note
CreationInstant : datetime
Date and time the note was created
LastEditedInstant : datetime
Date and time the note was last edited
Status : nvarchar(300)
Status of the note
Type : nvarchar(300)
Type associated with the note
Service : nvarchar(300)
The hospital service of the note
AuthorType : nvarchar(300)
Provider type of the author at the time the note was signed
TranscriptionType : nvarchar(300)
Transcription type of the note
IsSensitive : tinyint
1/0 column that indicates if the note is sensitive. This column returns 1 if the note is sensitive and 0 if it is not.
ExternalSourceTypeName : nvarchar(300)
The name of the type of external data exchange from which the note was automatically reconciled
ExternalSourceTypeValue : int
The category value of the type of external data exchange from which the note was automatically reconciled
TotalCharCount : int
The total character count of the note
CopiedSourceCharCount : int
The number of characters attributed to copied sources
ManualSourceCharCount : int
The number of characters attributed to manual edits
TemplateSourceCharCount : int
The number of characters attributed to template sources
NoSourceCharCount : int
The number of characters attributed to no source
InitialEditTime : int
The time (in seconds) of the initial edit to the note
TotalEditTime : int
The total edit time (in seconds) for the note
AiDraftEpicId : numeric(18,0)
Epic ID of the AI-generated note draft. This column identifies AI interaction (LLM) records.
AiDraftType : nvarchar(300)
The type of the AI-generated note draft
AiDraftDecision : nvarchar(300)
The user decision on whether AI-generated text was kept or discarded in the note
AiDraftTextUsed : nvarchar(300)
Whether text from the AI-generated draft was included in the note
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## CodedProcedureFact

**Extracted:** 2025-07-22 23:58:20
**Content Length:** 880 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Fact
Description
Note: Due to the size of this table, customers may not be extracting it and may need to turn it on to use a Kit integration that needs this table.
Try It
ClinicalNoteTextFact
The clinical note text fact contains textual information about clinical notes. This full text data extends the clinical note fact and is intended for use with full text searches. Each row represents a note. Change Type: Non-Snapshot
Columns
ClinicalNoteTextKey : bigint
Surrogate key used to uniquely identify the record
ClinicalNoteKey : bigint
Links to ClinicalNoteFact
Clinical note associated with this full text data
Text : nvarchar(MAX)
Full text of the note
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## ComplicationFact

**Extracted:** 2025-07-22 23:58:36
**Content Length:** 2084 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Fact
Try It
ComplicationFact
The complication fact contains information about complications. Each row represents a complication documented on a patient record. Change Type: Non-Snapshot
Columns
ComplicationKey : bigint
Surrogate key used to uniquely identify the record
LastEditedInstant : datetime
Date and time on which the complication was last edited
LastEditedDateKey : bigint
Links to DateDim
Date on which the complication was last edited
LastEditedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day at which the complication was last edited
PatientKey : bigint
Links to PatientDim
Patient for which the complication was documented
PatientDurableKey : bigint
Links to PatientDim
Patient for which the complication was documented
SurgicalCaseKey : bigint
Links to SurgicalCaseFact
Surgical case on which the complication was documented
ProcedureKey : bigint
Links to ProcedureDim
Procedure for which the complication was documented
ProcedureDurableKey : bigint
Links to ProcedureDim
Procedure for which the complication was documented
AnesthesiaRecordKey : bigint
Links to AnesthesiaRecordFact
Anesthesia record associated with the complication
PerfusionRecordKey : bigint
Links to PerfusionRecordFact
Perfusion record associated with the complication
EmployeeKey : bigint
Links to EmployeeDim
Employee who documented the complication
EmployeeDurableKey : bigint
Links to EmployeeDim
Employee who documented the complication
ComplicationName : nvarchar(300)
Complication documented
ComplicationEpicId : int
Complication category ID documented
TimeRange : nvarchar(300)
Time range during which the complication was documented
TimeRangeEpicId : int
Time range category ID during which the complication was documented
Outcome : nvarchar(300)
Outcome of the complication
Comment : nvarchar(300)
User-entered comment associated with the complication
Status : nvarchar(300)
Status of the complication
IsActive : tinyint
1/0 column that indicates whether this complication is active
```

---

## CostCalculatorDepartmentBridge

**Extracted:** 2025-07-22 23:58:52
**Content Length:** 2084 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Fact
Try It
ComplicationFact
The complication fact contains information about complications. Each row represents a complication documented on a patient record. Change Type: Non-Snapshot
Columns
ComplicationKey : bigint
Surrogate key used to uniquely identify the record
LastEditedInstant : datetime
Date and time on which the complication was last edited
LastEditedDateKey : bigint
Links to DateDim
Date on which the complication was last edited
LastEditedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day at which the complication was last edited
PatientKey : bigint
Links to PatientDim
Patient for which the complication was documented
PatientDurableKey : bigint
Links to PatientDim
Patient for which the complication was documented
SurgicalCaseKey : bigint
Links to SurgicalCaseFact
Surgical case on which the complication was documented
ProcedureKey : bigint
Links to ProcedureDim
Procedure for which the complication was documented
ProcedureDurableKey : bigint
Links to ProcedureDim
Procedure for which the complication was documented
AnesthesiaRecordKey : bigint
Links to AnesthesiaRecordFact
Anesthesia record associated with the complication
PerfusionRecordKey : bigint
Links to PerfusionRecordFact
Perfusion record associated with the complication
EmployeeKey : bigint
Links to EmployeeDim
Employee who documented the complication
EmployeeDurableKey : bigint
Links to EmployeeDim
Employee who documented the complication
ComplicationName : nvarchar(300)
Complication documented
ComplicationEpicId : int
Complication category ID documented
TimeRange : nvarchar(300)
Time range during which the complication was documented
TimeRangeEpicId : int
Time range category ID during which the complication was documented
Outcome : nvarchar(300)
Outcome of the complication
Comment : nvarchar(300)
User-entered comment associated with the complication
Status : nvarchar(300)
Status of the complication
IsActive : tinyint
1/0 column that indicates whether this complication is active
```

---

## CostCalculatorSearchFact

**Extracted:** 2025-07-22 23:59:07
**Content Length:** 464 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class A Helper
Try It
CostCalculatorDepartmentBridge
CostCalculatorDepartmentBridge contains unique combinations of service areas and business segments for a cost calculator search. Change Type: Non-Snapshot
Columns
CostCalculatorDepartmentComboKey : bigint
Surrogate key used to uniquely identify the record
DepartmentKey : bigint
Links to DepartmentDim
The destination key
```

---

## CostCenterDim

**Extracted:** 2025-07-22 23:59:24
**Content Length:** 3655 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class E Fact
Try It
CostCalculatorSearchFact
The cost calculator search fact contains each instance of a cost calculator search Change Type: Non-Snapshot
Columns
CostCalculatorSearchKey : bigint
Surrogate key used to uniquely identify the record
CreationDateKey : bigint
Links to DateDim
Creation date of the search
ServiceDateKey : bigint
Links to DateDim
Service date of the search
SearchCreationSource : nvarchar(300)
Creation source of the search
PatientDurableKey : bigint
Links to PatientDim
Patient associated with the search
CoverageKey : bigint
Links to CoverageDim
Coverage associated with the search
ServiceAreaKey : bigint
Links to DepartmentDim
Service area associated with the search
SearchResultsCount : int
Number of results returned by the search
SearchRange : int
Range of the search in miles
SearchPostalCode : nvarchar(50)
Postal code of the search
MinimumPrice : numeric(18,2)
Minimum price of the search
MaximumPrice : numeric(18,2)
Maximum price of the search
OutOfNetworkPrice : numeric(18,2)
The out of network cost of the search
SearchLatitude : numeric(18,6)
Latitude of the search
SearchLongitude : numeric(18,6)
Longitude of the search
LineOfBusinessEpicId : nvarchar(50)
Epic ID of the line of business. This column identifies line of business (LOB) records.
LineOfBusinessName : nvarchar(300)
Line of business associated with the search
BenefitPlanKey : bigint
Links to CoverageDim
Benefit plan associated with the search
CarrierEpicId : nvarchar(50)
Epic ID of the carrier. This column identifies carrier (MCR) records.
CarrierName : nvarchar(300)
Carrier associated with the search
CorporationEpicId : nvarchar(50)
Epic ID of the corporation. This column identifies corporation (CPG) records.
CorporationName : nvarchar(300)
Corporation associated with the search
DivisionEpicId : nvarchar(50)
Epic ID of the division. This column identifies division (DPG) records.
DivisionName : nvarchar(300)
Division associated with the search
EmployerGroupKey : bigint
Links to ManagedCareEmployerDim
Employer group associated with the search
EmployerGroupEpicId : nvarchar(50)
Epic ID of the employer group. This column identifies employer group (PPG) records.
EmployerGroupName : nvarchar(300)
Employer group of the search
RiskPanelEpicId : nvarchar(50)
Epic ID of the risk panel. This column identifies risk panel (RKP) records.
RiskPanelName : nvarchar(300)
Risk panel associated with the search
PayerKey : bigint
Links to CoverageDim
Payer of the search
PrimaryCareProviderDurableKey : bigint
Links to ProviderDim
The coverage level PCP associated with the search
AnchorProcedureDurableKey : bigint
Links to ProcedureDim
Anchor procedure of the search
DrgKey : bigint
Links to DrgDim
DRG associated with the search
WasResultClicked : tinyint
Whether any of the returned search results were clicked by a user
CostCalculatorSearchEpicId : nvarchar(50)
Epic ID of the search. This column identifies search (PES) records.
AuthorizedServiceAreasComboKey : bigint
Links to CostCalculatorDepartmentBridge
Authorized service areas associated with the search
CreatingEmployeeDurableKey : bigint
Links to EmployeeDim
Employee who created the search
MedicalGroupKey : bigint
Links to PlaceOfServiceDim
The medical group associated with the search
RegionKey : bigint
Links to PlaceOfServiceDim
The region associated with the search
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
TemplateUsedKey : bigint
Links to BillingEstimateTemplateDim
Template the search used, if any
```

---

## CoverageDim

**Extracted:** 2025-07-22 23:59:42
**Content Length:** 7887 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class F Dim
Try It
CoverageDim
The coverage dimension contains information about coverages. Each row represents a coverage. For Epic data, data is imported for coverages, benefit plans with no coverage information, and payors with no benefit plan nor coverage information. Change Type: Non-Snapshot
Columns
CoverageKey : bigint
Surrogate key used to uniquely identify the record
OwningServiceAreaKey : bigint
Links to DepartmentDim
Tapestry owning service area or business segment associated with the coverage
ServiceAreaComboKey : bigint
Links to DepartmentBridge
Tapestry service areas and business segments associated with the coverage
CoverageEpicId : numeric(18,0)
Epic ID of the coverage. This column identifies coverage (CVG) records
CoverageFinancialClass : nvarchar(300)
Financial class of the coverage
CoverageType : nvarchar(300)
Type of the coverage
CoverageAddress : nvarchar(550)
Street address for the coverage administrative offices
CoverageCity : nvarchar(300)
City for the coverage administrative offices
CoverageStateOrProvince : nvarchar(300)
State or province for the coverage administrative offices
CoverageStateOrProvinceAbbreviation : nvarchar(300)
Abbreviated name of the state or province for the coverage administrative offices
CoveragePostalCode : nvarchar(50)
Postal code for the coverage administrative offices
CoverageEffectiveDate : date
Effective date of the coverage
CoverageTerminationDate : date
Termination date of the coverage
CoverageVerificationEmployeeDurableKey : bigint
Links to EmployeeDim
User who most recently verified the coverage
EmployerGroupKey : bigint
Links to ManagedCareEmployerDim
Employer group associated with the coverage
SubscriberNumber : nvarchar(50)
Identification number assigned to the subscriber
SubscriberGroupNumber : nvarchar(300)
Group number of the subscriber
SubscriberName : nvarchar(200)
Name of the subscriber
SubscriberSsn : nvarchar(200)
Social Security number (SSN) of the subscriber
SubscriberAddress : nvarchar(550)
Street address for the subscriber
SubscriberCity : nvarchar(300)
City for the subscriber
SubscriberStateOrProvince : nvarchar(300)
State or province for the subscriber
SubscriberStateOrProvinceAbbreviation : nvarchar(300)
Abbreviated name of the state or province for the subscriber
SubscriberPostalCode : nvarchar(50)
Postal code for the subscriber
SubscriberCounty : nvarchar(300)
County for the subscriber
SubscriberPhoneNumber : nvarchar(50)
Phone number of the subscriber
CorporationEpicId : nvarchar(50)
Epic ID of the corporation associated with the coverage. This column identifies corporation (CPG) records.
CorporationName : nvarchar(200)
Name of the corporation associated with the coverage
DivisionEpicId : nvarchar(50)
Epic ID of the division associated with the coverage. This column identifies division (DPG) records.
DivisionName : nvarchar(200)
Name of the division associated with the coverage
EmployerGroupEpicId : nvarchar(50)
Epic ID of the employer group associated with the coverage. This column identifies employer group (PPG) records.
EmployerGroupName : nvarchar(300)
Name of the employer group
EmployerGroupAnniversaryDate : date
Anniversary date of the employer group
IsCoverage : tinyint
1/0 column that indicates whether this is a coverage. This column returns 1 if this is a coverage and 0 if this is not a coverage.
CreatedFromEligibilityResponse : tinyint
1/0 column that indicates whether the coverage was created from a coverage eligibility response. This column returns 1 if the coverage was created from a coverage eligibility response and 0 if the coverage was not.
AutoCreatedFromEligibilityResponse : tinyint
1/0 column that indicates whether the coverage was automatically created from a coverage eligibility response. This column returns 1 if the coverage was automatically created from a coverage eligibility response and 0 if the coverage was not.
BenefitPlanEpicId : numeric(18,0)
Epic ID of the benefit plan. This column identifies benefit plan (EPP) records
BenefitPlanName : nvarchar(100)
Name of the benefit plan
BenefitPlanProductType : nvarchar(300)
Product type of the benefit plan
BenefitPlanType : nvarchar(300)
Type of the benefit plan
InPlanLifetimeMaximum : numeric(18,2)
Lifetime maximum limit for in-plan bucket of the benefit plan
OutOfPlanLifetimeMaximum : numeric(18,2)
Lifetime maximum limit for out-of-plan bucket of the benefit plan
TotalPlanLifetimeMaximum : numeric(18,2)
Lifetime maximum limit for total accumulation of the benefit plan
IsBenefitPlan : tinyint
1/0 column that indicates whether this is a benefit plan. This column returns 1 if this is a benefit plan and 0 if this is not a benefit plan.
PayorEpicId : nvarchar(50)
Epic ID of the payor. This column identifies payor (EPM) records
PayorName : nvarchar(100)
Name of the payor
PayorFinancialClass : nvarchar(300)
Financial class of the payor
PayorProductType : nvarchar(300)
Product type of the payor
PayorAddress : nvarchar(550)
Street address for the payor
PayorCity : nvarchar(300)
City for the payor
PayorStateOrProvince : nvarchar(300)
State or province for the payor
PayorStateOrProvinceAbbreviation : nvarchar(300)
Abbreviated name of the state or province for the payor
PayorPostalCode : nvarchar(50)
Postal code for the payor
PayorDistrict : nvarchar(300)
District for the payor
PayorCounty : nvarchar(300)
County for the payor
PayorCountry : nvarchar(300)
Country for the payor
PayorPhoneNumber : nvarchar(50)
Phone number of the payor
ReferencePayer : nvarchar(300)
The reference payer that this payer corresponds with, used for payer benchmarking metrics
ReferenceFinancialClass : nvarchar(300)
The financial class of the reference payer that this payer corresponds with, used for payer benchmarking metrics
ReferencePayerFinancialClass : nvarchar(300)
The reference payer-financial class that this payer corresponds with, calculated based on the reference payer and reference financial class. This value is used for mapping and payer benchmarking metrics.
IsPayor : tinyint
1/0 column that indicates whether this is a payor. This column returns 1 if this is a payor and 0 if this is not a payor.
IsSelfPay : tinyint
1/0 column that indicates whether this is self-pay. This column returns 1 if this is self-pay and 0 if this is not self-pay.
IsUndistributed : tinyint
1/0 column that indicates whether this is undistributed. This column returns 1 if this is undistributed and 0 if this is not undistributed.
NcqaPlanType : nvarchar(300)
The NCQA Plan Type of the benefit plan
IsCommercialNcqaProductLine : tinyint
1/0 column that indicates whether this benefit plan is mapped to the Commercial NCQA Product Line
IsMedicareNcqaProductLine : tinyint
1/0 column that indicates whether this benefit plan is mapped to the Medicare NCQA Product Line
IsMedicaidNcqaProductLine : tinyint
1/0 column that indicates whether this benefit plan is mapped to the Medicaid NCQA Product Line
IsExchangeNcqaProductLine : tinyint
1/0 column that indicates whether this benefit plan is mapped to the Exchange NCQA Product Line
IsSpecialNeedsPlanNcqaProductLine : tinyint
1/0 column that indicates whether this benefit plan is mapped to the Special Needs Plan (SNP) NCQA Product Line
PriorAuthOrganizationEpicId : numeric(18,0)
Epic ID of the Payer Platform Organization (DXO) record associated with this coverage for prior auth.
PriorAuthMembersLinked : tinyint
1/0 column indicating if all members of the coverages have links to the Prior Auth Payer Platform Organization
IsMedicareMedicaidPlanNcqaProductLine : tinyint
1/0 column that indicates whether this benefit plan is mapped to the Medicare-Medicaid Plan (MMP) NCQA Product Line
IsMedicareCostNcqaProductLine : tinyint
1/0 column that indicates whether this benefit plan is mapped to the Medicare Cost NCQA Product Line
```

---

## DateDim

**Extracted:** 2025-07-22 23:59:59
**Content Length:** 7887 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class F Dim
Try It
CoverageDim
The coverage dimension contains information about coverages. Each row represents a coverage. For Epic data, data is imported for coverages, benefit plans with no coverage information, and payors with no benefit plan nor coverage information. Change Type: Non-Snapshot
Columns
CoverageKey : bigint
Surrogate key used to uniquely identify the record
OwningServiceAreaKey : bigint
Links to DepartmentDim
Tapestry owning service area or business segment associated with the coverage
ServiceAreaComboKey : bigint
Links to DepartmentBridge
Tapestry service areas and business segments associated with the coverage
CoverageEpicId : numeric(18,0)
Epic ID of the coverage. This column identifies coverage (CVG) records
CoverageFinancialClass : nvarchar(300)
Financial class of the coverage
CoverageType : nvarchar(300)
Type of the coverage
CoverageAddress : nvarchar(550)
Street address for the coverage administrative offices
CoverageCity : nvarchar(300)
City for the coverage administrative offices
CoverageStateOrProvince : nvarchar(300)
State or province for the coverage administrative offices
CoverageStateOrProvinceAbbreviation : nvarchar(300)
Abbreviated name of the state or province for the coverage administrative offices
CoveragePostalCode : nvarchar(50)
Postal code for the coverage administrative offices
CoverageEffectiveDate : date
Effective date of the coverage
CoverageTerminationDate : date
Termination date of the coverage
CoverageVerificationEmployeeDurableKey : bigint
Links to EmployeeDim
User who most recently verified the coverage
EmployerGroupKey : bigint
Links to ManagedCareEmployerDim
Employer group associated with the coverage
SubscriberNumber : nvarchar(50)
Identification number assigned to the subscriber
SubscriberGroupNumber : nvarchar(300)
Group number of the subscriber
SubscriberName : nvarchar(200)
Name of the subscriber
SubscriberSsn : nvarchar(200)
Social Security number (SSN) of the subscriber
SubscriberAddress : nvarchar(550)
Street address for the subscriber
SubscriberCity : nvarchar(300)
City for the subscriber
SubscriberStateOrProvince : nvarchar(300)
State or province for the subscriber
SubscriberStateOrProvinceAbbreviation : nvarchar(300)
Abbreviated name of the state or province for the subscriber
SubscriberPostalCode : nvarchar(50)
Postal code for the subscriber
SubscriberCounty : nvarchar(300)
County for the subscriber
SubscriberPhoneNumber : nvarchar(50)
Phone number of the subscriber
CorporationEpicId : nvarchar(50)
Epic ID of the corporation associated with the coverage. This column identifies corporation (CPG) records.
CorporationName : nvarchar(200)
Name of the corporation associated with the coverage
DivisionEpicId : nvarchar(50)
Epic ID of the division associated with the coverage. This column identifies division (DPG) records.
DivisionName : nvarchar(200)
Name of the division associated with the coverage
EmployerGroupEpicId : nvarchar(50)
Epic ID of the employer group associated with the coverage. This column identifies employer group (PPG) records.
EmployerGroupName : nvarchar(300)
Name of the employer group
EmployerGroupAnniversaryDate : date
Anniversary date of the employer group
IsCoverage : tinyint
1/0 column that indicates whether this is a coverage. This column returns 1 if this is a coverage and 0 if this is not a coverage.
CreatedFromEligibilityResponse : tinyint
1/0 column that indicates whether the coverage was created from a coverage eligibility response. This column returns 1 if the coverage was created from a coverage eligibility response and 0 if the coverage was not.
AutoCreatedFromEligibilityResponse : tinyint
1/0 column that indicates whether the coverage was automatically created from a coverage eligibility response. This column returns 1 if the coverage was automatically created from a coverage eligibility response and 0 if the coverage was not.
BenefitPlanEpicId : numeric(18,0)
Epic ID of the benefit plan. This column identifies benefit plan (EPP) records
BenefitPlanName : nvarchar(100)
Name of the benefit plan
BenefitPlanProductType : nvarchar(300)
Product type of the benefit plan
BenefitPlanType : nvarchar(300)
Type of the benefit plan
InPlanLifetimeMaximum : numeric(18,2)
Lifetime maximum limit for in-plan bucket of the benefit plan
OutOfPlanLifetimeMaximum : numeric(18,2)
Lifetime maximum limit for out-of-plan bucket of the benefit plan
TotalPlanLifetimeMaximum : numeric(18,2)
Lifetime maximum limit for total accumulation of the benefit plan
IsBenefitPlan : tinyint
1/0 column that indicates whether this is a benefit plan. This column returns 1 if this is a benefit plan and 0 if this is not a benefit plan.
PayorEpicId : nvarchar(50)
Epic ID of the payor. This column identifies payor (EPM) records
PayorName : nvarchar(100)
Name of the payor
PayorFinancialClass : nvarchar(300)
Financial class of the payor
PayorProductType : nvarchar(300)
Product type of the payor
PayorAddress : nvarchar(550)
Street address for the payor
PayorCity : nvarchar(300)
City for the payor
PayorStateOrProvince : nvarchar(300)
State or province for the payor
PayorStateOrProvinceAbbreviation : nvarchar(300)
Abbreviated name of the state or province for the payor
PayorPostalCode : nvarchar(50)
Postal code for the payor
PayorDistrict : nvarchar(300)
District for the payor
PayorCounty : nvarchar(300)
County for the payor
PayorCountry : nvarchar(300)
Country for the payor
PayorPhoneNumber : nvarchar(50)
Phone number of the payor
ReferencePayer : nvarchar(300)
The reference payer that this payer corresponds with, used for payer benchmarking metrics
ReferenceFinancialClass : nvarchar(300)
The financial class of the reference payer that this payer corresponds with, used for payer benchmarking metrics
ReferencePayerFinancialClass : nvarchar(300)
The reference payer-financial class that this payer corresponds with, calculated based on the reference payer and reference financial class. This value is used for mapping and payer benchmarking metrics.
IsPayor : tinyint
1/0 column that indicates whether this is a payor. This column returns 1 if this is a payor and 0 if this is not a payor.
IsSelfPay : tinyint
1/0 column that indicates whether this is self-pay. This column returns 1 if this is self-pay and 0 if this is not self-pay.
IsUndistributed : tinyint
1/0 column that indicates whether this is undistributed. This column returns 1 if this is undistributed and 0 if this is not undistributed.
NcqaPlanType : nvarchar(300)
The NCQA Plan Type of the benefit plan
IsCommercialNcqaProductLine : tinyint
1/0 column that indicates whether this benefit plan is mapped to the Commercial NCQA Product Line
IsMedicareNcqaProductLine : tinyint
1/0 column that indicates whether this benefit plan is mapped to the Medicare NCQA Product Line
IsMedicaidNcqaProductLine : tinyint
1/0 column that indicates whether this benefit plan is mapped to the Medicaid NCQA Product Line
IsExchangeNcqaProductLine : tinyint
1/0 column that indicates whether this benefit plan is mapped to the Exchange NCQA Product Line
IsSpecialNeedsPlanNcqaProductLine : tinyint
1/0 column that indicates whether this benefit plan is mapped to the Special Needs Plan (SNP) NCQA Product Line
PriorAuthOrganizationEpicId : numeric(18,0)
Epic ID of the Payer Platform Organization (DXO) record associated with this coverage for prior auth.
PriorAuthMembersLinked : tinyint
1/0 column indicating if all members of the coverages have links to the Prior Auth Payer Platform Organization
IsMedicareMedicaidPlanNcqaProductLine : tinyint
1/0 column that indicates whether this benefit plan is mapped to the Medicare-Medicaid Plan (MMP) NCQA Product Line
IsMedicareCostNcqaProductLine : tinyint
1/0 column that indicates whether this benefit plan is mapped to the Medicare Cost NCQA Product Line
```

---

## DepartmentBridge

**Extracted:** 2025-07-23 00:00:16
**Content Length:** 5937 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class E Dim
Try It
DateDim
The date dimension contains information about dates. Each row represents a date. The dimension supports dates from January 1, 0001 to December 30, 9999. Change Type: Non-Snapshot
Columns
DateKey : bigint
Surrogate key used to uniquely identify the record. The value is the combination of the four-digit year from 0001 to 9999, the two-digit month from 01 to 12, and the two-digit day from 01 to 31.
DateValue : date
Value in date format
DisplayString : nvarchar(50)
Display string for the date formatted by the configuration settings
EpicDte : int
Number of days since December 31, 1840 for the date. This column will be NULL for dates earlier than December 31, 1840 and dates later than September 27, 2173.
EpicDat : int
Epic contact date sequence number for the date. The value is 121,531 minus the number of days since December 31, 1840. This column will be NULL for dates earlier than December 31, 1840 and dates later than September 27, 2173.
EpicInstantAtMidnight : bigint
The point in time for midnight of the date. The value is the number of seconds since midnight on December 31, 1840. This column will be NULL for dates earlier than December 31, 1840.
DayOfWeek : nvarchar(50)
Name of the day of the week
DayOfWeekAbbreviation : nvarchar(50)
Abbreviated name of the day of the week
DayOfMonth : tinyint
Number of the day of the month for the date from 1 to 31
OccurrenceInMonth : tinyint
Number of times the day of the week has occurred in the month for the date from 1 to 5
DayOfYear : smallint
Number of the day of the year for the date from 1 to 366
Weekend : tinyint
1/0 column that indicates whether the date is on a weekend. This column returns 1 if the date is on a weekend and 0 if the date is on a weekday.
IsWeekendIncludingFriday : tinyint
1/0 column that indicates whether the date is on a weekend. This column returns 1 if the date is on a weekend and 0 if the date is on a weekday. Here, weekend is defined as Friday, Saturday, and Sunday.
LastFridayDate : date
Date of the Friday prior to the date. If the date is a Friday, this column holds that date value. This column will be NULL for dates earlier than January 5, 1753.
TomorrowDate : date
The day following the date
WeekNumber : tinyint
Number of the week since the beginning of the year for the date from 1 to 54
IsoWeekNumber : tinyint
Number of the week since the beginning of the year for the date as defined by the International Organization for Standardization (ISO)
WeekYear : nvarchar(50)
String containing the concatenation of the two-digit week number, a space, and the four-digit year
IsoWeekYear : nvarchar(50)
String containing the concatenation of the two-digit week number, a space, and the four-digit year as defined by the International Organization for Standardization (ISO)
WeekStartDate : date
Date of the first day of the week for the date. This column will be NULL for dates earlier than January 1, 1753.
WeekEndDate : date
Date of the last day of the week for the date. This column will be NULL for dates earlier than January 1, 1753.
MonthName : nvarchar(50)
Name of the month for the date
MonthNameAbbreviation : nvarchar(50)
Abbreviated name of the month for the date
MonthNumber : tinyint
Number of the month of the year for the date from 1 to 12
MonthYear : nvarchar(50)
String containing the concatenation of the two-digit month, a space, and the four-digit year
FormattedMonthYear : nvarchar(50)
String containing the concatenation of the month name, a space, and the four-digit year
MonthStartDate : date
Date of the first day of the month for the date. This column will be NULL for dates earlier than January 1, 1753.
MonthEndDate : date
Date of the last day of the month for the date. This column will be NULL for dates earlier than January 1, 1753.
QuarterNumber : tinyint
Number of the quarter for the date from 1 to 4
FormattedQuarterNumber : nvarchar(50)
String containing the concatenation of "Q" and the number of the quarter for the date
QuarterYear : nvarchar(50)
String containing the concatenation of the one-digit quarter, a space, and the four-digit year
FormattedQuarterYear : nvarchar(50)
String containing the concatenation of the two-digit quarter (Q + quarter number), a space, and the four-digit year
QuarterStartDate : date
Date of the first day of the quarter for the date. This column will be NULL for dates earlier than January 1, 1753.
QuarterEndDate : date
Date of the last day of the quarter for the date. This column will be NULL for dates earlier than January 1, 1753.
Year : smallint
Year for the date from 0001 to 9999
YearWeek : nvarchar(50)
String containing the concatenation of the four-digit year, a space, and the two-digit week number
IsoYearWeek : nvarchar(50)
String containing the concatenation of the four-digit year, a space, and the two-digit week number as defined by the International Organization for Standardization (ISO)
YearMonth : nvarchar(50)
String containing the concatenation of the four-digit year and the two-digit month
YearFormattedMonth : nvarchar(50)
String containing the concatenation of the four-digit year, a space, and the month name
YearQuarter : nvarchar(50)
String containing the concatenation of the four-digit year, a space, and the one-digit quarter
YearFormattedQuarter : nvarchar(50)
String containing the concatenation of the four-digit year, a space, and the two-digit quarter (Q + quarter number)
YearStartDate : date
Date of the first day of the year for the date. This column will be NULL for dates earlier than January 1, 1753.
YearEndDate : date
Date of the last day of the year for the date. This column will be NULL for dates earlier than January 1, 1753.
PreviousYearDate : date
Date one year prior to the date. This column will be NULL for dates earlier than January 1, 1754.
NextYearDate : date
Date one year after the date
```

---

## DepartmentDim

**Extracted:** 2025-07-23 00:00:33
**Content Length:** 5937 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class E Dim
Try It
DateDim
The date dimension contains information about dates. Each row represents a date. The dimension supports dates from January 1, 0001 to December 30, 9999. Change Type: Non-Snapshot
Columns
DateKey : bigint
Surrogate key used to uniquely identify the record. The value is the combination of the four-digit year from 0001 to 9999, the two-digit month from 01 to 12, and the two-digit day from 01 to 31.
DateValue : date
Value in date format
DisplayString : nvarchar(50)
Display string for the date formatted by the configuration settings
EpicDte : int
Number of days since December 31, 1840 for the date. This column will be NULL for dates earlier than December 31, 1840 and dates later than September 27, 2173.
EpicDat : int
Epic contact date sequence number for the date. The value is 121,531 minus the number of days since December 31, 1840. This column will be NULL for dates earlier than December 31, 1840 and dates later than September 27, 2173.
EpicInstantAtMidnight : bigint
The point in time for midnight of the date. The value is the number of seconds since midnight on December 31, 1840. This column will be NULL for dates earlier than December 31, 1840.
DayOfWeek : nvarchar(50)
Name of the day of the week
DayOfWeekAbbreviation : nvarchar(50)
Abbreviated name of the day of the week
DayOfMonth : tinyint
Number of the day of the month for the date from 1 to 31
OccurrenceInMonth : tinyint
Number of times the day of the week has occurred in the month for the date from 1 to 5
DayOfYear : smallint
Number of the day of the year for the date from 1 to 366
Weekend : tinyint
1/0 column that indicates whether the date is on a weekend. This column returns 1 if the date is on a weekend and 0 if the date is on a weekday.
IsWeekendIncludingFriday : tinyint
1/0 column that indicates whether the date is on a weekend. This column returns 1 if the date is on a weekend and 0 if the date is on a weekday. Here, weekend is defined as Friday, Saturday, and Sunday.
LastFridayDate : date
Date of the Friday prior to the date. If the date is a Friday, this column holds that date value. This column will be NULL for dates earlier than January 5, 1753.
TomorrowDate : date
The day following the date
WeekNumber : tinyint
Number of the week since the beginning of the year for the date from 1 to 54
IsoWeekNumber : tinyint
Number of the week since the beginning of the year for the date as defined by the International Organization for Standardization (ISO)
WeekYear : nvarchar(50)
String containing the concatenation of the two-digit week number, a space, and the four-digit year
IsoWeekYear : nvarchar(50)
String containing the concatenation of the two-digit week number, a space, and the four-digit year as defined by the International Organization for Standardization (ISO)
WeekStartDate : date
Date of the first day of the week for the date. This column will be NULL for dates earlier than January 1, 1753.
WeekEndDate : date
Date of the last day of the week for the date. This column will be NULL for dates earlier than January 1, 1753.
MonthName : nvarchar(50)
Name of the month for the date
MonthNameAbbreviation : nvarchar(50)
Abbreviated name of the month for the date
MonthNumber : tinyint
Number of the month of the year for the date from 1 to 12
MonthYear : nvarchar(50)
String containing the concatenation of the two-digit month, a space, and the four-digit year
FormattedMonthYear : nvarchar(50)
String containing the concatenation of the month name, a space, and the four-digit year
MonthStartDate : date
Date of the first day of the month for the date. This column will be NULL for dates earlier than January 1, 1753.
MonthEndDate : date
Date of the last day of the month for the date. This column will be NULL for dates earlier than January 1, 1753.
QuarterNumber : tinyint
Number of the quarter for the date from 1 to 4
FormattedQuarterNumber : nvarchar(50)
String containing the concatenation of "Q" and the number of the quarter for the date
QuarterYear : nvarchar(50)
String containing the concatenation of the one-digit quarter, a space, and the four-digit year
FormattedQuarterYear : nvarchar(50)
String containing the concatenation of the two-digit quarter (Q + quarter number), a space, and the four-digit year
QuarterStartDate : date
Date of the first day of the quarter for the date. This column will be NULL for dates earlier than January 1, 1753.
QuarterEndDate : date
Date of the last day of the quarter for the date. This column will be NULL for dates earlier than January 1, 1753.
Year : smallint
Year for the date from 0001 to 9999
YearWeek : nvarchar(50)
String containing the concatenation of the four-digit year, a space, and the two-digit week number
IsoYearWeek : nvarchar(50)
String containing the concatenation of the four-digit year, a space, and the two-digit week number as defined by the International Organization for Standardization (ISO)
YearMonth : nvarchar(50)
String containing the concatenation of the four-digit year and the two-digit month
YearFormattedMonth : nvarchar(50)
String containing the concatenation of the four-digit year, a space, and the month name
YearQuarter : nvarchar(50)
String containing the concatenation of the four-digit year, a space, and the one-digit quarter
YearFormattedQuarter : nvarchar(50)
String containing the concatenation of the four-digit year, a space, and the two-digit quarter (Q + quarter number)
YearStartDate : date
Date of the first day of the year for the date. This column will be NULL for dates earlier than January 1, 1753.
YearEndDate : date
Date of the last day of the year for the date. This column will be NULL for dates earlier than January 1, 1753.
PreviousYearDate : date
Date one year prior to the date. This column will be NULL for dates earlier than January 1, 1754.
NextYearDate : date
Date one year after the date
```

---

## DeteriorationEncounterFact

**Extracted:** 2025-07-23 00:00:51
**Content Length:** 7902 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class F Dim
Try It
DepartmentDim
The department dimension contains information about locations in a facility. Each row represents a bed, room, room group, care area, submitter, department, location, service area, facility profile, or business segment. For Epic data, data is imported at each level of granularity, with records at each level of granularity containing information about the levels above it. Change Type: Non-Snapshot
Columns
DepartmentKey : bigint
Surrogate key used to uniquely identify the record
Name : nvarchar(300)
Name of the location in the facility
BedEpicId : nvarchar(50)
Epic ID of the bed. This column identifies Grand Central bed (BED) records.
BedName : nvarchar(300)
Name of the bed
IsBed : tinyint
1/0 column that indicates whether this is a bed. This column returns 1 if this is a bed and 0 if this is not a bed.
BedInCensus : tinyint
1/0 column that indicates whether the bed should be included in census reporting. This column returns 1 if the bed should be included in census reporting and 0 if the bed shouldn't be included in census reporting.
RoomEpicId : nvarchar(50)
Epic ID of the room. This column identifies Grand Central room (ROM) records.
RoomName : nvarchar(300)
Name of the room
IsRoom : tinyint
1/0 column that indicates whether this is a room. This column returns 1 if this is a room and 0 if this is not a room.
OperatingRoomEpicId : nvarchar(50)
Epic ID of the operating room. This column identifies OpTime operating room (SER) records.
RoomGroupEpicId : nvarchar(50)
Epic ID of the room group. This column identifies location (EAF) records.
RoomGroupName : nvarchar(200)
Name of the group of rooms to which the room belongs. For Epic data, this column is only populated for operating rooms.
IsRoomGroup : tinyint
1/0 column that indicates whether this is a room group. This column returns 1 if this is a room group and 0 if this is not a room group.
CareAreaEpicId : nvarchar(50)
Epic ID of the care area. This column identifies care area (LED) records.
CareAreaName : nvarchar(300)
Name of the care area
IsCareArea : tinyint
1/0 column that indicates whether this is a care area. This column returns 1 if this is a care area and 0 if this is not a care area.
SubmitterEpicId : numeric(18,0)
Epic ID of the submitter. This column identifies submitter (SMT) records.
EmrParticipantLevel : nvarchar(300)
Level of patient integration with the Electronic Medical Record. For Epic data, this column is only populated for submitters and can contain Participating, Non-Participating, or Participating without patient creation.
IsSubmitter : tinyint
1/0 column that indicates whether this is a submitter. This column returns 1 if this is a submitter and 0 if this is not a submitter.
DepartmentEpicId : nvarchar(50)
Epic ID of the department. This column identifies department (DEP) records.
DepartmentName : nvarchar(300)
Name of the department or submitter
DepartmentExternalName : nvarchar(300)
External name of the department or submitter, often used in patient correspondence
DepartmentAbbreviation : nvarchar(50)
Abbreviated department name
DepartmentCenter : nvarchar(300)
Center to which the department belongs
DepartmentSpecialtyEpicId : nvarchar(50)
Epic ID of the specialty practiced in the department
DepartmentSpecialty : nvarchar(300)
Specialty practiced in the department
DepartmentSpecialtyAbbreviation : nvarchar(300)
Abbreviation for the specialty practiced in the department
DepartmentType : nvarchar(50)
Primary type of the department
DepartmentServiceGrouper : nvarchar(50)
Service reporting grouper of the department
DepartmentLevelOfCareGrouper : nvarchar(50)
Level of care reporting grouper of the department
IsDepartment : tinyint
1/0 column that indicates whether this is a department. This column returns 1 if this is a department and 0 if this is not a department.
RestrictedDepartment : tinyint
1/0 column that indicates whether the department is a restricted department. This column returns 1 if the department is a restricted department and 0 if the department isn't a restricted department.
OtherAreaName : nvarchar(300)
Name of the area outside the facility structure. For Epic data, this includes Patient Location Facility (PLF) records with a type of 7-Other.
LocationEpicId : nvarchar(50)
Epic ID of the location. This column identifies facility profile (EAF) records with a type of 2-Location.
LocationName : nvarchar(200)
Name of the location
LocationAbbreviation : nvarchar(50)
Abbreviated name of the location
LocationCcnEpicId : numeric(18,0)
Epic ID of the Centers for Medicare and Medicaid Services certification number (CCN) for the location
LocationCcn : nvarchar(300)
Centers for Medicare and Medicaid Services certification number (CCN) for the location
CcnInpatientKey : bigint
Links to CcnInpatientDim
Hospital CCN associated with this department
IsLocation : tinyint
1/0 column that indicates whether this is a location. This column returns 1 if this is a location and 0 if this is not a location.
IsFacilityProfile : tinyint
1/0 column that indicates whether this is a facility profile. This column returns 1 if this is a facility profile and 0 if this is not a facility profile.
ParentLocationEpicId : nvarchar(50)
Epic ID of the parent location. This column identifies facility profile (EAF) records with a type of 2-Location.
ParentLocationName : nvarchar(200)
Name of the parent location
RegionEpicId : nvarchar(50)
Epic ID of the region. This column identifies facility profile (EAF) records with a type of 12-Region.
RegionName : nvarchar(200)
The name of the region
ServiceAreaEpicId : nvarchar(50)
Epic ID of the service area, facility profile, or business segment. This column identifies facility profile (EAF) records with a type of 1-Facility Profile, 4-Service Area, or 11-Business Segment.
ServiceAreaName : nvarchar(200)
Name of the service area, facility profile, or business segment
IsBusinessSegment : tinyint
1/0 column that indicates whether this is a business segment. This column returns 1 if this is a business segment and 0 if this is not a business segment.
IsServiceArea : tinyint
1/0 column that indicates whether this is a service area or facility profile. This column returns 1 if this is a service area or facility profile and 0 if not.
IsServiceAreaOrBusinessSegment : tinyint
1/0 column that indicates whether this is a service area, facility profile, or business segment. This column returns 1 if this is a service area, facility profile, or business segment and 0 if not.
Type : nvarchar(300)
Type of submitter. For Epic data, this column is only populated for submitters and can contain Health Agency, Research, or other values.
Address : nvarchar(150)
Associated street address.
City : nvarchar(300)
Associated city
County : nvarchar(300)
Associated county
StateOrProvince : nvarchar(300)
Associated state or province
StateOrProvinceAbbreviation : nvarchar(300)
Abbreviated name of the associated state or province
Country : nvarchar(300)
Associated country
PostalCode : nvarchar(50)
Associated postal code
HomeCareCCN : nvarchar(50)
This column stores the CCN associated with the home health or hospice agency associated with this department.
LicenseType : nvarchar(300)
Whether this is a Host or a Connect Site
IsBehavioralHealth : tinyint
1/0 column that indicates whether this department has a behavioral health specialty. This column returns 1 if the department has a behavioral health specialty and 0 otherwise.
DepartmentStandardSpecialty : nvarchar(300)
Epic standard specialty of the department
RoomType : nvarchar(300)
Column indicating the room type for rooms
PatientLocationEpicId : nvarchar(50)
Epic ID of the patient location. This column identifies patient location (PLF) records.
Floor : nvarchar(300)
The associated floor.
Wing : nvarchar(300)
The associated wing.
```

---

## DiagnosisBridge

**Extracted:** 2025-07-23 00:01:06
**Content Length:** 1894 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Fact
Try It
DeteriorationEncounterFact
The deterioration encounter fact contains details about mortality outcomes and escalations in care for hospital encounter. Each row represents a hospital encounter. Change Type: Non-Snapshot
Columns
DeteriorationEncounterKey : bigint
Surrogate key used to uniquely identify the record
PatientDurableKey : bigint
Links to PatientDim
Patient associated with the hospital admission
EncounterKey : bigint
Links to EncounterFact
Encounter associated with the hospital admission
EncounterEpicCsn : numeric(18,0)
Epic contact serial number (CSN) of the encounter. This column identifies patient (EPT) contacts and is unique across all patient encounters in your system. If you use IntraConnect, this is the Unique Contact Identifier (UCI).
PrimaryLinkedEncounterKey : bigint
Links to EncounterFact
This contact's linked primary encounter. The primary encounter is the first encounter in a series of linked encounters where a new encounter starts within 6 hours of discharge from another encounter.
PrimaryLinkedEncounterEpicCsn : numeric(18,0)
The unique contact serial number for this contact's linked primary encounter. The primary encounter is the first encounter in a series of linked encounters where a new encounter starts within 6 hours of discharge from another encounter.
DischargeDateKey : bigint
Links to DateDim
Date the patient was discharged
DischargeInstant : datetime
Date and time the patient was discharged
DischargeDepartmentKey : bigint
Links to DepartmentDim
Department from which the patient was discharged
DeathInstant : datetime
The documented instant of death of the patient associated with the hospital admission
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## DiagnosisEventFact

**Extracted:** 2025-07-23 00:01:22
**Content Length:** 1894 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Fact
Try It
DeteriorationEncounterFact
The deterioration encounter fact contains details about mortality outcomes and escalations in care for hospital encounter. Each row represents a hospital encounter. Change Type: Non-Snapshot
Columns
DeteriorationEncounterKey : bigint
Surrogate key used to uniquely identify the record
PatientDurableKey : bigint
Links to PatientDim
Patient associated with the hospital admission
EncounterKey : bigint
Links to EncounterFact
Encounter associated with the hospital admission
EncounterEpicCsn : numeric(18,0)
Epic contact serial number (CSN) of the encounter. This column identifies patient (EPT) contacts and is unique across all patient encounters in your system. If you use IntraConnect, this is the Unique Contact Identifier (UCI).
PrimaryLinkedEncounterKey : bigint
Links to EncounterFact
This contact's linked primary encounter. The primary encounter is the first encounter in a series of linked encounters where a new encounter starts within 6 hours of discharge from another encounter.
PrimaryLinkedEncounterEpicCsn : numeric(18,0)
The unique contact serial number for this contact's linked primary encounter. The primary encounter is the first encounter in a series of linked encounters where a new encounter starts within 6 hours of discharge from another encounter.
DischargeDateKey : bigint
Links to DateDim
Date the patient was discharged
DischargeInstant : datetime
Date and time the patient was discharged
DischargeDepartmentKey : bigint
Links to DepartmentDim
Department from which the patient was discharged
DeathInstant : datetime
The documented instant of death of the patient associated with the hospital admission
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## DiagnosisDim

**Extracted:** 2025-07-23 00:01:38
**Content Length:** 1894 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Fact
Try It
DeteriorationEncounterFact
The deterioration encounter fact contains details about mortality outcomes and escalations in care for hospital encounter. Each row represents a hospital encounter. Change Type: Non-Snapshot
Columns
DeteriorationEncounterKey : bigint
Surrogate key used to uniquely identify the record
PatientDurableKey : bigint
Links to PatientDim
Patient associated with the hospital admission
EncounterKey : bigint
Links to EncounterFact
Encounter associated with the hospital admission
EncounterEpicCsn : numeric(18,0)
Epic contact serial number (CSN) of the encounter. This column identifies patient (EPT) contacts and is unique across all patient encounters in your system. If you use IntraConnect, this is the Unique Contact Identifier (UCI).
PrimaryLinkedEncounterKey : bigint
Links to EncounterFact
This contact's linked primary encounter. The primary encounter is the first encounter in a series of linked encounters where a new encounter starts within 6 hours of discharge from another encounter.
PrimaryLinkedEncounterEpicCsn : numeric(18,0)
The unique contact serial number for this contact's linked primary encounter. The primary encounter is the first encounter in a series of linked encounters where a new encounter starts within 6 hours of discharge from another encounter.
DischargeDateKey : bigint
Links to DateDim
Date the patient was discharged
DischargeInstant : datetime
Date and time the patient was discharged
DischargeDepartmentKey : bigint
Links to DepartmentDim
Department from which the patient was discharged
DeathInstant : datetime
The documented instant of death of the patient associated with the hospital admission
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## DiagnosisTerminologyConceptDim

**Extracted:** 2025-07-23 00:01:54
**Content Length:** 1894 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Fact
Try It
DeteriorationEncounterFact
The deterioration encounter fact contains details about mortality outcomes and escalations in care for hospital encounter. Each row represents a hospital encounter. Change Type: Non-Snapshot
Columns
DeteriorationEncounterKey : bigint
Surrogate key used to uniquely identify the record
PatientDurableKey : bigint
Links to PatientDim
Patient associated with the hospital admission
EncounterKey : bigint
Links to EncounterFact
Encounter associated with the hospital admission
EncounterEpicCsn : numeric(18,0)
Epic contact serial number (CSN) of the encounter. This column identifies patient (EPT) contacts and is unique across all patient encounters in your system. If you use IntraConnect, this is the Unique Contact Identifier (UCI).
PrimaryLinkedEncounterKey : bigint
Links to EncounterFact
This contact's linked primary encounter. The primary encounter is the first encounter in a series of linked encounters where a new encounter starts within 6 hours of discharge from another encounter.
PrimaryLinkedEncounterEpicCsn : numeric(18,0)
The unique contact serial number for this contact's linked primary encounter. The primary encounter is the first encounter in a series of linked encounters where a new encounter starts within 6 hours of discharge from another encounter.
DischargeDateKey : bigint
Links to DateDim
Date the patient was discharged
DischargeInstant : datetime
Date and time the patient was discharged
DischargeDepartmentKey : bigint
Links to DepartmentDim
Department from which the patient was discharged
DeathInstant : datetime
The documented instant of death of the patient associated with the hospital admission
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## DiagnosisTerminologyDim

**Extracted:** 2025-07-23 00:02:09
**Content Length:** 1894 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Fact
Try It
DeteriorationEncounterFact
The deterioration encounter fact contains details about mortality outcomes and escalations in care for hospital encounter. Each row represents a hospital encounter. Change Type: Non-Snapshot
Columns
DeteriorationEncounterKey : bigint
Surrogate key used to uniquely identify the record
PatientDurableKey : bigint
Links to PatientDim
Patient associated with the hospital admission
EncounterKey : bigint
Links to EncounterFact
Encounter associated with the hospital admission
EncounterEpicCsn : numeric(18,0)
Epic contact serial number (CSN) of the encounter. This column identifies patient (EPT) contacts and is unique across all patient encounters in your system. If you use IntraConnect, this is the Unique Contact Identifier (UCI).
PrimaryLinkedEncounterKey : bigint
Links to EncounterFact
This contact's linked primary encounter. The primary encounter is the first encounter in a series of linked encounters where a new encounter starts within 6 hours of discharge from another encounter.
PrimaryLinkedEncounterEpicCsn : numeric(18,0)
The unique contact serial number for this contact's linked primary encounter. The primary encounter is the first encounter in a series of linked encounters where a new encounter starts within 6 hours of discharge from another encounter.
DischargeDateKey : bigint
Links to DateDim
Date the patient was discharged
DischargeInstant : datetime
Date and time the patient was discharged
DischargeDepartmentKey : bigint
Links to DepartmentDim
Department from which the patient was discharged
DeathInstant : datetime
The documented instant of death of the patient associated with the hospital admission
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## DrgDim

**Extracted:** 2025-07-23 00:02:25
**Content Length:** 4375 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Fact
Try It
DiagnosisEventFact
The diagnosis event fact contains information about diagnoses attributed to patients. Each row represents an event attributing a diagnosis to a patient. For Epic data, the fact includes diagnosis information from the following places: encounter diagnoses, problem lists, medical histories, professional charge transaction diagnoses, final coded diagnoses, and external injury codes. It might include Health Maintenance modifiers that your organization maps to diagnoses. Professional charge diagnoses are included unless the transaction is voided. Final diagnoses and external injury codes are included when all of the following requirements are met: the coding is complete, the final diagnoses and external injury codes haven't been marked for exclusion from clinical reporting, and the hospital account hasn't been voided. Change Type: Non-Snapshot
Columns
DiagnosisEventKey : bigint
Surrogate key used to uniquely identify the record
DiagnosisKey : bigint
Links to DiagnosisDim
Diagnosis for the event
PatientKey : bigint
Links to PatientDim
Patient for the event
PatientDurableKey : bigint
Links to PatientDim
Patient for the event
EncounterKey : bigint
Links to EncounterFact
Encounter associated with the event
ExtSupplementalEncounterKey : bigint
Links to ExtSupplementalEncounterFact
External supplemental encounter associated with the event
DepartmentKey : bigint
Links to DepartmentDim
Department for the encounter associated with the event
StartDateKey : bigint
Links to DateDim
Start date of the event. For Epic data, the value is the date of encounter for encounter diagnoses, the service date for professional charge diagnoses, the admission date for final coded diagnoses and external injury codes, the date of entry for Health Maintenance modifiers, and the earliest possible starting date extracted from the free text date entered for diagnoses from the medical history. For diagnoses from problem lists, it is the noted date when available, otherwise the date of entry.
EndDateKey : bigint
Links to DateDim
End date of the event. For Epic data, the value is the discharge date for final coded diagnoses and external injury codes, and the resolved date or the deletion date for diagnoses from problem lists. This column is not applicable for encounter diagnoses, professional charge diagnoses, medical histories, and Health Maintenance modifiers.
DocumentedByEmployeeKey : bigint
Links to EmployeeDim
Employee who documented the diagnosis
DocumentedByEmployeeDurableKey : bigint
Links to EmployeeDim
Employee who documented the diagnosis
DocumentedByProviderKey : bigint
Links to ProviderDim
Provider who documented the diagnosis
DocumentedByProviderDurableKey : bigint
Links to ProviderDim
Provider who documented the diagnosis
SourceComboKey : bigint
Links to DiagnosisEventSourceBridge
Type : nvarchar(350)
Type of the diagnosis
Status : nvarchar(300)
Status of the diagnosis. For Epic data, this column can contain Active, Deleted, or Resolved statuses.
PresentOnAdmission : nvarchar(300)
Indicates the present on admission status for the diagnosis
HospitalDiagnosis : tinyint
1/0 column that indicates whether the diagnosis is a hospital diagnosis. This column returns 1 if the diagnosis is a hospital diagnosis and 0 if the diagnosis isn't a hospital diagnosis.
EmergencyDepartmentDiagnosis : tinyint
1/0 column that indicates whether the diagnosis is an emergency department diagnosis. This column returns 1 if the diagnosis is an emergency department diagnosis and 0 if the diagnosis isn't an emergency department diagnosis.
Chronic : tinyint
1/0 column that indicates whether the diagnosis is chronic. This column returns 1 if the diagnosis is chronic and 0 if the diagnosis isn't chronic.
IsFromSourceAccount : tinyint
1/0 column that indicates whether the diagnosis is from a source hospital account. This column returns 1 if the diagnosis is from a source account and 0 if the diagnosis is from a target account or was never combined.
IsPrimary : tinyint
1/0 column that indicates whether the diagnosis is the primary diagnosis of the given type (encounter diagnosis, hospital problem, etc.)
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## DrgEventFact

**Extracted:** 2025-07-23 00:02:41
**Content Length:** 1454 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Dim
Try It
DrgDim
The Diagnosis Related Group (DRG) dimension contains information about DRGs. Each row represents a DRG. Change Type: Non-Snapshot
Columns
DrgKey : bigint
Surrogate key used to uniquely identify the record
DrgEpicId : nvarchar(50)
Epic ID of the diagnosis related group. This column identifies diagnosis related group (DRG) records.
Name : nvarchar(150)
Name of the Diagnosis Related Group (DRG)
Type : nvarchar(200)
System name and version associated with the Diagnosis Related Group (DRG)
Code : nvarchar(50)
Diagnosis Related Group (DRG) code
MajorDiagnosticCategoryCode : nvarchar(50)
The recognized code for the major diagnostic category for the Diagnosis Related Group (DRG)
MajorDiagnosticCategory : nvarchar(300)
The major diagnostic category for the Diagnosis Related Group (DRG)
CaseType : nvarchar(300)
The type of case the Diagnosis Related Group (DRG) represents, such as surgical or medical
GroupingFamily : nvarchar(300)
The name of the higher level family the Diagnosis Related Group (DRG) belongs to. For Epic data, this is only populated for MS-DRGs.
DrgCodeSet : nvarchar(300)
The code set associated with the DRG.
DrgComplicationType : nvarchar(300)
Indicates whether the DRG has a CC (complication and comorbidity) or MCC (major complication and comorbidity) associated with it.
Version : nvarchar(50)
DRG code version
```

---

## EdVisitFact

**Extracted:** 2025-07-23 00:02:57
**Content Length:** 2345 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Fact
Try It
DrgEventFact
The Diagnosis Related Group (DRG) event fact contains information about DRGs attributed to patients. Each row represents an event attributing a DRG to a patient. Change Type: Non-Snapshot
Columns
DrgEventKey : bigint
Surrogate key used to uniquely identify the record
DrgKey : bigint
Links to DrgDim
Diagnosis Related Group (DRG) for the event
PatientKey : bigint
Links to PatientDim
Patient for the event
EncounterKey : bigint
Links to EncounterFact
Encounter associated with the event
BillingAccountKey : bigint
Links to BillingAccountFact
Billing account associated with the event
AdmissionDateKey : bigint
Links to DateDim
Admission date for the event
DischargeDateKey : bigint
Links to DateDim
Discharge date for the event
EventType : nvarchar(300)
Type of event that caused the patient to be associated with the Diagnosis Related Group (DRG). For Epic data, this column can contain Billing Account DRG, Outgoing Claim DRG, or External Claim DRG.
DrgType : nvarchar(300)
Type of Diagnosis Related Group (DRG), such as MS or TRICARE
DrgCode : nvarchar(50)
Diagnosis Related Group (DRG) code
SeverityOfIllness : nvarchar(300)
Severity of illness associated with the event
RiskOfMortality : nvarchar(300)
Risk of mortality associated with the event
Qualifier : nvarchar(300)
Qualifier associated with the Diagnosis Related Group (DRG) for the event
DrgLine : int
For accounts coded within Epic, the line number from the Hospital Coding activity of the Diagnosis Related Group (DRG) associated with this event.
Weight : numeric(18,4)
Weight of the Diagnosis Related Group (DRG)
ArithmeticMeanLengthOfStayInDays : numeric(18,4)
Arithmetic mean length of stay in days for the Diagnosis Related Group (DRG)
GeometricMeanLengthOfStayInDays : numeric(18,4)
Geometric mean length of stay in days for the Diagnosis Related Group (DRG)
IsBillingDrg : tinyint
1/0 column that indicates whether the Diagnosis Related Group (DRG) associated with this event is used as the primary billing DRG. This column returns 1 if the DRG is the primary billing DRG and 0 otherwise.
ExpectedReimbursement : numeric(18,2)
The expected reimbursement associated with the DRG. If no value is recorded in the system, this amount is converted to zero.
```

---

## EmployeeAuthorizedDepartmentBridge

**Extracted:** 2025-07-23 00:03:24
**Content Length:** 37866 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class G Fact
Try It
EdVisitFact
The emergency department visit fact contains information about emergency department visits. Each row represents an emergency department visit. Change Type: Non-Snapshot
Columns
EdVisitKey : bigint
Surrogate key used to uniquely identify the record
PatientKey : bigint
Links to PatientDim
Patient associated with the emergency department visit
PatientDurableKey : bigint
Links to PatientDim
Patient associated with the emergency department visit
HospitalAdmissionKey : bigint
Links to HospitalAdmissionFact
Hospital admission associated with the emergency department visit. For Epic data, this supports discharge - admission workflows where the patient is admitted within sixty minutes of departure from the emergency department.
EncounterKey : bigint
Links to EncounterFact
Encounter associated with the emergency department visit
AdmissionDecisionDateKey : bigint
Links to DateDim
Date when the admission decision was made
AdmissionDecisionTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the admission decision was made
ArrivalDateKey : bigint
Links to DateDim
Date when the patient arrived to the emergency department
ArrivalTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the patient arrived to the emergency department
AvsPrintDateKey : bigint
Links to DateDim
Date when the after visit summary (AVS) was printed
PreviousEdVisitKey : bigint
Links to EdVisitFact
Most recent ED visit prior to this visit for the patient
NextEdVisitKey : bigint
Links to EdVisitFact
First subsequent ED visit for the patient
FirstAttendingAssignedKey : bigint
Links to ProviderDim
The first attending provider assigned for the emergency department visit
FirstAttendingAssignedDurableKey : bigint
Links to ProviderDim
The first attending provider assigned for the emergency department visit
LastAttendingAssignedKey : bigint
Links to ProviderDim
The last attending provider assigned for the emergency department visit
LastAttendingAssignedDurableKey : bigint
Links to ProviderDim
The last attending provider assigned for the emergency department visit
LongestAttendingAssignedKey : bigint
Links to ProviderDim
The attending provider assigned to the treatment team for the longest duration during the emergency department visit
LongestAttendingAssignedDurableKey : bigint
Links to ProviderDim
The attending provider assigned to the treatment team for the longest duration during the emergency department visit
NoteSigningProviderKey : bigint
Links to ProviderDim
The provider that last signed the note for the emergency department visit
NoteSigningProviderDurableKey : bigint
Links to ProviderDim
The provider that last signed the note for the emergency department visit
FirstMidLevelProviderAssignedKey : bigint
Links to ProviderDim
The first advanced practice (midlevel) provider assigned for the emergency department visit
FirstMidLevelProviderAssignedDurableKey : bigint
Links to ProviderDim
The first advanced practice (midlevel) provider assigned for the emergency department visit
LastMidlevelProviderAssignedKey : bigint
Links to ProviderDim
The last advanced practice (midlevel) provider assigned for the emergency department visit
LastMidlevelProviderAssignedDurableKey : bigint
Links to ProviderDim
The last advanced practice (midlevel) provider assigned for the emergency department visit
LongestMidLevelProviderAssignedKey : bigint
Links to ProviderDim
The advanced practice (midlevel) provider assigned to the treatment team for the longest duration during the emergency department visit
LongestMidLevelProviderAssignedDurableKey : bigint
Links to ProviderDim
The advanced practice (midlevel) provider assigned to the treatment team for the longest duration during the emergency department visit
FirstResidentAssignedKey : bigint
Links to ProviderDim
The first resident assigned for the emergency department visit
FirstResidentAssignedDurableKey : bigint
Links to ProviderDim
The first resident assigned for the emergency department visit
LastResidentAssignedKey : bigint
Links to ProviderDim
The last resident assigned for the emergency department visit
LastResidentAssignedDurableKey : bigint
Links to ProviderDim
The last resident assigned for the emergency department visit
LongestResidentAssignedKey : bigint
Links to ProviderDim
The resident assigned to the treatment team for the longest duration during the emergency department visit
LongestResidentAssignedDurableKey : bigint
Links to ProviderDim
The resident assigned to the treatment team for the longest duration during the emergency department visit
FirstNurseAssignedKey : bigint
Links to ProviderDim
The first registered nurse assigned for the emergency department visit
FirstNurseAssignedDurableKey : bigint
Links to ProviderDim
The first registered nurse assigned for the emergency department visit
LastNurseAssignedKey : bigint
Links to ProviderDim
The last registered nurse assigned for the emergency department visit
LastNurseAssignedDurableKey : bigint
Links to ProviderDim
The last registered nurse assigned for the emergency department visit
LongestNurseAssignedKey : bigint
Links to ProviderDim
The registered nurse assigned to the treatment team for the longest duration during the emergency department visit
LongestNurseAssignedDurableKey : bigint
Links to ProviderDim
The registered nurse assigned to the treatment team for the longest duration during the emergency department visit
AvsPrintTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the after visit summary (AVS) was printed
BedRequestDateKey : bigint
Links to DateDim
Date when a non-emergency department bed request was first placed for the emergency department visit. For Epic data, this column won't necessarily be populated if your organization uses discharge - admission workflows.
BedRequestTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when a non-emergency department bed request was first placed for the emergency department visit. For Epic data, this column won't necessarily be populated if your organization uses discharge - admission workflows.
BedAssignedDateKey : bigint
Links to DateDim
Date when a non-emergency department bed was first assigned for the emergency department visit. For Epic data, this column won't necessarily be populated if your organization uses discharge - admission workflows.
BedAssignedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when a non-emergency department bed was first assigned for the emergency department visit. For Epic data, this column won't necessarily be populated if your organization uses discharge - admission workflows.
BoardingHoursStartDateKey : bigint
Links to DateDim
Date when the patient was first considered a boarder
BoardingHoursStartTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the patient was first considered a boarder
BoardingHoursEndDateKey : bigint
Links to DateDim
Date when the patient was no longer considered a boarder
BoardingHoursEndTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the patient was no longer considered a boarder
DepartureDateKey : bigint
Links to DateDim
Date when the patient departed the emergency department. For Epic data, this can be the date the patient was discharged, dismissed, or transferred up to the floor.
DepartureTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the patient departed the emergency department. For Epic data, this can be the time the patient was discharged, dismissed, or transferred up to the floor.
DepartureUTCDateKey : bigint
Links to DateDim
UTC date when the patient departed the emergency department. For Epic data, this can be the instant the patient was discharged, dismissed, or transferred up to the floor.
DepartureUTCTimeOfDayKey : bigint
Links to TimeOfDayDim
UTC time of day when the patient departed the emergency department. For Epic data, this can be the instant the patient was discharged, dismissed, or transferred up to the floor.
DispositionDateKey : bigint
Links to DateDim
Date when the patient's disposition was recorded
DispositionTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the patient's disposition was recorded
FirstArrivalOutsideEdDateKey : bigint
Links to DateDim
Date when the patient first arrived to a non-emergency department after leaving the emergency department
FirstArrivalOutsideEdTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the patient first arrived to a non-emergency department after leaving the emergency department
FirstResidentAssignedDateKey : bigint
Links to DateDim
Date when the first resident was assigned to the emergency department visit
FirstResidentAssignedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the first resident was assigned to the emergency department visit
FirstAttendingAssignedDateKey : bigint
Links to DateDim
Date when the first attending provider was assigned to the emergency department visit
FirstAttendingAssignedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the first attending provider was assigned to the emergency department visit
FirstEdRegisteredNurseAssignedDateKey : bigint
Links to DateDim
Date when the first registered nurse was assigned to the emergency department visit
FirstEdRegisteredNurseAssignedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the first registered nurse was assigned to the emergency department visit
FirstProviderContactDateKey : bigint
Links to DateDim
Date when a provider first made contact with the patient associated with the emergency department visit
FirstProviderContactTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when a provider first made contact with the patient associated with the emergency department visit
FirstEkgOrderedDateKey : bigint
Links to DateDim
Earliest date that an EKG was ordered
FirstEkgOrderedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the first EKG was ordered
FirstEkgCompletedDateKey : bigint
Links to DateDim
Earliest date that an EKG was completed for the emergency department visit. For Epic data, this is the date when the order was completed.
FirstEkgCompletedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the first EKG was completed for the emergency department visit. For Epic data, this is the time when the order was completed.
FirstEkgInterpretedDateKey : bigint
Links to DateDim
Earliest date that an EKG was interpreted for the emergency department visit.
FirstEkgInterpretedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the first EKG was interpreted for the emergency department visit. For Epic data, this is the time the final read was performed by the radiologist.
FirstCtOrderedDateKey : bigint
Links to DateDim
Earliest date that a CT was ordered
FirstCtOrderedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the first CT was ordered
FirstCtStartedDateKey : bigint
Links to DateDim
Earliest date that a CT was started
FirstCtStartedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the first CT was started
FirstCtCompletedDateKey : bigint
Links to DateDim
Earliest date that a CT was completed for the emergency department visit
FirstCtCompletedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the first CT was completed for the emergency department visit
FirstCtInterpretedDateKey : bigint
Links to DateDim
Earliest date that a CT was interpreted for the emergency department visit
FirstCtInterpretedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the first CT was interpreted for the emergency department visit
FirstUltrasoundOrderedDateKey : bigint
Links to DateDim
Earliest date that an Ultrasound was ordered
FirstUltrasoundOrderedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the first Ultrasound was ordered
FirstUltrasoundStartedDateKey : bigint
Links to DateDim
Earliest date that an Ultrasound was started
FirstUltrasoundStartedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the first Ultrasound was started
FirstUltrasoundCompletedDateKey : bigint
Links to DateDim
Earliest date that an Ultrasound was completed
FirstUltrasoundCompletedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the first Ultrasound was completed
FirstUltrasoundInterpretedDateKey : bigint
Links to DateDim
Earliest date that an Ultrasound was interpreted
FirstUltrasoundInterpretedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the first Ultrasound was interpreted
FirstXrayOrderedDateKey : bigint
Links to DateDim
Earliest date that an X-ray was ordered
FirstXrayOrderedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the first X-ray was ordered
FirstXrayStartedDateKey : bigint
Links to DateDim
Earliest date that an X-ray was started
FirstXrayStartedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the first X-ray was started
FirstXrayCompletedDateKey : bigint
Links to DateDim
Earliest date that an X-ray was completed
FirstXrayCompletedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the first X-ray was completed
FirstXrayInterpretedDateKey : bigint
Links to DateDim
Earliest date that an X-ray was interpreted
FirstXrayInterpretedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the first X-ray was interpreted
FirstCbcOrderedDateKey : bigint
Links to DateDim
Earliest date that a CBC was ordered
FirstCbcOrderedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the first CBC was ordered
FirstCbcCollectedDateKey : bigint
Links to DateDim
Earliest date that a CBC specimen was collected
FirstCbcCollectedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the first CBC specimen was collected
FirstCbcReceivedDateKey : bigint
Links to DateDim
Earliest date that a CBC specimen was received
FirstCbcReceivedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the first CBC specimen was received
FirstCbcResultedDateKey : bigint
Links to DateDim
Earliest date that a CBC was resulted
FirstCbcResultedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the first CBC was resulted
FirstTroponinOrderedDateKey : bigint
Links to DateDim
Earliest date that a Troponin was ordered
FirstTroponinOrderedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the first Troponin was ordered
FirstTroponinCollectedDateKey : bigint
Links to DateDim
Earliest date that a Troponin specimen was collected
FirstTroponinCollectedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the first Troponin specimen was collected
FirstTroponinReceivedDateKey : bigint
Links to DateDim
Earliest date that a Troponin specimen was received
FirstTroponinReceivedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the first Troponin specimen was received
FirstTroponinResultedDateKey : bigint
Links to DateDim
Earliest date that a Troponin was resulted
FirstTroponinResultedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the first Troponin was resulted
FirstMetabolicPanelOrderedDateKey : bigint
Links to DateDim
Earliest date that a Metabolic Panel was ordered
FirstMetabolicPanelOrderedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the first Metabolic Panel was ordered
FirstMetabolicPanelCollectedDateKey : bigint
Links to DateDim
Earliest date that a Metabolic Panel specimen was collected
FirstMetabolicPanelCollectedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the first Metabolic Panel specimen was collected
FirstMetabolicPanelReceivedDateKey : bigint
Links to DateDim
Earliest date that a Metabolic Panel specimen was received
FirstMetabolicPanelReceivedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the first Metabolic Panel specimen was received
FirstMetabolicPanelResultedDateKey : bigint
Links to DateDim
Earliest date that a Metabolic Panel was resulted
FirstMetabolicPanelResultedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the first Metabolic Panel was resulted
FirstUrinalysisOrderedDateKey : bigint
Links to DateDim
Earliest date that a Urinalysis was ordered
FirstUrinalysisOrderedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the first Urinalysis was ordered
FirstUrinalysisCollectedDateKey : bigint
Links to DateDim
Earliest date that a Urinalysis specimen was collected
FirstUrinalysisCollectedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the first Urinalysis specimen was collected
FirstUrinalysisReceivedDateKey : bigint
Links to DateDim
Earliest date that a Urinalysis specimen was received
FirstUrinalysisReceivedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the first Urinalysis specimen was received
FirstUrinalysisResultedDateKey : bigint
Links to DateDim
Earliest date that a Urinalysis was resulted
FirstUrinalysisResultedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the first Urinalysis was resulted
FirstArterialInflationDateKey : bigint
Links to DateDim
Date when a guidewire first crossed the patient's heart lesion in the treatment of STEMI
FirstArterialInflationTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when a guidewire first crossed the patient's heart lesion in the treatment of STEMI
FirstThrombolyticTreatmentDateKey : bigint
Links to DateDim
Date when the first thrombolytic treatment was administered for the emergency department visit
FirstThrombolyticTreatmentTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the first thrombolytic treatment was administered for the emergency department visit
FirstPainMedicationAdministrationDateKey : bigint
Links to DateDim
Date when pain medications were first administered for the emergency department visit
FirstPainMedicationAdministrationTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when pain medications were first administered for the emergency department visit
FirstTraumaStartDateKey : bigint
Links to DateDim
Date when the first trauma activation started for the patient
FirstTraumaStartTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the first trauma activation started for the patient
FirstTraumaEndDateKey : bigint
Links to DateDim
Date when the first trauma activation ended for the patient
FirstTraumaEndTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the first trauma activation ended for the patient
FirstSedationStartDateKey : bigint
Links to DateDim
Date when the patient was first sedated
FirstSedationStartTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the patient was first sedated
FirstSedationEndDateKey : bigint
Links to DateDim
Date when the patient was first removed from sedation
FirstSedationEndTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the patient was first removed from sedation
FirstCodeStartDateKey : bigint
Links to DateDim
Date when the patient was first non-responsive
FirstCodeStartTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the patient was first non-responsive
FirstCodeEndDateKey : bigint
Links to DateDim
Date when the patient was first responsive again
FirstCodeEndTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the patient was first responsive again
AllergiesReviewedDateKey : bigint
Links to DateDim
Date at which the allergies were reviewed for this visit
AllergiesReviewedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day at which the allergies were reviewed for this visit
MedicationListReviewedDateKey : bigint
Links to DateDim
Date at which the medication list was reviewed for this visit
MedicationListReviewedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the medication list was reviewed for this visit
NonEdPatientClassDateKey : bigint
Links to DateDim
Date when the patient was no longer considered an emergency department patient. For Epic data, this is the date the patient first received a base class of inpatient or outpatient.
NonEdPatientClassTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the patient was no longer considered an emergency department patient. For Epic data, this is the time the patient first received a base class of inpatient or outpatient.
NoteFileDateKey : bigint
Links to DateDim
Date when the note associated with the emergency department visit was first signed
NoteFileTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the note associated with the emergency department visit was first signed
ObservationStartedDateKey : bigint
Links to DateDim
Date when the patient was first moved into observation
ObservationStartedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the patient was first moved into observation
RegistrationCompleteDateKey : bigint
Links to DateDim
Date when registration for the emergency department visit was first completed
RegistrationCompleteTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when registration for the emergency department visit was first completed
RoomedDateKey : bigint
Links to DateDim
Date when the patient was roomed
RoomedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the patient was roomed
TriageStartDateKey : bigint
Links to DateDim
Date when triage first started for the emergency department visit
TriageStartTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when triage was first started for the emergency department visit
TriageCompleteDateKey : bigint
Links to DateDim
Date when triage was first completed for the emergency department visit
TriageCompleteTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when triage was first completed for the emergency department visit
EdDepartmentKey : bigint
Links to DepartmentDim
Department associated with the emergency department visit
PrimaryCareAreaKey : bigint
Links to CareAreaDim
Warning: You should not use this column for reporting moving forward. Instead, used EdVisitPrimaryCareAreaKey. Primary care area associated with the emergency department visit
FirstNonEdDepartmentKey : bigint
Links to DepartmentDim
First non-emergency department the patient was in after leaving the emergency department
AdmissionDepartmentKey : bigint
Links to DepartmentDim
Department to which the patient was admitted. For Epic data, this is the first department the patient was in after receiving a base class of inpatient.
PrimaryEdDiagnosisKey : bigint
Links to DiagnosisDim
Primary emergency department diagnosis for the emergency department visit
PrimaryChiefComplaintKey : bigint
Links to ChiefComplaintDim
Primary chief complaint for the emergency department visit
ChiefComplaintComboKey : bigint
Links to ChiefComplaintBridge
All chief complaints for the emergency department visit
EdDiagnosisComboKey : bigint
Links to DiagnosisBridge
All emergency department diagnoses for the emergency department visit
LevelOfServiceAuthorizingProviderKey : bigint
Links to ProviderDim
Provider who authorized the level of service associated with the emergency department visit
LevelOfServiceAuthorizingProviderDurableKey : bigint
Links to ProviderDim
Provider who authorized the level of service associated with the emergency department visit
TriageEmployeeKey : bigint
Links to EmployeeDim
Employee who triaged the patient
TriageEmployeeDurableKey : bigint
Links to EmployeeDim
Employee who triaged the patient
CaseManagerKey : bigint
Links to ProviderDim
Case manager assigned to the treatment team
CaseManagerDurableKey : bigint
Links to ProviderDim
Case manager assigned to the treatment team
AllergiesReviewedUserKey : bigint
Links to EmployeeDim
User who reviewed the allergies for this visit
AllergiesReviewedUserDurableKey : bigint
Links to EmployeeDim
User who reviewed the allergies for this visit
MedicationListReviewedUserKey : bigint
Links to EmployeeDim
User who reviewed the medication list for this visit
MedicationListReviewedUserDurableKey : bigint
Links to EmployeeDim
User who reviewed the medication list for this visit
GuarantorKey : bigint
Links to GuarantorDim
Guarantor associated with the emergency department visit
GuarantorDurableKey : bigint
Links to GuarantorDim
Guarantor associated with the emergency department visit
CoverageKey : bigint
Links to CoverageDim
Coverage for the emergency department visit
ArrivalMethod : nvarchar(300)
Method by which the patient arrived to the emergency department
EdDisposition : nvarchar(300)
The last ED Disposition set for the patient's visit
DischargeDisposition : nvarchar(300)
Disposition of the patient when discharged from the hospital
AcuityLevel : nvarchar(300)
Acuity level of the patient
LevelOfCare : nvarchar(300)
Level of care associated with the patient
FinancialClass : nvarchar(300)
Financial class for the emergency department visit. For Epic data, this column is the financial class of the associated hospital account and can contain Commercial, Medicare, Worker's Comp, or other values.
EncounterEpicCsn : numeric(18,0)
Epic contact serial number (CSN) for the emergency department visit. This column identifies patient (EPT) contacts.
HospitalAccountEpicId : numeric(18,0)
Epic ID of the hospital account associated with the emergency department visit. This column identifies account (HAR) records.
PrimaryProfessionalAccountEpicId : numeric(18,0)
Epic ID of the primary professional account associated with the emergency department visit. This column identifies account (HAR) records.
AdmissionDecisionInstant : datetime
Date and time when the admission decision was made
ArrivalInstant : datetime
Date and time when the patient arrived to the emergency department
AvsPrintInstant : datetime
Date and time when the after visit summary (AVS) was printed
BedRequestInstant : datetime
Date and time when a non-emergency department bed request was first placed for the emergency department visit. For Epic data, this column won't necessarily be populated if your organization uses discharge - admission workflows.
BedAssignedInstant : datetime
Date and time when a non-emergency department bed was first assigned for the emergency department visit. For Epic data, this column won't necessarily be populated if your organization uses discharge - admission workflows.
BoardingHoursStartInstant : datetime
Date and time when the patient was first considered a boarder
BoardingHoursEndInstant : datetime
Date and time when the patient was no longer considered a boarder
DepartureInstant : datetime
Date and time when the patient departed the emergency department. For Epic data, this can be the instant the patient was discharged, dismissed, or transferred up to the floor.
DepartureUTCInstant : datetime
UTC Date and time when the patient departed the emergency department. For Epic data, this can be the instant the patient was discharged, dismissed, or transferred up to the floor.
DispositionInstant : datetime
Date and time when the patient's disposition was recorded
FirstArrivalOutsideEdInstant : datetime
Date and time when the patient first arrived to a non-emergency department after leaving the emergency department
FirstResidentAssignedInstant : datetime
Date and time when the first resident was assigned to the emergency department visit
FirstAttendingAssignedInstant : datetime
Date and time when the first attending provider was assigned to the emergency department visit
FirstEdRegisteredNurseAssignedInstant : datetime
Date and time when the first registered nurse was assigned to the emergency department visit
FirstProviderContactInstant : datetime
Date and time when a provider first made contact with the patient associated with the emergency department visit
FirstEkgOrderedInstant : datetime
Earliest date and time that an EKG was ordered
FirstEkgCompletedInstant : datetime
Earliest date and time that an EKG was completed for the emergency department visit. For Epic data, this is the instant when the order was completed.
FirstEkgInterpretedInstant : datetime
Earliest date and time that an EKG was interpreted for the emergency department visit. For Epic data, this is the instant the final read was performed by the radiologist.
FirstCtOrderedInstant : datetime
Earliest date and time that a CT was ordered
FirstCtStartedInstant : datetime
Earliest date and time that a CT was started
FirstCtCompletedInstant : datetime
Earliest date and time that a CT was completed
FirstCtInterpretedInstant : datetime
Earliest date and time that a CT was interpreted
FirstUltrasoundOrderedInstant : datetime
Earliest date and time that an Ultrasound was ordered
FirstUltrasoundStartedInstant : datetime
Earliest date and time that an Ultrasound was started
FirstUltrasoundCompletedInstant : datetime
Earliest date and time that an Ultrasound was completed
FirstUltrasoundInterpretedInstant : datetime
Earliest date and time that an Ultrasound was interpreted
FirstXrayOrderedInstant : datetime
Earliest date and time that an X-ray was ordered
FirstXrayStartedInstant : datetime
Earliest date and time that an X-ray was started
FirstXrayCompletedInstant : datetime
Earliest date and time that an X-ray was completed
FirstXrayInterpretedInstant : datetime
Earliest date and time that an X-ray was interpreted
FirstCbcOrderedInstant : datetime
Earliest date and time that a CBC was ordered
FirstCbcCollectedInstant : datetime
Earliest date and time that a CBC specimen was collected
FirstCbcReceivedInstant : datetime
Earliest date and time that a CBC specimen was received
FirstCbcResultedInstant : datetime
Earliest date and time that a CBC was resulted
FirstTroponinOrderedInstant : datetime
Earliest date and time that a Troponin was ordered
FirstTroponinCollectedInstant : datetime
Earliest date and time that a Troponin specimen was collected
FirstTroponinReceivedInstant : datetime
Earliest date and time that a Troponin specimen was received
FirstTroponinResultedInstant : datetime
Earliest date and time that a Troponin was resulted
FirstMetabolicPanelOrderedInstant : datetime
Earliest date and time that a Metabolic Panel was ordered
FirstMetabolicPanelCollectedInstant : datetime
Earliest date and time that a Metabolic Panel specimen was collected
FirstMetabolicPanelReceivedInstant : datetime
Earliest date and time that a Metabolic Panel specimen was received
FirstMetabolicPanelResultedInstant : datetime
Earliest date and time that a Metabolic Panel was resulted
FirstUrinalysisOrderedInstant : datetime
Earliest date and time that a Urinalysis was ordered
FirstUrinalysisCollectedInstant : datetime
Earliest date and time that a Urinalysis specimen was collected
FirstUrinalysisReceivedInstant : datetime
Earliest date and time that a Urinalysis specimen was received
FirstUrinalysisResultedInstant : datetime
Earliest date and time that a Urinalysis was resulted
FirstArterialInflationInstant : datetime
Date and time when a guidewire first crossed the patient's lesion in the treatment of STEMI
FirstThrombolyticTreatmentInstant : datetime
Date and time when the first thrombolytic treatment was administered for the emergency department visit
FirstPainMedicationAdministrationInstant : datetime
Date and time when pain medications were first administered for the emergency department visit
FirstTraumaStartInstant : datetime
Date and time when the first trauma activation started for the patient
FirstTraumaEndInstant : datetime
Date and time when the first trauma activation ended for the patient
FirstSedationStartInstant : datetime
Date and time when the patient was first sedated
FirstSedationEndInstant : datetime
Date and time when the patient was first removed from sedation
FirstCodeStartInstant : datetime
Date and time when the patient was first non-responsive
FirstCodeEndInstant : datetime
Date and time when the patient was first responsive again
NonEdPatientClassInstant : datetime
Date and time when the patient was no longer considered an emergency department patient. For Epic data, this is the instant the patient first received a base class of inpatient or outpatient.
NoteFileInstant : datetime
Date and time when the note associated with the emergency department visit was first signed
ObservationStartedInstant : datetime
Date and time when the patient was first moved into observation
RegistrationCompleteInstant : datetime
Date and time when registration for the emergency department visit was completed
RoomedInstant : datetime
Date and time when the patient was roomed
TriageStartInstant : datetime
Date and time when triage started for the emergency department visit
TriageCompleteInstant : datetime
Date and time when triage completed for the emergency department visit
AllergiesReviewedInstant : datetime
Date and time when the patient's allergies were reviewed for the emergency department visit
MedicationListReviewedInstant : datetime
Date and time when the patient's medication list was reviewed for the emergency department visit
TotalCost : numeric(18,2)
Total cost associated with the emergency department visit
DirectCost : numeric(18,2)
Direct cost associated with the emergency department visit
IndirectCost : numeric(18,2)
Indirect cost associated with the emergency department visit
FixedCost : numeric(18,2)
Fixed cost associated with the emergency department visit
VariableCost : numeric(18,2)
Variable cost associated with the emergency department visit
DirectFixedCost : numeric(18,2)
Direct fixed cost associated with the emergency department visit
DirectVariableCost : numeric(18,2)
Direct variable cost associated with the emergency department visit
IndirectFixedCost : numeric(18,2)
Indirect fixed cost associated with the emergency department visit
IndirectVariableCost : numeric(18,2)
Indirect variable cost associated with the emergency department visit
LaborDirectCost : numeric(18,2)
Direct labor cost associated with the emergency department visit
LaborDirectFixedCost : numeric(18,2)
Direct fixed labor cost associated with the emergency department visit
LaborDirectVariableCost : numeric(18,2)
Direct variable labor cost associated with the emergency department visit
SuppliesCost : numeric(18,2)
Supplies cost associated with the emergency department visit
OtherDirectCost : numeric(18,2)
Direct other cost associated with the emergency department visit
OtherDirectFixedCost : numeric(18,2)
Direct fixed other cost associated with the emergency department visit
OtherDirectVariableCost : numeric(18,2)
Direct variable other cost associated with the emergency department visit
UnderObservation : tinyint
1/0 column that indicates whether the patient was under observation during the emergency department visit. This column returns 1 if the patient was under observation during the emergency department visit and 0 if the patient was not under observation during the emergency department visit.
LeftWithoutBeingSeen : tinyint
1/0 column that indicates whether the patient left without being seen. This column returns 1 if the patient left without being seen and 0 if the patient was seen.
LeftAgainstMedicalAdvice : tinyint
1/0 column that indicates whether the patient left against medical advice. This column returns 1 if the patient left against medical advice and 0 if the patient was cleared to leave.
BehavioralHealth : tinyint
1/0 column that indicates whether the patient was on a psychiatric track. This column returns 1 if the patient was on a psychiatric track and 0 if the patient was not on a psychiatric track.
BehavioralRestraintsUsed : tinyint
1/0 column that indicates whether behavioral restraints were used during the emergency department visit. This column returns 1 if behavioral restraints were used and 0 if behavioral restraints were not used.
NonBehavioralRestraintsUsed : tinyint
1/0 column that indicates whether non-behavioral restraints were used during the emergency department visit. This column returns 1 if non-behavioral restraints were used and 0 if non-behavioral restraints were not used.
UsedCheckInKiosk : tinyint
1/0 value to indicate if the check in kiosk was used. This column returns 1 if the check in kiosk was used and 0 if the check in kiosk was not used.
FacilityCriticalCareLevelOfService : tinyint
1/0 column that indicates whether there is a facility critical care charge generated for the emergency department visit. This column returns 1 if a facility critical care charge exists and 0 if no facility critical care charge exists.
ProfessionalCriticalCareLevelOfService : tinyint
1/0 column that indicates whether there is a professional critical care charge generated for the emergency department visit. This column returns 1 if a professional critical care charge exists and 0 if no professional critical care charge exists.
PresentedWithOpioidOverdose : tinyint
1/0 column that will be set to 1 if the patient had any ED diagnoses indicating an opioid overdose, regardless of whether that patient expired in the hospital setting.
AdmissionProviderKey : bigint
Links to ProviderDim
The provider responsible for admitting the patient
AdmissionProviderDurableKey : bigint
Links to ProviderDim
The provider responsible for admitting the patient
DispositionProviderDurableKey : bigint
Links to ProviderDim
The provider that was responsible for the disposition documentation on this ED visit
SelfArrivalAllowed : tinyint
1/0 column that indicates whether this visit supports self-arrival. This column returns 1 if some type of self-arrival is supported, and 0 if not.
SelfArrivalType : nvarchar(300)
Indicates what type(s) of self-arrival, if any, this visit supports
EdEncounterSource : nvarchar(300)
Indicates how the ED encounter was created
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
ArrivalUTCInstant : datetime
UTC Date and time when the patient arrived to the emergency department
ArrivalUTCDateKey : bigint
Links to DateDim
UTC Date when the patient arrived to the emergency department
ArrivalUTCTimeOfDayKey : bigint
Links to TimeOfDayDim
UTC time when the patient arrived to the emergency department
```

---

## EmployeeAuthorizedLocationBridge

**Extracted:** 2025-07-23 00:03:45
**Content Length:** 37866 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class G Fact
Try It
EdVisitFact
The emergency department visit fact contains information about emergency department visits. Each row represents an emergency department visit. Change Type: Non-Snapshot
Columns
EdVisitKey : bigint
Surrogate key used to uniquely identify the record
PatientKey : bigint
Links to PatientDim
Patient associated with the emergency department visit
PatientDurableKey : bigint
Links to PatientDim
Patient associated with the emergency department visit
HospitalAdmissionKey : bigint
Links to HospitalAdmissionFact
Hospital admission associated with the emergency department visit. For Epic data, this supports discharge - admission workflows where the patient is admitted within sixty minutes of departure from the emergency department.
EncounterKey : bigint
Links to EncounterFact
Encounter associated with the emergency department visit
AdmissionDecisionDateKey : bigint
Links to DateDim
Date when the admission decision was made
AdmissionDecisionTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the admission decision was made
ArrivalDateKey : bigint
Links to DateDim
Date when the patient arrived to the emergency department
ArrivalTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the patient arrived to the emergency department
AvsPrintDateKey : bigint
Links to DateDim
Date when the after visit summary (AVS) was printed
PreviousEdVisitKey : bigint
Links to EdVisitFact
Most recent ED visit prior to this visit for the patient
NextEdVisitKey : bigint
Links to EdVisitFact
First subsequent ED visit for the patient
FirstAttendingAssignedKey : bigint
Links to ProviderDim
The first attending provider assigned for the emergency department visit
FirstAttendingAssignedDurableKey : bigint
Links to ProviderDim
The first attending provider assigned for the emergency department visit
LastAttendingAssignedKey : bigint
Links to ProviderDim
The last attending provider assigned for the emergency department visit
LastAttendingAssignedDurableKey : bigint
Links to ProviderDim
The last attending provider assigned for the emergency department visit
LongestAttendingAssignedKey : bigint
Links to ProviderDim
The attending provider assigned to the treatment team for the longest duration during the emergency department visit
LongestAttendingAssignedDurableKey : bigint
Links to ProviderDim
The attending provider assigned to the treatment team for the longest duration during the emergency department visit
NoteSigningProviderKey : bigint
Links to ProviderDim
The provider that last signed the note for the emergency department visit
NoteSigningProviderDurableKey : bigint
Links to ProviderDim
The provider that last signed the note for the emergency department visit
FirstMidLevelProviderAssignedKey : bigint
Links to ProviderDim
The first advanced practice (midlevel) provider assigned for the emergency department visit
FirstMidLevelProviderAssignedDurableKey : bigint
Links to ProviderDim
The first advanced practice (midlevel) provider assigned for the emergency department visit
LastMidlevelProviderAssignedKey : bigint
Links to ProviderDim
The last advanced practice (midlevel) provider assigned for the emergency department visit
LastMidlevelProviderAssignedDurableKey : bigint
Links to ProviderDim
The last advanced practice (midlevel) provider assigned for the emergency department visit
LongestMidLevelProviderAssignedKey : bigint
Links to ProviderDim
The advanced practice (midlevel) provider assigned to the treatment team for the longest duration during the emergency department visit
LongestMidLevelProviderAssignedDurableKey : bigint
Links to ProviderDim
The advanced practice (midlevel) provider assigned to the treatment team for the longest duration during the emergency department visit
FirstResidentAssignedKey : bigint
Links to ProviderDim
The first resident assigned for the emergency department visit
FirstResidentAssignedDurableKey : bigint
Links to ProviderDim
The first resident assigned for the emergency department visit
LastResidentAssignedKey : bigint
Links to ProviderDim
The last resident assigned for the emergency department visit
LastResidentAssignedDurableKey : bigint
Links to ProviderDim
The last resident assigned for the emergency department visit
LongestResidentAssignedKey : bigint
Links to ProviderDim
The resident assigned to the treatment team for the longest duration during the emergency department visit
LongestResidentAssignedDurableKey : bigint
Links to ProviderDim
The resident assigned to the treatment team for the longest duration during the emergency department visit
FirstNurseAssignedKey : bigint
Links to ProviderDim
The first registered nurse assigned for the emergency department visit
FirstNurseAssignedDurableKey : bigint
Links to ProviderDim
The first registered nurse assigned for the emergency department visit
LastNurseAssignedKey : bigint
Links to ProviderDim
The last registered nurse assigned for the emergency department visit
LastNurseAssignedDurableKey : bigint
Links to ProviderDim
The last registered nurse assigned for the emergency department visit
LongestNurseAssignedKey : bigint
Links to ProviderDim
The registered nurse assigned to the treatment team for the longest duration during the emergency department visit
LongestNurseAssignedDurableKey : bigint
Links to ProviderDim
The registered nurse assigned to the treatment team for the longest duration during the emergency department visit
AvsPrintTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the after visit summary (AVS) was printed
BedRequestDateKey : bigint
Links to DateDim
Date when a non-emergency department bed request was first placed for the emergency department visit. For Epic data, this column won't necessarily be populated if your organization uses discharge - admission workflows.
BedRequestTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when a non-emergency department bed request was first placed for the emergency department visit. For Epic data, this column won't necessarily be populated if your organization uses discharge - admission workflows.
BedAssignedDateKey : bigint
Links to DateDim
Date when a non-emergency department bed was first assigned for the emergency department visit. For Epic data, this column won't necessarily be populated if your organization uses discharge - admission workflows.
BedAssignedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when a non-emergency department bed was first assigned for the emergency department visit. For Epic data, this column won't necessarily be populated if your organization uses discharge - admission workflows.
BoardingHoursStartDateKey : bigint
Links to DateDim
Date when the patient was first considered a boarder
BoardingHoursStartTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the patient was first considered a boarder
BoardingHoursEndDateKey : bigint
Links to DateDim
Date when the patient was no longer considered a boarder
BoardingHoursEndTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the patient was no longer considered a boarder
DepartureDateKey : bigint
Links to DateDim
Date when the patient departed the emergency department. For Epic data, this can be the date the patient was discharged, dismissed, or transferred up to the floor.
DepartureTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the patient departed the emergency department. For Epic data, this can be the time the patient was discharged, dismissed, or transferred up to the floor.
DepartureUTCDateKey : bigint
Links to DateDim
UTC date when the patient departed the emergency department. For Epic data, this can be the instant the patient was discharged, dismissed, or transferred up to the floor.
DepartureUTCTimeOfDayKey : bigint
Links to TimeOfDayDim
UTC time of day when the patient departed the emergency department. For Epic data, this can be the instant the patient was discharged, dismissed, or transferred up to the floor.
DispositionDateKey : bigint
Links to DateDim
Date when the patient's disposition was recorded
DispositionTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the patient's disposition was recorded
FirstArrivalOutsideEdDateKey : bigint
Links to DateDim
Date when the patient first arrived to a non-emergency department after leaving the emergency department
FirstArrivalOutsideEdTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the patient first arrived to a non-emergency department after leaving the emergency department
FirstResidentAssignedDateKey : bigint
Links to DateDim
Date when the first resident was assigned to the emergency department visit
FirstResidentAssignedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the first resident was assigned to the emergency department visit
FirstAttendingAssignedDateKey : bigint
Links to DateDim
Date when the first attending provider was assigned to the emergency department visit
FirstAttendingAssignedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the first attending provider was assigned to the emergency department visit
FirstEdRegisteredNurseAssignedDateKey : bigint
Links to DateDim
Date when the first registered nurse was assigned to the emergency department visit
FirstEdRegisteredNurseAssignedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the first registered nurse was assigned to the emergency department visit
FirstProviderContactDateKey : bigint
Links to DateDim
Date when a provider first made contact with the patient associated with the emergency department visit
FirstProviderContactTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when a provider first made contact with the patient associated with the emergency department visit
FirstEkgOrderedDateKey : bigint
Links to DateDim
Earliest date that an EKG was ordered
FirstEkgOrderedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the first EKG was ordered
FirstEkgCompletedDateKey : bigint
Links to DateDim
Earliest date that an EKG was completed for the emergency department visit. For Epic data, this is the date when the order was completed.
FirstEkgCompletedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the first EKG was completed for the emergency department visit. For Epic data, this is the time when the order was completed.
FirstEkgInterpretedDateKey : bigint
Links to DateDim
Earliest date that an EKG was interpreted for the emergency department visit.
FirstEkgInterpretedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the first EKG was interpreted for the emergency department visit. For Epic data, this is the time the final read was performed by the radiologist.
FirstCtOrderedDateKey : bigint
Links to DateDim
Earliest date that a CT was ordered
FirstCtOrderedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the first CT was ordered
FirstCtStartedDateKey : bigint
Links to DateDim
Earliest date that a CT was started
FirstCtStartedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the first CT was started
FirstCtCompletedDateKey : bigint
Links to DateDim
Earliest date that a CT was completed for the emergency department visit
FirstCtCompletedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the first CT was completed for the emergency department visit
FirstCtInterpretedDateKey : bigint
Links to DateDim
Earliest date that a CT was interpreted for the emergency department visit
FirstCtInterpretedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the first CT was interpreted for the emergency department visit
FirstUltrasoundOrderedDateKey : bigint
Links to DateDim
Earliest date that an Ultrasound was ordered
FirstUltrasoundOrderedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the first Ultrasound was ordered
FirstUltrasoundStartedDateKey : bigint
Links to DateDim
Earliest date that an Ultrasound was started
FirstUltrasoundStartedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the first Ultrasound was started
FirstUltrasoundCompletedDateKey : bigint
Links to DateDim
Earliest date that an Ultrasound was completed
FirstUltrasoundCompletedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the first Ultrasound was completed
FirstUltrasoundInterpretedDateKey : bigint
Links to DateDim
Earliest date that an Ultrasound was interpreted
FirstUltrasoundInterpretedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the first Ultrasound was interpreted
FirstXrayOrderedDateKey : bigint
Links to DateDim
Earliest date that an X-ray was ordered
FirstXrayOrderedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the first X-ray was ordered
FirstXrayStartedDateKey : bigint
Links to DateDim
Earliest date that an X-ray was started
FirstXrayStartedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the first X-ray was started
FirstXrayCompletedDateKey : bigint
Links to DateDim
Earliest date that an X-ray was completed
FirstXrayCompletedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the first X-ray was completed
FirstXrayInterpretedDateKey : bigint
Links to DateDim
Earliest date that an X-ray was interpreted
FirstXrayInterpretedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the first X-ray was interpreted
FirstCbcOrderedDateKey : bigint
Links to DateDim
Earliest date that a CBC was ordered
FirstCbcOrderedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the first CBC was ordered
FirstCbcCollectedDateKey : bigint
Links to DateDim
Earliest date that a CBC specimen was collected
FirstCbcCollectedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the first CBC specimen was collected
FirstCbcReceivedDateKey : bigint
Links to DateDim
Earliest date that a CBC specimen was received
FirstCbcReceivedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the first CBC specimen was received
FirstCbcResultedDateKey : bigint
Links to DateDim
Earliest date that a CBC was resulted
FirstCbcResultedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the first CBC was resulted
FirstTroponinOrderedDateKey : bigint
Links to DateDim
Earliest date that a Troponin was ordered
FirstTroponinOrderedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the first Troponin was ordered
FirstTroponinCollectedDateKey : bigint
Links to DateDim
Earliest date that a Troponin specimen was collected
FirstTroponinCollectedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the first Troponin specimen was collected
FirstTroponinReceivedDateKey : bigint
Links to DateDim
Earliest date that a Troponin specimen was received
FirstTroponinReceivedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the first Troponin specimen was received
FirstTroponinResultedDateKey : bigint
Links to DateDim
Earliest date that a Troponin was resulted
FirstTroponinResultedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the first Troponin was resulted
FirstMetabolicPanelOrderedDateKey : bigint
Links to DateDim
Earliest date that a Metabolic Panel was ordered
FirstMetabolicPanelOrderedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the first Metabolic Panel was ordered
FirstMetabolicPanelCollectedDateKey : bigint
Links to DateDim
Earliest date that a Metabolic Panel specimen was collected
FirstMetabolicPanelCollectedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the first Metabolic Panel specimen was collected
FirstMetabolicPanelReceivedDateKey : bigint
Links to DateDim
Earliest date that a Metabolic Panel specimen was received
FirstMetabolicPanelReceivedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the first Metabolic Panel specimen was received
FirstMetabolicPanelResultedDateKey : bigint
Links to DateDim
Earliest date that a Metabolic Panel was resulted
FirstMetabolicPanelResultedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the first Metabolic Panel was resulted
FirstUrinalysisOrderedDateKey : bigint
Links to DateDim
Earliest date that a Urinalysis was ordered
FirstUrinalysisOrderedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the first Urinalysis was ordered
FirstUrinalysisCollectedDateKey : bigint
Links to DateDim
Earliest date that a Urinalysis specimen was collected
FirstUrinalysisCollectedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the first Urinalysis specimen was collected
FirstUrinalysisReceivedDateKey : bigint
Links to DateDim
Earliest date that a Urinalysis specimen was received
FirstUrinalysisReceivedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the first Urinalysis specimen was received
FirstUrinalysisResultedDateKey : bigint
Links to DateDim
Earliest date that a Urinalysis was resulted
FirstUrinalysisResultedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the first Urinalysis was resulted
FirstArterialInflationDateKey : bigint
Links to DateDim
Date when a guidewire first crossed the patient's heart lesion in the treatment of STEMI
FirstArterialInflationTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when a guidewire first crossed the patient's heart lesion in the treatment of STEMI
FirstThrombolyticTreatmentDateKey : bigint
Links to DateDim
Date when the first thrombolytic treatment was administered for the emergency department visit
FirstThrombolyticTreatmentTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the first thrombolytic treatment was administered for the emergency department visit
FirstPainMedicationAdministrationDateKey : bigint
Links to DateDim
Date when pain medications were first administered for the emergency department visit
FirstPainMedicationAdministrationTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when pain medications were first administered for the emergency department visit
FirstTraumaStartDateKey : bigint
Links to DateDim
Date when the first trauma activation started for the patient
FirstTraumaStartTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the first trauma activation started for the patient
FirstTraumaEndDateKey : bigint
Links to DateDim
Date when the first trauma activation ended for the patient
FirstTraumaEndTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the first trauma activation ended for the patient
FirstSedationStartDateKey : bigint
Links to DateDim
Date when the patient was first sedated
FirstSedationStartTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the patient was first sedated
FirstSedationEndDateKey : bigint
Links to DateDim
Date when the patient was first removed from sedation
FirstSedationEndTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the patient was first removed from sedation
FirstCodeStartDateKey : bigint
Links to DateDim
Date when the patient was first non-responsive
FirstCodeStartTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the patient was first non-responsive
FirstCodeEndDateKey : bigint
Links to DateDim
Date when the patient was first responsive again
FirstCodeEndTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the patient was first responsive again
AllergiesReviewedDateKey : bigint
Links to DateDim
Date at which the allergies were reviewed for this visit
AllergiesReviewedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day at which the allergies were reviewed for this visit
MedicationListReviewedDateKey : bigint
Links to DateDim
Date at which the medication list was reviewed for this visit
MedicationListReviewedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the medication list was reviewed for this visit
NonEdPatientClassDateKey : bigint
Links to DateDim
Date when the patient was no longer considered an emergency department patient. For Epic data, this is the date the patient first received a base class of inpatient or outpatient.
NonEdPatientClassTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the patient was no longer considered an emergency department patient. For Epic data, this is the time the patient first received a base class of inpatient or outpatient.
NoteFileDateKey : bigint
Links to DateDim
Date when the note associated with the emergency department visit was first signed
NoteFileTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the note associated with the emergency department visit was first signed
ObservationStartedDateKey : bigint
Links to DateDim
Date when the patient was first moved into observation
ObservationStartedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the patient was first moved into observation
RegistrationCompleteDateKey : bigint
Links to DateDim
Date when registration for the emergency department visit was first completed
RegistrationCompleteTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when registration for the emergency department visit was first completed
RoomedDateKey : bigint
Links to DateDim
Date when the patient was roomed
RoomedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the patient was roomed
TriageStartDateKey : bigint
Links to DateDim
Date when triage first started for the emergency department visit
TriageStartTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when triage was first started for the emergency department visit
TriageCompleteDateKey : bigint
Links to DateDim
Date when triage was first completed for the emergency department visit
TriageCompleteTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when triage was first completed for the emergency department visit
EdDepartmentKey : bigint
Links to DepartmentDim
Department associated with the emergency department visit
PrimaryCareAreaKey : bigint
Links to CareAreaDim
Warning: You should not use this column for reporting moving forward. Instead, used EdVisitPrimaryCareAreaKey. Primary care area associated with the emergency department visit
FirstNonEdDepartmentKey : bigint
Links to DepartmentDim
First non-emergency department the patient was in after leaving the emergency department
AdmissionDepartmentKey : bigint
Links to DepartmentDim
Department to which the patient was admitted. For Epic data, this is the first department the patient was in after receiving a base class of inpatient.
PrimaryEdDiagnosisKey : bigint
Links to DiagnosisDim
Primary emergency department diagnosis for the emergency department visit
PrimaryChiefComplaintKey : bigint
Links to ChiefComplaintDim
Primary chief complaint for the emergency department visit
ChiefComplaintComboKey : bigint
Links to ChiefComplaintBridge
All chief complaints for the emergency department visit
EdDiagnosisComboKey : bigint
Links to DiagnosisBridge
All emergency department diagnoses for the emergency department visit
LevelOfServiceAuthorizingProviderKey : bigint
Links to ProviderDim
Provider who authorized the level of service associated with the emergency department visit
LevelOfServiceAuthorizingProviderDurableKey : bigint
Links to ProviderDim
Provider who authorized the level of service associated with the emergency department visit
TriageEmployeeKey : bigint
Links to EmployeeDim
Employee who triaged the patient
TriageEmployeeDurableKey : bigint
Links to EmployeeDim
Employee who triaged the patient
CaseManagerKey : bigint
Links to ProviderDim
Case manager assigned to the treatment team
CaseManagerDurableKey : bigint
Links to ProviderDim
Case manager assigned to the treatment team
AllergiesReviewedUserKey : bigint
Links to EmployeeDim
User who reviewed the allergies for this visit
AllergiesReviewedUserDurableKey : bigint
Links to EmployeeDim
User who reviewed the allergies for this visit
MedicationListReviewedUserKey : bigint
Links to EmployeeDim
User who reviewed the medication list for this visit
MedicationListReviewedUserDurableKey : bigint
Links to EmployeeDim
User who reviewed the medication list for this visit
GuarantorKey : bigint
Links to GuarantorDim
Guarantor associated with the emergency department visit
GuarantorDurableKey : bigint
Links to GuarantorDim
Guarantor associated with the emergency department visit
CoverageKey : bigint
Links to CoverageDim
Coverage for the emergency department visit
ArrivalMethod : nvarchar(300)
Method by which the patient arrived to the emergency department
EdDisposition : nvarchar(300)
The last ED Disposition set for the patient's visit
DischargeDisposition : nvarchar(300)
Disposition of the patient when discharged from the hospital
AcuityLevel : nvarchar(300)
Acuity level of the patient
LevelOfCare : nvarchar(300)
Level of care associated with the patient
FinancialClass : nvarchar(300)
Financial class for the emergency department visit. For Epic data, this column is the financial class of the associated hospital account and can contain Commercial, Medicare, Worker's Comp, or other values.
EncounterEpicCsn : numeric(18,0)
Epic contact serial number (CSN) for the emergency department visit. This column identifies patient (EPT) contacts.
HospitalAccountEpicId : numeric(18,0)
Epic ID of the hospital account associated with the emergency department visit. This column identifies account (HAR) records.
PrimaryProfessionalAccountEpicId : numeric(18,0)
Epic ID of the primary professional account associated with the emergency department visit. This column identifies account (HAR) records.
AdmissionDecisionInstant : datetime
Date and time when the admission decision was made
ArrivalInstant : datetime
Date and time when the patient arrived to the emergency department
AvsPrintInstant : datetime
Date and time when the after visit summary (AVS) was printed
BedRequestInstant : datetime
Date and time when a non-emergency department bed request was first placed for the emergency department visit. For Epic data, this column won't necessarily be populated if your organization uses discharge - admission workflows.
BedAssignedInstant : datetime
Date and time when a non-emergency department bed was first assigned for the emergency department visit. For Epic data, this column won't necessarily be populated if your organization uses discharge - admission workflows.
BoardingHoursStartInstant : datetime
Date and time when the patient was first considered a boarder
BoardingHoursEndInstant : datetime
Date and time when the patient was no longer considered a boarder
DepartureInstant : datetime
Date and time when the patient departed the emergency department. For Epic data, this can be the instant the patient was discharged, dismissed, or transferred up to the floor.
DepartureUTCInstant : datetime
UTC Date and time when the patient departed the emergency department. For Epic data, this can be the instant the patient was discharged, dismissed, or transferred up to the floor.
DispositionInstant : datetime
Date and time when the patient's disposition was recorded
FirstArrivalOutsideEdInstant : datetime
Date and time when the patient first arrived to a non-emergency department after leaving the emergency department
FirstResidentAssignedInstant : datetime
Date and time when the first resident was assigned to the emergency department visit
FirstAttendingAssignedInstant : datetime
Date and time when the first attending provider was assigned to the emergency department visit
FirstEdRegisteredNurseAssignedInstant : datetime
Date and time when the first registered nurse was assigned to the emergency department visit
FirstProviderContactInstant : datetime
Date and time when a provider first made contact with the patient associated with the emergency department visit
FirstEkgOrderedInstant : datetime
Earliest date and time that an EKG was ordered
FirstEkgCompletedInstant : datetime
Earliest date and time that an EKG was completed for the emergency department visit. For Epic data, this is the instant when the order was completed.
FirstEkgInterpretedInstant : datetime
Earliest date and time that an EKG was interpreted for the emergency department visit. For Epic data, this is the instant the final read was performed by the radiologist.
FirstCtOrderedInstant : datetime
Earliest date and time that a CT was ordered
FirstCtStartedInstant : datetime
Earliest date and time that a CT was started
FirstCtCompletedInstant : datetime
Earliest date and time that a CT was completed
FirstCtInterpretedInstant : datetime
Earliest date and time that a CT was interpreted
FirstUltrasoundOrderedInstant : datetime
Earliest date and time that an Ultrasound was ordered
FirstUltrasoundStartedInstant : datetime
Earliest date and time that an Ultrasound was started
FirstUltrasoundCompletedInstant : datetime
Earliest date and time that an Ultrasound was completed
FirstUltrasoundInterpretedInstant : datetime
Earliest date and time that an Ultrasound was interpreted
FirstXrayOrderedInstant : datetime
Earliest date and time that an X-ray was ordered
FirstXrayStartedInstant : datetime
Earliest date and time that an X-ray was started
FirstXrayCompletedInstant : datetime
Earliest date and time that an X-ray was completed
FirstXrayInterpretedInstant : datetime
Earliest date and time that an X-ray was interpreted
FirstCbcOrderedInstant : datetime
Earliest date and time that a CBC was ordered
FirstCbcCollectedInstant : datetime
Earliest date and time that a CBC specimen was collected
FirstCbcReceivedInstant : datetime
Earliest date and time that a CBC specimen was received
FirstCbcResultedInstant : datetime
Earliest date and time that a CBC was resulted
FirstTroponinOrderedInstant : datetime
Earliest date and time that a Troponin was ordered
FirstTroponinCollectedInstant : datetime
Earliest date and time that a Troponin specimen was collected
FirstTroponinReceivedInstant : datetime
Earliest date and time that a Troponin specimen was received
FirstTroponinResultedInstant : datetime
Earliest date and time that a Troponin was resulted
FirstMetabolicPanelOrderedInstant : datetime
Earliest date and time that a Metabolic Panel was ordered
FirstMetabolicPanelCollectedInstant : datetime
Earliest date and time that a Metabolic Panel specimen was collected
FirstMetabolicPanelReceivedInstant : datetime
Earliest date and time that a Metabolic Panel specimen was received
FirstMetabolicPanelResultedInstant : datetime
Earliest date and time that a Metabolic Panel was resulted
FirstUrinalysisOrderedInstant : datetime
Earliest date and time that a Urinalysis was ordered
FirstUrinalysisCollectedInstant : datetime
Earliest date and time that a Urinalysis specimen was collected
FirstUrinalysisReceivedInstant : datetime
Earliest date and time that a Urinalysis specimen was received
FirstUrinalysisResultedInstant : datetime
Earliest date and time that a Urinalysis was resulted
FirstArterialInflationInstant : datetime
Date and time when a guidewire first crossed the patient's lesion in the treatment of STEMI
FirstThrombolyticTreatmentInstant : datetime
Date and time when the first thrombolytic treatment was administered for the emergency department visit
FirstPainMedicationAdministrationInstant : datetime
Date and time when pain medications were first administered for the emergency department visit
FirstTraumaStartInstant : datetime
Date and time when the first trauma activation started for the patient
FirstTraumaEndInstant : datetime
Date and time when the first trauma activation ended for the patient
FirstSedationStartInstant : datetime
Date and time when the patient was first sedated
FirstSedationEndInstant : datetime
Date and time when the patient was first removed from sedation
FirstCodeStartInstant : datetime
Date and time when the patient was first non-responsive
FirstCodeEndInstant : datetime
Date and time when the patient was first responsive again
NonEdPatientClassInstant : datetime
Date and time when the patient was no longer considered an emergency department patient. For Epic data, this is the instant the patient first received a base class of inpatient or outpatient.
NoteFileInstant : datetime
Date and time when the note associated with the emergency department visit was first signed
ObservationStartedInstant : datetime
Date and time when the patient was first moved into observation
RegistrationCompleteInstant : datetime
Date and time when registration for the emergency department visit was completed
RoomedInstant : datetime
Date and time when the patient was roomed
TriageStartInstant : datetime
Date and time when triage started for the emergency department visit
TriageCompleteInstant : datetime
Date and time when triage completed for the emergency department visit
AllergiesReviewedInstant : datetime
Date and time when the patient's allergies were reviewed for the emergency department visit
MedicationListReviewedInstant : datetime
Date and time when the patient's medication list was reviewed for the emergency department visit
TotalCost : numeric(18,2)
Total cost associated with the emergency department visit
DirectCost : numeric(18,2)
Direct cost associated with the emergency department visit
IndirectCost : numeric(18,2)
Indirect cost associated with the emergency department visit
FixedCost : numeric(18,2)
Fixed cost associated with the emergency department visit
VariableCost : numeric(18,2)
Variable cost associated with the emergency department visit
DirectFixedCost : numeric(18,2)
Direct fixed cost associated with the emergency department visit
DirectVariableCost : numeric(18,2)
Direct variable cost associated with the emergency department visit
IndirectFixedCost : numeric(18,2)
Indirect fixed cost associated with the emergency department visit
IndirectVariableCost : numeric(18,2)
Indirect variable cost associated with the emergency department visit
LaborDirectCost : numeric(18,2)
Direct labor cost associated with the emergency department visit
LaborDirectFixedCost : numeric(18,2)
Direct fixed labor cost associated with the emergency department visit
LaborDirectVariableCost : numeric(18,2)
Direct variable labor cost associated with the emergency department visit
SuppliesCost : numeric(18,2)
Supplies cost associated with the emergency department visit
OtherDirectCost : numeric(18,2)
Direct other cost associated with the emergency department visit
OtherDirectFixedCost : numeric(18,2)
Direct fixed other cost associated with the emergency department visit
OtherDirectVariableCost : numeric(18,2)
Direct variable other cost associated with the emergency department visit
UnderObservation : tinyint
1/0 column that indicates whether the patient was under observation during the emergency department visit. This column returns 1 if the patient was under observation during the emergency department visit and 0 if the patient was not under observation during the emergency department visit.
LeftWithoutBeingSeen : tinyint
1/0 column that indicates whether the patient left without being seen. This column returns 1 if the patient left without being seen and 0 if the patient was seen.
LeftAgainstMedicalAdvice : tinyint
1/0 column that indicates whether the patient left against medical advice. This column returns 1 if the patient left against medical advice and 0 if the patient was cleared to leave.
BehavioralHealth : tinyint
1/0 column that indicates whether the patient was on a psychiatric track. This column returns 1 if the patient was on a psychiatric track and 0 if the patient was not on a psychiatric track.
BehavioralRestraintsUsed : tinyint
1/0 column that indicates whether behavioral restraints were used during the emergency department visit. This column returns 1 if behavioral restraints were used and 0 if behavioral restraints were not used.
NonBehavioralRestraintsUsed : tinyint
1/0 column that indicates whether non-behavioral restraints were used during the emergency department visit. This column returns 1 if non-behavioral restraints were used and 0 if non-behavioral restraints were not used.
UsedCheckInKiosk : tinyint
1/0 value to indicate if the check in kiosk was used. This column returns 1 if the check in kiosk was used and 0 if the check in kiosk was not used.
FacilityCriticalCareLevelOfService : tinyint
1/0 column that indicates whether there is a facility critical care charge generated for the emergency department visit. This column returns 1 if a facility critical care charge exists and 0 if no facility critical care charge exists.
ProfessionalCriticalCareLevelOfService : tinyint
1/0 column that indicates whether there is a professional critical care charge generated for the emergency department visit. This column returns 1 if a professional critical care charge exists and 0 if no professional critical care charge exists.
PresentedWithOpioidOverdose : tinyint
1/0 column that will be set to 1 if the patient had any ED diagnoses indicating an opioid overdose, regardless of whether that patient expired in the hospital setting.
AdmissionProviderKey : bigint
Links to ProviderDim
The provider responsible for admitting the patient
AdmissionProviderDurableKey : bigint
Links to ProviderDim
The provider responsible for admitting the patient
DispositionProviderDurableKey : bigint
Links to ProviderDim
The provider that was responsible for the disposition documentation on this ED visit
SelfArrivalAllowed : tinyint
1/0 column that indicates whether this visit supports self-arrival. This column returns 1 if some type of self-arrival is supported, and 0 if not.
SelfArrivalType : nvarchar(300)
Indicates what type(s) of self-arrival, if any, this visit supports
EdEncounterSource : nvarchar(300)
Indicates how the ED encounter was created
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
ArrivalUTCInstant : datetime
UTC Date and time when the patient arrived to the emergency department
ArrivalUTCDateKey : bigint
Links to DateDim
UTC Date when the patient arrived to the emergency department
ArrivalUTCTimeOfDayKey : bigint
Links to TimeOfDayDim
UTC time when the patient arrived to the emergency department
```

---

## EmployeeAuthorizedServiceAreaBridge

**Extracted:** 2025-07-23 00:04:00
**Content Length:** 535 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class A Helper
Try It
EmployeeAuthorizedLocationBridge
The employee authorized location bridge contains unique combinations of employees associated with their authorized locations. Each row represents an employee in a combination. Change Type: Non-Snapshot
Columns
EmployeeAuthorizedLocationComboKey : bigint
Surrogate key used to uniquely identify the record
DepartmentKey : bigint
Links to DepartmentDim
One of the locations in the combination
```

---

## EmployeeDim

**Extracted:** 2025-07-23 00:04:15
**Content Length:** 553 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class A Helper
Try It
EmployeeAuthorizedServiceAreaBridge
The employee authorized service area bridge contains unique combinations of employees associated with their authorized service areas. Each row represents an employee in a combination. Change Type: Non-Snapshot
Columns
EmployeeAuthorizedServiceAreaComboKey : bigint
Surrogate key used to uniquely identify the record
DepartmentKey : bigint
Links to DepartmentDim
One of the service areas in the combination
```

---

## EncounterFact

**Extracted:** 2025-07-23 00:04:34
**Content Length:** 11920 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class G Fact
Try It
EncounterFact
The encounter fact contains information about encounters documented in an EMR and encounters derived from billing data. Each row represents an encounter. Encounters from an EMR are flagged with IsDerivedFromBilling = 0 and encounters derived from billing data are flagged with IsDerivedFromBilling = 1. For Epic EMR data, one encounter is one CSN. For encounters derived from billing data, Epic has released definitions that combine multiple outgoing and paid claims into one encounter based on comparing attributes like patient, provider, and date. Change Type: Non-Snapshot
Columns
EncounterKey : bigint
Surrogate key used to uniquely identify the record
PatientKey : bigint
Links to PatientDim
Patient associated with the encounter
PatientDurableKey : bigint
Links to PatientDim
Patient associated with the encounter
PrimaryDiagnosisKey : bigint
Links to DiagnosisDim
Primary diagnosis associated with this encounter
ChiefComplaintComboKey : bigint
Links to ChiefComplaintBridge
All chief complaints associated with the encounter
PrimaryProcedureKey : bigint
Links to ProcedureDim
Primary procedure associated with this encounter. For Epic data, this is not populated for hospital encounters.
PrimaryProcedureDurableKey : bigint
Links to ProcedureDim
Primary procedure associated with this encounter. For Epic data, this is not populated for hospital encounters.
BillingDrgKey : bigint
Links to DrgDim
Diagnosis Related Group (DRG) that was billed for this encounter
PrimaryCoverageKey : bigint
Links to CoverageDim
Primary coverage used for the encounter
DateKey : bigint
Links to DateDim
Start date of the encounter
EndDateKey : bigint
Links to DateDim
End date of the encounter
AdmissionDateKey : bigint
Links to DateDim
Date the patient started receiving care at the hospital
DischargeDateKey : bigint
Links to DateDim
Date the patient was discharged from the hospital or departed the ED without being admitted
AuthorizationDateKey : bigint
Links to DateDim
Date the encounter was first authorized
ProviderKey : bigint
Links to ProviderDim
Provider associated with the encounter
ProviderDurableKey : bigint
Links to ProviderDim
Provider associated with the encounter
AttendingProviderKey : bigint
Links to ProviderDim
Provider who managed the overall care of the admitted patient
AttendingProviderDurableKey : bigint
Links to ProviderDim
Provider who managed the overall care of the admitted patient
OperatingProviderKey : bigint
Links to ProviderDim
Provider who had the primary responsibility for performing the surgical procedure
OperatingProviderDurableKey : bigint
Links to ProviderDim
Provider who had the primary responsibility for performing the surgical procedure
AdmittingProviderKey : bigint
Links to ProviderDim
Provider who is responsible for documenting the day of admission and the earliest diagnosis while admitting a patient
AdmittingProviderDurableKey : bigint
Links to ProviderDim
Provider who is responsible for documenting the day of admission and the earliest diagnosis while admitting a patient
DischargeProviderKey : bigint
Links to ProviderDim
Provider who is responsible for discharging a patient
DischargeProviderDurableKey : bigint
Links to ProviderDim
Provider who is responsible for discharging a patient
ReferringProviderKey : bigint
Links to ProviderDim
Provider who refers an item or service that will be billed by another provider for a Medicare beneficiary patient
ReferringProviderDurableKey : bigint
Links to ProviderDim
Provider who refers an item or service that will be billed by another provider for a Medicare beneficiary patient
LevelOfServiceKey : bigint
Links to ProcedureDim
Level of service associated with the encounter
LevelOfServiceDurableKey : bigint
Links to ProcedureDim
Level of service associated with the encounter
DepartmentKey : bigint
Links to DepartmentDim
Department associated with the encounter
PlaceOfServiceKey : bigint
Links to PlaceOfServiceDim
Place of service where care was rendered
SourceComboKey : bigint
Links to EncounterSourceBridge
MedicationListStatusCategoryKey : bigint
Links to CategoryDim
Category associated with the current medication list status for the encounter
MedicationListStatusProviderDurableKey : bigint
Links to ProviderDim
Provider who set the current medication list status for the encounter
MedicationListStatusUserDurableKey : bigint
Links to EmployeeDim
User who set the current medication list status for the encounter
MedicationListStatusDateKey : bigint
Links to DateDim
Date of when the current medication list status for the encounter was set
BillingDrgType : nvarchar(300)
Type of the Diagnosis Related Group (DRG) code that was billed for this encounter
BillingDrgCode : nvarchar(50)
Diagnosis Related Group (DRG) code that was billed for this encounter
Type : nvarchar(300)
Type of the encounter. For externally received document data, this column is populated by the received encounter type after being mapped to an internal encounter type.
AdmissionTypeCode : nvarchar(50)
Recognized code for the type and priority of services associated with the encounter
TypeCategoryKey : bigint
Links to CategoryDim
Category associated with the encounter type
AdmissionType : nvarchar(300)
Type and priority of service associated with the encounter
ExternalType : nvarchar(300)
External type of the encounter. For externally received document data, this column is populated by the external Care Everywhere encounter type prior to being mapped to internal encounter types. Only use this column over the Type column for values where your organization couldn't map the external Care Everywhere encounter type to an internal encounter type.
ExternalTypeCategoryKey : bigint
Links to CategoryDim
Category associated with the external type
Hl7Type : nvarchar(300)
HL7 type of external encounter. For externally received document data, this column is populated by the external HL7 encounter type. This column only contains generic encounter types (Ambulatory, Inpatient Encounter, Emergency, or Other). Prefer the Type column over this column when possible.
Hl7TypeCategoryKey : bigint
Links to CategoryDim
Category associated with the HL7 type
AdmissionTypeCategoryKey : bigint
Links to CategoryDim
Category associated with the admission type
AdmissionSourceCode : nvarchar(50)
Recognized code for the source of the admission referral for the encounter
AdmissionSource : nvarchar(300)
Source of the admission referral for the encounter
DischargeDispositionCode : nvarchar(50)
Recognized code for the discharge disposition of the patient associated with the encounter
DischargeDisposition : nvarchar(300)
Patient discharge disposition
DerivedAdmissionServiceType : nvarchar(300)
Type of service provided for the encounter derived from encounter data. For Epic claims derived data, this can be Short-term Acute Care, Long-term Acute Care, Inpatient Psychiatric, and Inpatient Rehabilitation.
EncounterEpicCsn : numeric(18,0)
Epic contact serial number (CSN) of the encounter. This column identifies patient (EPT) contacts.
Date : datetime
Start date and time of the encounter
EndInstant : datetime
End date and time of the encounter
AdmissionInstant : datetime
Date and time the patient started receiving care at the hospital
DischargeInstant : datetime
Date and time the patient was discharged from the hospital or departed the ED without being admitted
AuthorizationInstant : datetime
Date and time the encounter was first authorized
MedicationListStatusInstant : datetime
Date and time of when the current medication list status for the encounter was set
VisitType : nvarchar(300)
Visit type for the encounter
VisitTypeKey : bigint
Links to VisitTypeDim
Visit type of the encounter
PatientClass : nvarchar(300)
Patient class associated with the encounter
PatientClassCategoryKey : bigint
Links to CategoryDim
Category associated with the patient class
ArrivalMeans : nvarchar(300)
The means of arrival of the patient associated with this encounter
MedicationListStatus : nvarchar(300)
Current status of the medication list for the encounter
AuthorizationStatus : nvarchar(300)
The authorization status of the encounter
AuthorizationStatusAtEncounter : nvarchar(300)
The authorization status at the time of the encounter
IsDerivedFromBilling : tinyint
1/0 column that indicates whether the encounter is a clinical encounter or a derived encounter based on interpretations of billing data. This column returns 1 if this encounter is derived based on interpretations of billing data and 0 if the column is a clinical encounter.
IsImmediateClaimEligible : tinyint
1/0 column that indicates whether the encounter is considered eligible for sending claims immediately. This column returns 1 if the encounter is eligible, and 0 if the encounter is ineligible.
IsHospitalAdmission : tinyint
1/0 column that indicates whether the encounter is a hospital admission. This column returns 1 if the encounter is a hospital admission and 0 otherwise.
IsInpatientAdmission : tinyint
Whether the encounter had an inpatient base class at any point during the admission
IsObservation : tinyint
Whether the encounter had a final patient class of observation
IsEdVisit : tinyint
1/0 column that indicates whether the encounter is an ED visit. This column returns 1 if the encounter is an ED visit and 0 otherwise.
IsOutpatientFaceToFaceVisit : tinyint
1/0 column that indicates whether the encounter is an outpatient face-to-face visit. This column returns 1 if the encounter is an outpatient face-to-face visit and 0 otherwise.
IsSkilledNursingFacilityVisit : tinyint
1/0 column that indicates whether the encounter is a skilled nursing facility visit. This column returns 1 if the encounter is a skilled nursing facility visit and 0 otherwise.
PriorAuthorizationRequired : tinyint
1/0 column that indicates whether prior authorization is required for the encounter, for the purposes of prior authorization metrics. This column returns 1 if prior authorization is required, and 0 if prior authorization is not required. Prior authorization is not required on outpatient visits that are same day, redirected to inpatient, or if there is no referral on the visit and none is needed. Prior authorization is not required on inpatient admissions that are Medicare only, self pay, do not bill insurance, same day, emergency, or for newborns.
PatientSelectedLocation : nvarchar(300)
The country the patient indicated they were located in at the time of the telehealth encounter.
PatientSelectedSublocation : nvarchar(300)
The sublocation the patient indicated they were located in at the time of the telehealth encounter.
AttributedDepartmentKey : bigint
Links to DepartmentDim
Link to DepartmentDim for the effective department. The department is found by returning the first department to have a value in the following order: 1) Hospital Department 2) Procedure Pass Department (the effective department of linked appointment or admission) 3) Hospice Intake Department 4) Appointment Department 5) Waiting List Department 6) OR Department. This column is only populated for Epic encounters.
FinalProviderDurableKey : bigint
Links to ProviderDim
The last provider associated with the encounter. This column is only populated for completed encounters. For hospital encounters, the discharging provider is used, if populated. Otherwise, the visit provider is used.
AppointmentSchedulingMode : nvarchar(300)
The category name of the scheduling mode that was used to schedule an appointment. For example, whether the appointment was scheduled in Book It using the Solutions view, the Schedules view, or the Open Slots view. This only captures the initial appointment creation and not subsequent changes.
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## EncounterTypeDepartmentMappingDim

**Extracted:** 2025-07-23 00:04:49
**Content Length:** 1015 characters

**Content:**
```
EncounterTypeDepartmentMappingDim
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Dim
Try It
EncounterTypeDepartmentMappingDim
The encounter type department mapping dimension contains information about combinations of encounter type and department mapped to a concept. Each row represents an encounter type and department mapped to a standard concept for a defined standard, such as SNOMED CT® or other similar values. Change Type: Non-Snapshot
Columns
EncounterTypeDepartmentMappingKey : bigint
Surrogate key used to uniquely identify the record
EncounterTypeCategoryKey : bigint
Links to CategoryDim
Category associated with the encounter type
DepartmentKey : bigint
Links to DepartmentDim
Department associated with the mapping
TerminologyConceptKey : bigint
Links to TerminologyConceptDim
Standard concept in TerminologyConceptDim associated with the encounter type and department mapping
EncounterType : nvarchar(300)
Encounter type associated with the mapping
```

---

## EpisodeEncounterMappingFact

**Extracted:** 2025-07-23 00:05:04
**Content Length:** 1015 characters

**Content:**
```
EncounterTypeDepartmentMappingDim
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Dim
Try It
EncounterTypeDepartmentMappingDim
The encounter type department mapping dimension contains information about combinations of encounter type and department mapped to a concept. Each row represents an encounter type and department mapped to a standard concept for a defined standard, such as SNOMED CT® or other similar values. Change Type: Non-Snapshot
Columns
EncounterTypeDepartmentMappingKey : bigint
Surrogate key used to uniquely identify the record
EncounterTypeCategoryKey : bigint
Links to CategoryDim
Category associated with the encounter type
DepartmentKey : bigint
Links to DepartmentDim
Department associated with the mapping
TerminologyConceptKey : bigint
Links to TerminologyConceptDim
Standard concept in TerminologyConceptDim associated with the encounter type and department mapping
EncounterType : nvarchar(300)
Encounter type associated with the mapping
```

---

## EpisodeFact

**Extracted:** 2025-07-23 00:05:20
**Content Length:** 786 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Fact
Try It
EpisodeEncounterMappingFact
The episode encounter fact contains information about encounters for episodes. Each row represents an episode and one of its associated encounters. Change Type: Non-Snapshot
Columns
EpisodeEncounterKey : bigint
Surrogate key used to uniquely identify the record
EpisodeKey : bigint
Links to EpisodeFact
Episode associated with an encounter
EncounterKey : bigint
Links to EncounterFact
Encounter associated with an episode
EncounterDateKey : bigint
Links to DateDim
Start date for the encounter associated with the episode.
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## EpisodeTypeDim

**Extracted:** 2025-07-23 00:05:36
**Content Length:** 1022 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Fact
Try It
EpisodeFact
The episode fact contains information about episodes. Each row represents one episode of care. For Epic data, this table does not include information about obstetrics delivery episodes. Change Type: Non-Snapshot
Columns
EpisodeKey : bigint
Surrogate key used to uniquely identify the record
EpisodeStartDateKey : bigint
Links to DateDim
Date that the episode was initiated
EpisodeEndDateKey : bigint
Links to DateDim
Date that the episode was closed
EpisodeEpicId : numeric(18,0)
Epic ID of the episode. This column identifies episode (HSB) records.
Type : nvarchar(300)
Type of the episode
Status : nvarchar(300)
Status of the episode
Name : nvarchar(500)
The name of the episode
EpisodeTypeKey : bigint
Links to EpisodeTypeDim
The Episode Type associated with this episode
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## EVisitFact

**Extracted:** 2025-07-23 00:05:51
**Content Length:** 581 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Dim
Try It
EpisodeTypeDim
The episode type dimension contains information about episode types. Each row represents a type of episode. Change Type: Non-Snapshot
Columns
EpisodeTypeKey : bigint
Surrogate key used to uniquely identify the record
EpisodeTypeEpicId : numeric(18,0)
Epic ID of the type of episode. This column identifies episode type (HBD) records.
EpisodeTypeName : nvarchar(300)
Name of the type of episode
ClassName : nvarchar(300)
Name of the class of the episode type
```

---

## FinancialAssistanceCaseFact

**Extracted:** 2025-07-23 00:06:07
**Content Length:** 2524 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Fact
Try It
EVisitFact
The E-Visit fact contains information about E-Visits. Each row represents an E-Visit. An E-Visit is a way for patients to receive care asynchronously outside of a traditional appointment. A patient answers questions about their symptoms and general healthcare, and a provider reviews the questionnaire answers and may respond with a care plan or recommendation. For Epic data, an E-Visit is an encounter, i.e. one CSN, that satisfies at least one of the following criteria: in the contact, the flag Is E-Visit is set to True; the encounter type is E-Visit; the telehealth mode is E-Visit; or the encounter is associated with a MyChart message that has a type of E-Visit. Change Type: Non-Snapshot
Columns
EVisitKey : bigint
Surrogate key used to uniquely identify the record
EncounterKey : bigint
Links to EncounterFact
Encounter associated with the E-Visit
EncounterDateKey : bigint
Links to DateDim
The encounter date for the E-Visit. If the E-Visit is patient-initiated, this is the date that the patient first started the E-Visit. If the E-Visit is provider-initiated, this is the date that the E-Visit was ordered for.
PatientDurableKey : bigint
Links to PatientDim
Patient associated with the E-Visit
DepartmentKey : bigint
Links to DepartmentDim
Department for the visit. For Epic data, if there are multiple departments for the visit, this is the first department on the list.
ProviderDurableKey : bigint
Links to ProviderDim
Provider associated with the E-Visit
ReasonForVisit : nvarchar(300)
Selected reason for visit for the E-Visit
Status : nvarchar(300)
Status of the E-Visit
SubmittedDateKey : bigint
Links to DateDim
Date that the E-Visit was submitted
SubmittedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day that the E-Visit was submitted
CloseInstantLocal : datetime
The date and time the E-Visit was closed
ReasonCanceled : nvarchar(300)
Reason given why the E-Visit was canceled
CancellationInitiator : nvarchar(50)
The type of cancel initiator associated with the cancellation reason. This can be Patient, Provider, or Other.
IsProviderInitiated : tinyint
1/0 column that indicates whether the E-Visit was assigned to the patient by a provider. This column returns 1 if the E-Visit was provider-initiated and 0 if the E-Visit was patient-initiated.
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## FinancialAssistanceCasePatientMappingFact

**Extracted:** 2025-07-23 00:06:22
**Content Length:** 1026 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Fact
Try It
FinancialAssistanceCasePatientMappingFact
The financial assistance case patient mapping fact contains information about financial assistance cases. Each row represents a patient on a single financial assistance case. Change Type: Non-Snapshot
Columns
FinancialAssistanceCasePatientMappingKey : bigint
Surrogate key used to uniquely identify the record
FinancialAssistanceCaseKey : bigint
Links to FinancialAssistanceCaseFact
Financial assistance case that is linked to a patient
PatientDurableKey : bigint
Links to PatientDim
Patient that is linked to a financial assistance case
ChildCaseKey : bigint
Links to FinancialAssistanceCaseFact
Child case on the parent case that is specific to this patient
CreationDateKey : bigint
Links to DateDim
Date the financial assistance case was created
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## FinancialAssistanceTrackerFact

**Extracted:** 2025-07-23 00:06:38
**Content Length:** 2587 characters

**Content:**
```
FinancialAssistanceTrackerFact
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Fact
Try It
FinancialAssistanceTrackerFact
The financial assistance tracker fact contains information on the status of a patient’s application for assistance. Change Type: Non-Snapshot
Columns
FinancialAssistanceTrackerKey : bigint
Surrogate key used to uniquely identify the record
TrackerEpicId : numeric(18,0)
Epic ID for the financial assistance tracker
PatientDurableKey : bigint
Links to PatientDim
Patient associated with the financial assistance program tracker
PlaceOfServiceKey : bigint
Links to PlaceOfServiceDim
Primary service area from the Financial Assistance case, regardless of tracker service area
ServiceAreaKey : bigint
Links to DepartmentDim
Tracker primary service area
FinancialAssistanceCaseKey : bigint
Links to FinancialAssistanceCaseFact
Financial assistance case that the tracker is associated with
TrackerCreationEmployeeDurableKey : bigint
Links to EmployeeDim
The user who created the tracker
InitialDecisionEntryEmployeeDurableKey : bigint
Links to EmployeeDim
The user who entered the first decided status
TrackerCreationDateKey : bigint
Links to DateDim
Date that tracker record was created
InitialDecisionEntryDateKey : bigint
Links to DateDim
Date when the initial decision was entered
InitialResponsibleEmployeeDurableKey : bigint
Links to EmployeeDim
The first user responsible for the financial assistance program tracker. If a responsible user was not assigned, the assigned user from the case will be used.
InitialDecisionStatus : nvarchar(300)
The first decision made on the tracker, either approved or denied
InitialDecisionResponsibleEmployeeDurableKey : bigint
Links to EmployeeDim
The responsible user at the time of the initial tracker decision. This may be the assigned user from the case if not set for the tracker.
TurnaroundTime : bigint
Length of time in seconds between tracker record creation and initial decision entry
ProgramEpicId : numeric(18,0)
Epic ID for the financial assistance program for this tracker
InitialDecisionUndoneInstantLocal : datetime
Date and time when a decided tracker changed to a status different from the initial decision status
WasAppealed : tinyint
1/0 column that indicates the tracker was initially denied and then successfully appealed to an approved status
WasReversed : tinyint
1/0 column that indicates that the tracker was initially approved, but subsequently denied
IsPrimary : tinyint
1/0 column for whether the tracker is the primary for a shared or family tracker
```

---

## FlowsheetRowDim

**Extracted:** 2025-07-23 00:06:55
**Content Length:** 1252 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Dim
Try It
FlowsheetRowDim
The flowsheet row dimension contains information about flowsheet rows. Each row represents a flowsheet row. Change Type: Non-Snapshot
Columns
FlowsheetRowKey : bigint
Surrogate key used to uniquely identify the record
FlowsheetRowEpicId : nvarchar(50)
Epic ID of the flowsheet row. This column identifies flowsheet row and group (FLO) records.
Name : nvarchar(300)
Name of the flowsheet row
DisplayName : nvarchar(300)
Display name of the flowsheet row
Abbreviation : nvarchar(50)
Abbreviated name of the flowsheet row
ValueType : nvarchar(300)
Type of value stored in the flowsheet row
RowType : nvarchar(300)
Type of flowsheet row
Unit : nvarchar(300)
Unit of the value stored in the flowsheet row
Description : nvarchar(300)
Description of the flowsheet row
IsBloodLoss : tinyint
1/0 column that indicates whether the flowsheet row represents blood loss output. This column returns 1 if the row represents blood loss output and 0 if it does not.
IsInSuicideScreener : tinyint
1/0 column which indicates if this flowsheet row is used in a suicide risk screener and indicates likely completion of said screener when filled out
```

---

## FlowsheetRowMappingDim

**Extracted:** 2025-07-23 00:07:11
**Content Length:** 1252 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Dim
Try It
FlowsheetRowDim
The flowsheet row dimension contains information about flowsheet rows. Each row represents a flowsheet row. Change Type: Non-Snapshot
Columns
FlowsheetRowKey : bigint
Surrogate key used to uniquely identify the record
FlowsheetRowEpicId : nvarchar(50)
Epic ID of the flowsheet row. This column identifies flowsheet row and group (FLO) records.
Name : nvarchar(300)
Name of the flowsheet row
DisplayName : nvarchar(300)
Display name of the flowsheet row
Abbreviation : nvarchar(50)
Abbreviated name of the flowsheet row
ValueType : nvarchar(300)
Type of value stored in the flowsheet row
RowType : nvarchar(300)
Type of flowsheet row
Unit : nvarchar(300)
Unit of the value stored in the flowsheet row
Description : nvarchar(300)
Description of the flowsheet row
IsBloodLoss : tinyint
1/0 column that indicates whether the flowsheet row represents blood loss output. This column returns 1 if the row represents blood loss output and 0 if it does not.
IsInSuicideScreener : tinyint
1/0 column which indicates if this flowsheet row is used in a suicide risk screener and indicates likely completion of said screener when filled out
```

---

## FlowsheetTemplateDim

**Extracted:** 2025-07-23 00:07:26
**Content Length:** 1252 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Dim
Try It
FlowsheetRowDim
The flowsheet row dimension contains information about flowsheet rows. Each row represents a flowsheet row. Change Type: Non-Snapshot
Columns
FlowsheetRowKey : bigint
Surrogate key used to uniquely identify the record
FlowsheetRowEpicId : nvarchar(50)
Epic ID of the flowsheet row. This column identifies flowsheet row and group (FLO) records.
Name : nvarchar(300)
Name of the flowsheet row
DisplayName : nvarchar(300)
Display name of the flowsheet row
Abbreviation : nvarchar(50)
Abbreviated name of the flowsheet row
ValueType : nvarchar(300)
Type of value stored in the flowsheet row
RowType : nvarchar(300)
Type of flowsheet row
Unit : nvarchar(300)
Unit of the value stored in the flowsheet row
Description : nvarchar(300)
Description of the flowsheet row
IsBloodLoss : tinyint
1/0 column that indicates whether the flowsheet row represents blood loss output. This column returns 1 if the row represents blood loss output and 0 if it does not.
IsInSuicideScreener : tinyint
1/0 column which indicates if this flowsheet row is used in a suicide risk screener and indicates likely completion of said screener when filled out
```

---

## FlowsheetValueFact

**Extracted:** 2025-07-23 00:07:42
**Content Length:** 1252 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Dim
Try It
FlowsheetRowDim
The flowsheet row dimension contains information about flowsheet rows. Each row represents a flowsheet row. Change Type: Non-Snapshot
Columns
FlowsheetRowKey : bigint
Surrogate key used to uniquely identify the record
FlowsheetRowEpicId : nvarchar(50)
Epic ID of the flowsheet row. This column identifies flowsheet row and group (FLO) records.
Name : nvarchar(300)
Name of the flowsheet row
DisplayName : nvarchar(300)
Display name of the flowsheet row
Abbreviation : nvarchar(50)
Abbreviated name of the flowsheet row
ValueType : nvarchar(300)
Type of value stored in the flowsheet row
RowType : nvarchar(300)
Type of flowsheet row
Unit : nvarchar(300)
Unit of the value stored in the flowsheet row
Description : nvarchar(300)
Description of the flowsheet row
IsBloodLoss : tinyint
1/0 column that indicates whether the flowsheet row represents blood loss output. This column returns 1 if the row represents blood loss output and 0 if it does not.
IsInSuicideScreener : tinyint
1/0 column which indicates if this flowsheet row is used in a suicide risk screener and indicates likely completion of said screener when filled out
```

---

## GenomicProcedureOrderEventFact

**Extracted:** 2025-07-23 00:07:57
**Content Length:** 1252 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Dim
Try It
FlowsheetRowDim
The flowsheet row dimension contains information about flowsheet rows. Each row represents a flowsheet row. Change Type: Non-Snapshot
Columns
FlowsheetRowKey : bigint
Surrogate key used to uniquely identify the record
FlowsheetRowEpicId : nvarchar(50)
Epic ID of the flowsheet row. This column identifies flowsheet row and group (FLO) records.
Name : nvarchar(300)
Name of the flowsheet row
DisplayName : nvarchar(300)
Display name of the flowsheet row
Abbreviation : nvarchar(50)
Abbreviated name of the flowsheet row
ValueType : nvarchar(300)
Type of value stored in the flowsheet row
RowType : nvarchar(300)
Type of flowsheet row
Unit : nvarchar(300)
Unit of the value stored in the flowsheet row
Description : nvarchar(300)
Description of the flowsheet row
IsBloodLoss : tinyint
1/0 column that indicates whether the flowsheet row represents blood loss output. This column returns 1 if the row represents blood loss output and 0 if it does not.
IsInSuicideScreener : tinyint
1/0 column which indicates if this flowsheet row is used in a suicide risk screener and indicates likely completion of said screener when filled out
```

---

## GuarantorDim

**Extracted:** 2025-07-23 00:08:13
**Content Length:** 1524 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Dim
Try It
FlowsheetRowMappingDim
The flowsheet row mapping dimension contains information about mappings from flowsheet rows to standard concepts. Each row represents a flowsheet row mapped to a standard concept for a defined standard, such as LOINC®, SNOMED CT®, or other similar values. As a snapshot (Type-2) table, all non-current rows represent an audit trail of when a mapping has changed in Caboodle. Change Type: Snapshot
Columns
FlowsheetRowMappingKey : bigint
Surrogate key used to uniquely identify the record
DurableKey : bigint
Durable key used to identify the record
FlowsheetRowKey : bigint
Links to FlowsheetRowDim
The entity in FlowsheetRowDim associated with the standard concept. This column will be changed in the future to have no change tracking (Type 1).
TerminologyConceptKey : bigint
Links to TerminologyConceptDim
Standard concept in TerminologyConceptDim associated with the flowsheet row. This column will be changed in the future to have no change tracking (Type 1).
StartDate : date
The date of the execution that loaded a change to at least one column that has snapshot tracking enabled. For the first row loaded for the record this will be an arbitrary date in the past.
EndDate : date
The day before the next StartDate for the record. For the IsCurrent = 1 row, this will be an arbitrary date in the future.
IsCurrent : bit
1 indicates this is the most recent mapping information, otherwise 0
```

---

## HomeHealthCertificationPeriodFact

**Extracted:** 2025-07-23 00:08:28
**Content Length:** 4378 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class D Dim
Try It
GuarantorDim
The guarantor dimension contains information about guarantor accounts. Each row represents a guarantor account for a date range. This table contains both current and historical information. For current records, IsCurrent has a value of 1. Historical records contain information that is valid for the date range specified by the StartDate and EndDate columns. Change Type: Snapshot
Columns
GuarantorKey : bigint
Surrogate key used to uniquely identify the record
DurableKey : bigint
Durable key used to identify the record
ServiceAreaKey : bigint
Links to DepartmentDim
Service area associated with the guarantor account
GuarantorEpicId : numeric(18,0)
Epic ID of the guarantor. This column identifies accounts receivable (EAR) records.
Name : nvarchar(200)
Full name of the guarantor
AccountType : nvarchar(300)
Type of guarantor account. For Epic data, this column can contain Personal/Family, Case Rate, or other values.
AccountVerificationEmployeeDurableKey : bigint
Links to EmployeeDim
User who most recently verified the account
BirthDate : date
Birth date of the guarantor
HomePhoneNumber : nvarchar(50)
Home phone number for the guarantor
WorkPhoneNumber : nvarchar(50)
Work phone number for the guarantor
Address : nvarchar(250)
Street address for the billing address for the guarantor. This column will be changed in the future to have no change tracking (Type 1).
City : nvarchar(50)
City for the billing address associated with the guarantor. This column will be changed in the future to have no change tracking (Type 1).
StateOrProvince : nvarchar(300)
State or province for the billing address associated with the guarantor. This column will be changed in the future to have no change tracking (Type 1).
StateOrProvinceAbbreviation : nvarchar(300)
Abbreviated name of the state or province for the billing address associated with the guarantor. This column will be changed in the future to have no change tracking (Type 1).
PostalCode : nvarchar(50)
Postal code for the billing address associated with the guarantor. This column will be changed in the future to have no change tracking (Type 1).
County : nvarchar(300)
County for the billing address for the guarantor. This column will be changed in the future to have no change tracking (Type 1).
Country : nvarchar(300)
Country for the billing address associated with the guarantor. This column will be changed in the future to have no change tracking (Type 1).
ServiceAreaName : nvarchar(200)
Service area associated with the guarantor account
FirstAccountStatus : nvarchar(300)
First status associated with the guarantor account. For Epic data, this column can contain Payment Plan, Collections, or other values.
SecondAccountStatus : nvarchar(300)
Second status associated with the guarantor account. For Epic data, this column can contain Payment Plan, Collections, or other values.
ThirdAccountStatus : nvarchar(300)
Third status associated with the guarantor account. For Epic data, this column can contain Payment Plan, Collections, or other values.
FourthAccountStatus : nvarchar(300)
Fourth status associated with the guarantor account. For Epic data, this column can contain Payment Plan, Collections, or other values.
FifthAccountStatus : nvarchar(300)
Fifth status associated with the guarantor account. For Epic data, this column can contain Payment Plan, Collections, or other values.
SixthAccountStatus : nvarchar(300)
Sixth status associated with the guarantor account. For Epic data, this column can contain Payment Plan, Collections, or other values.
PropensityToPay : nvarchar(300)
The likelihood a guarantor will pay
CreditScore : int
The guarantor's credit score
IsInstitutional : tinyint
1/0 column that indicates whether or not this is an institutional account. This column returns 1 if this is an institutional account. Otherwise, it returns 0.
StartDate : date
The date of the execution that loaded a change to at least one column that has snapshot tracking enabled. For the first row loaded for the record this will be an arbitrary date in the past.
EndDate : date
The day before the next StartDate for the record. For the IsCurrent = 1 row, this will be an arbitrary date in the future.
IsCurrent : bit
1 indicates this is the most recent information, otherwise 0
```

---

## HospitalAdmissionFact

**Extracted:** 2025-07-23 00:08:46
**Content Length:** 14670 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class F Fact
Try It
HomeHealthCertificationPeriodFact
The home health certification period fact contains information about home health certification periods. Each row represents a certification period for a home health patient. Change Type: Non-Snapshot
Columns
HomeHealthCertificationPeriodKey : bigint
Surrogate key used to uniquely identify the record
PatientKey : bigint
Links to PatientDim
Patient associated with the home health certification period
PatientDurableKey : bigint
Links to PatientDim
Patient associated with the home health certification period
EncounterKey : bigint
Links to EncounterFact
Encounter that created the home health certification period
EpisodeKey : bigint
Links to EpisodeFact
Home Health episode (HSB) this certification period is in
HomeCareEpisodeKey : bigint
Links to HomeCareEpisodeFact
The home care episode (HSB) that this certification period is in.
CertificationStartDateKey : bigint
Links to DateDim
Date when the certification period started
CertificationEndDateKey : bigint
Links to DateDim
Date when the certification period ended
StartOfCareDateKey : bigint
Links to DateDim
Home Health start of care date for this patient
DischargeDateKey : bigint
Links to DateDim
Date when patient was discharged from Home Health
PlanOfCarePhysicianKey : bigint
Links to ProviderDim
The M0018-Plan of Care physician for this certification period
PlanOfCarePhysicianDurableKey : bigint
Links to ProviderDim
The M0018-Plan of Care physician for this certification period
FirstCaseManagerKey : bigint
Links to ProviderDim
First case manager assigned to this patient's home health care team at the start of this certification period. If there is a tie, the first provider listed of that type will be used.
FirstCaseManagerDurableKey : bigint
Links to ProviderDim
First case manager assigned to this patient's home health care team at the start of this certification period. If there is a tie, the first provider listed of that type will be used.
LongestCaseManagerKey : bigint
Links to ProviderDim
The case manager assigned to the care team for the longest duration during this certification period. If there is a tie, the first provider listed of that type will be used.
LongestCaseManagerDurableKey : bigint
Links to ProviderDim
The case manager assigned to the care team for the longest duration during this certification period. If there is a tie, the first provider listed of that type will be used.
FirstRegisteredNurseKey : bigint
Links to ProviderDim
First registered nurse at the start of this certification period. For Epic data, this is option 1 in EAF 27876. If there is a tie, the first provider listed of that type will be used. HH_CREDENTIAL_MAPPING, PROV_CREDENTIALING, and HH_DISCIPLINE_MAPPING are used to determine if a provider qualifies as a registered nurse.
FirstRegisteredNurseDurableKey : bigint
Links to ProviderDim
First registered nurse at the start of this certification period. For Epic data, this is option 1 in EAF 27876. If there is a tie, the first provider listed of that type will be used. HH_CREDENTIAL_MAPPING, PROV_CREDENTIALING, and HH_DISCIPLINE_MAPPING are used to determine if a provider qualifies as a registered nurse.
LongestRegisteredNurseKey : bigint
Links to ProviderDim
The registered nurse assigned to the care team for the longest duration during this certification period. If there is a tie, the first provider listed of that type will be used. HH_CREDENTIAL_MAPPING, PROV_CREDENTIALING, and HH_DISCIPLINE_MAPPING are used to determine if a provider qualifies as a registered nurse.
LongestRegisteredNurseDurableKey : bigint
Links to ProviderDim
The registered nurse assigned to the care team for the longest duration during this certification period. If there is a tie, the first provider listed of that type will be used. HH_CREDENTIAL_MAPPING, PROV_CREDENTIALING, and HH_DISCIPLINE_MAPPING are used to determine if a provider qualifies as a registered nurse.
FirstLicensedPracticalNurseKey : bigint
Links to ProviderDim
First Licensed Practical Nurse at the start of this certification period. For Epic data, this is option 2 in EAF 27876. If there is a tie, the first provider listed of that type will be used. HH_CREDENTIAL_MAPPING, PROV_CREDENTIALING, and HH_DISCIPLINE_MAPPING are used to determine if a provider qualifies as a Licensed Practical Nurse.
FirstLicensedPracticalNurseDurableKey : bigint
Links to ProviderDim
First Licensed Practical Nurse at the start of this certification period. For Epic data, this is option 2 in EAF 27876. If there is a tie, the first provider listed of that type will be used. HH_CREDENTIAL_MAPPING, PROV_CREDENTIALING, and HH_DISCIPLINE_MAPPING are used to determine if a provider qualifies as a Licensed Practical Nurse.
LongestLicensedPracticalNurseKey : bigint
Links to ProviderDim
The licensed practical nurse assigned to the care team for the longest duration during this certification period. If there is a tie, the first provider listed of that type will be used. HH_CREDENTIAL_MAPPING, PROV_CREDENTIALING, and HH_DISCIPLINE_MAPPING are used to determine if a provider qualifies as a Licensed Practical Nurse.
LongestLicensedPracticalNurseDurableKey : bigint
Links to ProviderDim
The licensed practical nurse assigned to the care team for the longest duration during this certification period. If there is a tie, the first provider listed of that type will be used. HH_CREDENTIAL_MAPPING, PROV_CREDENTIALING, and HH_DISCIPLINE_MAPPING are used to determine if a provider qualifies as a Licensed Practical Nurse.
FirstPhysicalTherapistKey : bigint
Links to ProviderDim
First physical therapist at the start of this certification period. For Epic data, this is option 3 in EAF 27876. If there is a tie, the first provider listed of that type will be used. HH_CREDENTIAL_MAPPING, PROV_CREDENTIALING, and HH_DISCIPLINE_MAPPING are used to determine if a provider qualifies as a physical therapist.
FirstPhysicalTherapistDurableKey : bigint
Links to ProviderDim
First physical therapist at the start of this certification period. For Epic data, this is option 3 in EAF 27876. If there is a tie, the first provider listed of that type will be used. HH_CREDENTIAL_MAPPING, PROV_CREDENTIALING, and HH_DISCIPLINE_MAPPING are used to determine if a provider qualifies as a physical therapist.
LongestPhysicalTherapistKey : bigint
Links to ProviderDim
The physical therapist assigned to the care team for the longest duration during this certification period. If there is a tie, the first provider listed of that type will be used. HH_CREDENTIAL_MAPPING, PROV_CREDENTIALING, and HH_DISCIPLINE_MAPPING are used to determine if a provider qualifies as a physical therapist.
LongestPhysicalTherapistDurableKey : bigint
Links to ProviderDim
The physical therapist assigned to the care team for the longest duration during this certification period. If there is a tie, the first provider listed of that type will be used. HH_CREDENTIAL_MAPPING, PROV_CREDENTIALING, and HH_DISCIPLINE_MAPPING are used to determine if a provider qualifies as a physical therapist.
FirstOccupationalTherapistKey : bigint
Links to ProviderDim
First occupational therapist at the start of this certification period. For Epic data, this is option 5 in EAF 27876. If there is a tie, the first provider listed of that type will be used. HH_CREDENTIAL_MAPPING, PROV_CREDENTIALING, and HH_DISCIPLINE_MAPPING are used to determine if a provider qualifies as a occupational therapist.
FirstOccupationalTherapistDurableKey : bigint
Links to ProviderDim
First occupational therapist at the start of this certification period. For Epic data, this is option 5 in EAF 27876. If there is a tie, the first provider listed of that type will be used. HH_CREDENTIAL_MAPPING, PROV_CREDENTIALING, and HH_DISCIPLINE_MAPPING are used to determine if a provider qualifies as a occupational therapist.
LongestOccupationalTherapistKey : bigint
Links to ProviderDim
The occupational therapist assigned to the care team for the longest duration during this certification period. If there is a tie, the first provider listed of that type will be used. HH_CREDENTIAL_MAPPING, PROV_CREDENTIALING, and HH_DISCIPLINE_MAPPING are used to determine if a provider qualifies as a occupational therapist.
LongestOccupationalTherapistDurableKey : bigint
Links to ProviderDim
The occupational therapist assigned to the care team for the longest duration during this certification period. If there is a tie, the first provider listed of that type will be used. HH_CREDENTIAL_MAPPING, PROV_CREDENTIALING, and HH_DISCIPLINE_MAPPING are used to determine if a provider qualifies as a occupational therapist.
FirstSpeechLanguagePathologistKey : bigint
Links to ProviderDim
First speech language pathologist at the start of this certification period. For Epic data, this is option 7 in EAF 27876. If there is a tie, the first provider listed of that type will be used. HH_CREDENTIAL_MAPPING, PROV_CREDENTIALING, and HH_DISCIPLINE_MAPPING are used to determine if a provider qualifies as a speech language pathologist.
FirstSpeechLanguagePathologistDurableKey : bigint
Links to ProviderDim
First speech language pathologist at the start of this certification period. For Epic data, this is option 7 in EAF 27876. If there is a tie, the first provider listed of that type will be used. HH_CREDENTIAL_MAPPING, PROV_CREDENTIALING, and HH_DISCIPLINE_MAPPING are used to determine if a provider qualifies as a speech language pathologist.
LongestSpeechLanguagePathologistKey : bigint
Links to ProviderDim
The speech language pathologist assigned to the care team for the longest duration during this certification period. If there is a tie, the first provider listed of that type will be used. HH_CREDENTIAL_MAPPING, PROV_CREDENTIALING, and HH_DISCIPLINE_MAPPING are used to determine if a provider qualifies as a speech language pathologist.
LongestSpeechLanguagePathologistDurableKey : bigint
Links to ProviderDim
The speech language pathologist assigned to the care team for the longest duration during this certification period. If there is a tie, the first provider listed of that type will be used. HH_CREDENTIAL_MAPPING, PROV_CREDENTIALING, and HH_DISCIPLINE_MAPPING are used to determine if a provider qualifies as a speech language pathologist.
FirstMedicalSocialWorkerKey : bigint
Links to ProviderDim
First medical social worker at the start of this certification period. For Epic data, this is option 8 in EAF 27876. If there is a tie, the first provider listed of that type will be used. HH_CREDENTIAL_MAPPING, PROV_CREDENTIALING, and HH_DISCIPLINE_MAPPING are used to determine if a provider qualifies as a medical social worker.
FirstMedicalSocialWorkerDurableKey : bigint
Links to ProviderDim
First medical social worker at the start of this certification period. For Epic data, this is option 8 in EAF 27876. If there is a tie, the first provider listed of that type will be used. HH_CREDENTIAL_MAPPING, PROV_CREDENTIALING, and HH_DISCIPLINE_MAPPING are used to determine if a provider qualifies as a medical social worker.
LongestMedicalSocialWorkerKey : bigint
Links to ProviderDim
The medical social worker assigned to the care team for the longest duration during this certification period. If there is a tie, the first provider listed of that type will be used. HH_CREDENTIAL_MAPPING, PROV_CREDENTIALING, and HH_DISCIPLINE_MAPPING are used to determine if a provider qualifies as a medical social worker.
LongestMedicalSocialWorkerDurableKey : bigint
Links to ProviderDim
The medical social worker assigned to the care team for the longest duration during this certification period. If there is a tie, the first provider listed of that type will be used. HH_CREDENTIAL_MAPPING, PROV_CREDENTIALING, and HH_DISCIPLINE_MAPPING are used to determine if a provider qualifies as a medical social worker.
GuarantorKey : bigint
Links to GuarantorDim
Guarantor associated with this certification period
GuarantorDurableKey : bigint
Links to GuarantorDim
Guarantor associated with this certification period
PrimaryCoverageKey : bigint
Links to CoverageDim
Primary coverage for this certification period
IntakeDepartmentKey : bigint
Links to DepartmentDim
Intake department for this certification period
PrimaryDiagnosisKey : bigint
Links to DiagnosisDim
Primary diagnosis for this certification period
HomeCareCity : nvarchar(300)
Patient's home care city from the Home Health episode
HomeCareState : nvarchar(300)
Patient's home care state from the Home Health episode
HomeCareCounty : nvarchar(300)
Patient's home care county from the Home Health episode
HomeCareZip : nvarchar(50)
Patient's home care zip code from the Home Health episode
EpisodeStatus : nvarchar(300)
The current status of the Home Health episode
PatientStatusDisposition : nvarchar(300)
Patient's Home Health Status/Disposition
CertificationPeriodContactType : nvarchar(300)
Type of contact that created this certification period
DischargeReason : nvarchar(300)
Reason the patient was discharged from Home Health
TriageCode : nvarchar(300)
Triage code for the patient from home health intake
TeamAssignment : nvarchar(300)
The care team that this patient is assigned to
HippsCode : nvarchar(50)
Contains the HIPPS code for the charge based line of the first account on the certification period.
CaseMixWeight : nvarchar(50)
Patient's case mix weight for the charge based line of the first account in this certification period. Divide the value by 100 to get a percentage.
PaymentSource : nvarchar(300)
First payment source
PaymentCase : nvarchar(300)
Contains the payment case for the account (2 = LUPA) for the charge based line of the first account in this certification period
PlaceOfServiceType : nvarchar(300)
The initial place of service type for this certification period
M1910InitialFallRisk : nvarchar(50)
Has this patient had a multi-factor Fall Risk Assessment this certification period?
J1800HadFalls : nvarchar(50)
Has the patient had any falls since SOC/ROC.
J1900ANoInjuryFalls : nvarchar(50)
Number of falls since SOC/ROC, whichever is more recent, with no injury.
J1900BInjuryFalls : nvarchar(50)
Number of falls since SOC/ROC, whichever is more recent, with injury.
J1900CMajorInjuryFalls : nvarchar(50)
Number of falls since SOC/ROC, whichever is more recent, with major injury.
HospitalAccountEpicId : nvarchar(50)
Epic ID of the first hospital account associated with this certification period (HAR record)
EncounterEpicCsn : numeric(18,0)
Epic contact serial number (CSN) for the assessment that created the certification period
```

---

## HospitalFallFact

**Extracted:** 2025-07-23 00:09:02
**Content Length:** 1292 characters

**Content:**
```
HospitalFallFact
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Fact
Try It
HospitalFallFact
The hospital fall fact table contains information about in-hospital falls. Each row represents an in-hospital fall. Change Type: Non-Snapshot
Columns
HospitalFallKey : bigint
Surrogate key used to uniquely identify the record
EncounterKey : bigint
Links to EncounterFact
Patient encounter during which the fall occurred
PatientDurableKey : bigint
Links to PatientDim
Patient who fell
FlowsheetRowKey : bigint
Links to FlowsheetRowDim
Flowsheet row where fall was documented
TakenByEmployeeDurableKey : bigint
Links to EmployeeDim
Employee who took the flowsheet value
FallDateKey : bigint
Links to DateDim
Date during which the fall happened
FallTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the fall happened
FallInstant : datetime
Instant the fall happened
FlowsheetValue : nvarchar(2600)
Value documented in the flowsheet row
Comment : nvarchar(350)
Comment associated with the fall
ExternalFallEventId : nvarchar(50)
ID of an in-hospital fall event provided by the output of an incident reporting system
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## ImagingFact

**Extracted:** 2025-07-23 00:09:18
**Content Length:** 1275 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Fact
Try It
HospitalFallFact
The hospital fall fact table contains information about in-hospital falls. Each row represents an in-hospital fall. Change Type: Non-Snapshot
Columns
HospitalFallKey : bigint
Surrogate key used to uniquely identify the record
EncounterKey : bigint
Links to EncounterFact
Patient encounter during which the fall occurred
PatientDurableKey : bigint
Links to PatientDim
Patient who fell
FlowsheetRowKey : bigint
Links to FlowsheetRowDim
Flowsheet row where fall was documented
TakenByEmployeeDurableKey : bigint
Links to EmployeeDim
Employee who took the flowsheet value
FallDateKey : bigint
Links to DateDim
Date during which the fall happened
FallTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when the fall happened
FallInstant : datetime
Instant the fall happened
FlowsheetValue : nvarchar(2600)
Value documented in the flowsheet row
Comment : nvarchar(350)
Comment associated with the fall
ExternalFallEventId : nvarchar(50)
ID of an in-hospital fall event provided by the output of an incident reporting system
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## ImagingPathologyBiopsyRepeatReasonBridge

**Extracted:** 2025-07-23 00:09:38
**Content Length:** 18928 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class G Fact
Try It
ImagingFact
The imaging fact contains information about imaging studies. Each row represents an imaging study. Change Type: Non-Snapshot
Columns
ImagingKey : bigint
Surrogate key used to uniquely identify the record
PatientKey : bigint
Links to PatientDim
Patient associated with the imaging study
PatientDurableKey : bigint
Links to PatientDim
Patient associated with the imaging study
OrderingEncounterKey : bigint
Links to EncounterFact
Encounter during which the imaging study was ordered
PerformingEncounterKey : bigint
Links to EncounterFact
Encounter during which the study was performed
ExamStartDateKey : bigint
Links to DateDim
Date when the exam for the study began
ExamEndDateKey : bigint
Links to DateDim
Date when the exam for the study ended
OrderingDateKey : bigint
Links to DateDim
The date when the parent order for the imaging study was put into the system
OrderingTimeOfDayKey : bigint
Links to TimeOfDayDim
The time of day when the parent order for the imaging study was put into the system
ReleasedDateKey : bigint
Links to DateDim
The date when the current order for the imaging study was released
ReleasedTimeOfDayKey : bigint
Links to TimeOfDayDim
The time of day when the current order for the imaging study was released
ScheduledExamDateKey : bigint
Links to DateDim
Date when the exam for the study was scheduled to be performed
FinalizingDateKey : bigint
Links to DateDim
Date when the study was finalized
DictatingDateKey : bigint
Links to DateDim
Date when the study was first dictated
TranscribingDateKey : bigint
Links to DateDim
Date when the study was first transcribed
PreliminaryDateKey : bigint
Links to DateDim
Date when the study was first marked as preliminary
TechCompleteDateKey : bigint
Links to DateDim
Date when the study was first marked as tech complete
PerformedProcedureStepEndDateKey : bigint
Links to DateDim
Date when the Digital Imaging and Communications in Medicine (DICOM) Performed Procedure Step (PPS) for the study ended. For Epic data, if a modality sends multiple PPS end times, this will be the maximum.
PerformedProcedureStepStartDateKey : bigint
Links to DateDim
Date when the Digital Imaging and Communications in Medicine (DICOM) Performed Procedure Step (PPS) for the study started. For Epic data, if a modality sends multiple PPS start times, this will be the minimum.
CancelingDateKey : bigint
Links to DateDim
Date when the study was canceled
CheckInDateKey : bigint
Links to DateDim
Date when the patient was checked in. For Epic data, if the check-in action is performed multiple times, this will be the first check-in time that was not canceled.
ScheduledOnDateKey : bigint
Links to DateDim
Date when the appointment or case for the order was scheduled. For Epic data, this is the date the appointment was made (for non-invasive exams) or the date the case was added to the schedule (for invasive procedures). In the event an appointment or case is rescheduled or changed, this column contains the original date it was scheduled.
ProtocolledDateKey : bigint
Links to DateDim
Date when the study was last protocolled
UnsuccessfulAttemptDateKey : bigint
Links to DateDim
Date when the study was flagged as an unsuccessful attempt
OrderingDepartmentKey : bigint
Links to DepartmentDim
Login department of the user placing the study order
OrderingContactDepartmentKey : bigint
Links to DepartmentDim
Department of the ordering contact for the study
PerformingDepartmentKey : bigint
Links to DepartmentDim
Department where study procedure was performed. For Epic data, in a panel, this corresponds to the first appointment. In a joint appointment, this is the department listed first. For invasive imaging procedures, this is the department linked to the invasive location.
OrderableProcedureDurableKey : bigint
Links to ProcedureDim
Orderable procedure associated with the study
FirstProcedureKey : bigint
Links to ProcedureDim
First procedure associated with the study
FirstProcedureDurableKey : bigint
Links to ProcedureDim
First procedure associated with the study
SecondProcedureKey : bigint
Links to ProcedureDim
Second procedure associated with the study
SecondProcedureDurableKey : bigint
Links to ProcedureDim
Second procedure associated with the study
ThirdProcedureKey : bigint
Links to ProcedureDim
Third procedure associated with the study
ThirdProcedureDurableKey : bigint
Links to ProcedureDim
Third procedure associated with the study
FourthProcedureKey : bigint
Links to ProcedureDim
Fourth procedure associated with the study
FourthProcedureDurableKey : bigint
Links to ProcedureDim
Fourth procedure associated with the study
OriginalProcedureKey : bigint
Links to ProcedureDim
Procedure associated with the original study. This column is only populated if the procedure was changed.
OriginalProcedureDurableKey : bigint
Links to ProcedureDim
Procedure associated with the original study. This column is only populated if the procedure was changed.
ResourceKey : bigint
Links to ResourceDim
Scheduled resource associated with the study
PerformingProviderKey : bigint
Links to ProviderDim
Scheduled provider associated with the study
PerformingProviderDurableKey : bigint
Links to ProviderDim
Scheduled provider associated with the study
OrderingProviderKey : bigint
Links to ProviderDim
Ordering provider associated with the study. For Epic data, this column holds the ordering provider if it is specified, otherwise the referring provider, otherwise the authorizing provider.
OrderingProviderDurableKey : bigint
Links to ProviderDim
Ordering provider associated with the study. For Epic data, this column holds the ordering provider if it is specified, otherwise the referring provider, otherwise the authorizing provider.
AuthorizingProviderKey : bigint
Links to ProviderDim
Provider authorizing the study
AuthorizingProviderDurableKey : bigint
Links to ProviderDim
Provider authorizing the study
OriginalAuthorizingProviderKey : bigint
Links to ProviderDim
Provider authorizing the original study. This column is only populated if the procedure was changed.
OriginalAuthorizingProviderDurableKey : bigint
Links to ProviderDim
Provider authorizing the original study. This column is only populated if the procedure was changed.
FinalizingProviderKey : bigint
Links to ProviderDim
Provider who finalized the study
FinalizingProviderDurableKey : bigint
Links to ProviderDim
Provider who finalized the study
TechnologistEmployeeKey : bigint
Links to EmployeeDim
Technologist associated with the study
TechnologistEmployeeDurableKey : bigint
Links to EmployeeDim
Technologist associated with the study
InterestingStudyEmployeeKey : bigint
Links to EmployeeDim
User who flagged the order as an interesting study
InterestingStudyEmployeeDurableKey : bigint
Links to EmployeeDim
User who flagged the order as an interesting study
DictatingEmployeeKey : bigint
Links to EmployeeDim
User who dictated the study
DictatingEmployeeDurableKey : bigint
Links to EmployeeDim
User who dictated the study
TranscribingEmployeeKey : bigint
Links to EmployeeDim
User who transcribed the study
TranscribingEmployeeDurableKey : bigint
Links to EmployeeDim
User who transcribed the study
PreliminaryEmployeeKey : bigint
Links to EmployeeDim
User who marked the study as preliminary
PreliminaryEmployeeDurableKey : bigint
Links to EmployeeDim
User who marked the study as preliminary
TechCompleteEmployeeDurableKey : bigint
Links to EmployeeDim
User who marked the study as tech complete
CancelingEmployeeKey : bigint
Links to EmployeeDim
User who canceled the study
CancelingEmployeeDurableKey : bigint
Links to EmployeeDim
User who canceled the study
ProtocollingEmployeeKey : bigint
Links to EmployeeDim
User who last protocolled the study
ProtocollingEmployeeDurableKey : bigint
Links to EmployeeDim
User who last protocolled the study
ReadingProviderComboKey : bigint
Links to ProviderBridge
All reading providers associated with the imaging study
ImagingOrderEpicId : nvarchar(50)
Epic ID of the imaging order. This column identifies order (ORD) records.
AccessionNumber : nvarchar(300)
Accession number associated with the study
StudyStatus : nvarchar(300)
Status of the study
PatientClass : nvarchar(300)
ADT classification of the patient for the study
BasePatientClass : nvarchar(300)
Base class of the patient for the study
OrderClass : nvarchar(300)
Order Class of the study
OrderType : nvarchar(300)
The order type for an imaging study
OrderPriority : nvarchar(300)
Ordering priority for the study
InterestingStudyReason : nvarchar(300)
Reason for which the study was marked interesting
FirstRepeatReason : nvarchar(300)
First repeat reason for the study. For Epic data, this is the repeat reason with the largest number of repeats.
SecondRepeatReason : nvarchar(300)
Second repeat reason for the study. For Epic data, this is the repeat reason with the second largest number of repeats.
ThirdRepeatReason : nvarchar(300)
Third repeat reason for the study. For Epic data, this is the repeat reason with the third largest number of repeats.
EdInterpretation : nvarchar(300)
ED interpretation for the procedure
Discrepancy : nvarchar(300)
Discrepancy associated with the exam result
DiscrepancyComment : nvarchar(3500)
Comment associated with the discrepancy
BreastOverallAssessment : nvarchar(300)
Last overall breast assessment associated with the study
BreastRightAssessment : nvarchar(300)
Last right breast assessment associated with the study
BreastLeftAssessment : nvarchar(300)
Last left breast assessment associated with the study
BreastOverallIncompleteReason : nvarchar(300)
Overall incomplete reason documented on a breast imaging study that specifies why the assessment is incomplete. This column will only be populated if the study has a BI-RADS assessment of 0 - Incomplete.
BreastOverallBreastComp : nvarchar(300)
The most recently documented overall breast composition of the study. This is entered when reading a mammogram study.
BreastRightBreastComp : nvarchar(300)
The most recently documented right breast composition of the study. This is entered when reading a mammogram study.
BreastLeftBreastComp : nvarchar(300)
The most recently documented left breast composition of the study. This is entered when reading a mammogram study.
BreastOverallTissueComp : nvarchar(300)
The most recently documented overall tissue composition of the study. This is entered when reading an ultrasound study.
BreastRightTissueComp : nvarchar(300)
The most recently documented right tissue composition of the study. This is entered when reading an ultrasound study.
BreastLeftTissueComp : nvarchar(300)
The most recently documented left tissue composition of the study. This is entered when reading an ultrasound study.
BreastOverallFGT : nvarchar(300)
The most recently documented overall amount of fibroglandular tissue (FGT) associated with the study. This is entered when reading a Magnetic Resonance study.
BreastRightFGT : nvarchar(300)
The most recently documented right amount of fibroglandular tissue (FGT) associated with the study. This is entered when reading a Magnetic Resonance study.
BreastLeftFGT : nvarchar(300)
The most recently documented left amount of fibroglandular tissue (FGT) associated with the study. This is entered when reading a Magnetic Resonance study.
BreastOverallBPE : nvarchar(300)
The most recently documented overall background parenchymal enhancement (BPE) associated with the study. This is entered when reading a Magnetic Resonance study.
BreastRightBPE : nvarchar(300)
The most recently documented right background parenchymal enhancement (BPE) associated with the study. This is entered when reading a Magnetic Resonance study.
BreastLeftBPE : nvarchar(300)
The most recently documented left background parenchymal enhancement (BPE) associated with the study. This is entered when reading a Magnetic Resonance study.
BreastSymmetricBPE : nvarchar(300)
The most recently documented symmetric background parenchymal enhancement (BPE) associated with the study. This is entered when reading a Magnetic Resonance study.
LungAssessment : nvarchar(300)
Last lung screening assessment value associated with the study
LungIncompleteReason : nvarchar(300)
Incomplete reason documented on a lung screening study that specifies why the assessment is incomplete. This column will only be populated if the study has a Lung-RADS assessment of 0 - Incomplete.
OrderingInstant : datetime
The date and time when the parent order for the imaging study was put into the system
OrderingInstantMTZ : datetime
The date and time when the parent order for the imaging study was put into the system, in the current order's time zone
ReleasedInstant : datetime
The date and time when the current order for the imaging study was released
ExpectedExamStartInstant : datetime
Date and time when the procedure is expected to start.
ExamStartInstant : datetime
Date and time when the procedure began
ExamEndInstant : datetime
Date and time when the procedure ended
ExamEndInstantUtc : datetime
Date and time when the procedure ended in UTC
ScheduledExamInstant : datetime
Date and time when the exam was scheduled to be performed
FinalizingInstant : datetime
Date and time when the study was finalized
FinalizingInstantUtc : datetime
Date and time when the study was finalized in UTC
DictatingInstant : datetime
Date and time when the study was first dictated
DictatingInstantUtc : datetime
Date and time when the study was first dictated in UTC
TranscribingInstant : datetime
Date and time when the study was first transcribed
PreliminaryInstant : datetime
Date and time when the study was first marked as preliminary
PreliminaryInstantUtc : datetime
Date and time when the study was first marked as preliminary in UTC
TechCompleteInstant : datetime
Date and time when the study was first marked as tech complete
TechCompleteInstantUtc : datetime
Date and time when the study was first marked as tech complete in UTC
PerformedProcedureStepStartInstant : datetime
Date and time when the Digital Imaging and Communications in Medicine (DICOM) Performed Procedure Step (PPS) started. For Epic data, if a modality sends multiple PPS start times, this will be the minimum.
PerformedProcedureStepEndInstant : datetime
Date and time when the Digital Imaging and Communications in Medicine (DICOM) Performed Procedure Step (PPS) ended. For Epic data, if a modality sends multiple PPS end times, this will be the maximum.
CancelingInstant : datetime
Date and time when the study was canceled
CheckInInstant : datetime
Date and time when the patient was checked in. For Epic data, if the check-in action is performed multiple times, this will be the first check-in time that was not canceled.
ScheduledOnInstant : datetime
Date and time when the appointment or case was scheduled. For Epic data, this is the date and time the appointment was made (for non-invasive exams) or the date and time the case was added to the schedule (for invasive procedures). In the event an appointment or case is rescheduled or changed, this column contains the original date and time it was scheduled.
ProtocolledInstant : datetime
Date and time when the study was last protocolled
UnsuccessfulAttemptInstant : datetime
Date and time when the study was flagged as an unsuccessful attempt
PatientBMIAtExam : numeric(18,2)
Most recent patient BMI preceding the end exam instant, within the system's age-based height and weight lookback ranges
PatientHeightAtExam : numeric(18,2)
Most recent patient height (centimeters) preceding the end exam instant, within the system's age-based height lookback ranges
PatientWeightAtExam : numeric(18,2)
Most recent patient weight (grams) preceding the end exam instant, within the system's age-based weight lookback ranges
IsPrimaryOrder : tinyint
1/0 column that indicates whether an order is the primary order in a study group
Canceled : tinyint
1/0 column that indicates whether the study is canceled. This column returns 1 if the study was canceled and 0 if it was not canceled
WetRead : tinyint
1/0 column that indicates whether a wet read was performed on the order. This column returns 1 if a wet read was performed and 0 if a wet read was not performed.
IsAbnormal : tinyint
1/0 column that indicates whether the study contains abnormal results. This column returns 1 if there are abnormal results and 0 if there are not abnormal results.
AutoFinalized : tinyint
1/0 column that indicates whether the study was auto-finalized. This column returns 1 if the study was auto-finalized and 0 if it was not auto-finalized.
HasClinicallySignificantLungFinding : tinyint
1/0 column that indicates whether the study had the Lung-RADS S modifier for Clinically Significant Findings documented by a reading physician. This column returns 1 if the study had the S modifier documented and 0 if it did not have the S modifier documented.
HasMultipleAppointments : tinyint
1/0 column indicating whether the order for a study has multiple appointments associated with it
HasPriorLungCancer : tinyint
1/0 column that indicates whether the study had the Lung-RADS C modifier based on the patient's history. This column returns 1 if the patient had a history of lung cancer and 0 if they did not.
IsOverread : tinyint
1/0 column that indicates whether the study is an overread (or second read) for another imaging study. This column returns 1 if the study is an overread and 0 if it is not an overread.
IsUnsuccessfulAttempt : tinyint
1/0 column that indicates whether the study was flagged as an unsuccessful attempt. This column returns 1 if the study was flagged as an unsuccessful attempt and 0 if the study was not flagged as an unsuccessful attempt.
IsSelfReferred : tinyint
1/0 column that determines if a study is self-referred by the patient. This column returns 1 if the study is self-referred, and 0 if the study is not self-referred.
IsAdultEchoStudy : tinyint
1/0 column the determines if a study is an adult echo study. This column returns 1 if the study is an adult echo study, and 0 if the study is not an adult echo study.
IsCardiacNuclearMedicineStudy : tinyint
1/0 column that indicates whether the study is a cardiac nuclear medicine study. This column returns 1 if the study is a cardiac nuclear medicine study, and 0 if it is not a cardiac nuclear medicine study.
IsBarcodeVerified : tinyint
1/0 column that indicates whether there was a successful barcode scan for the study
IsObservation : tinyint
1/0 column that indicates whether the patient class at the time of the study was observation
PerformedProcedureStepStartToEnd : int
The time, in minutes, between the study's Digital Imaging and Communications in Medicine (DICOM) Performed Procedure Step (PPS) start and end steps.
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## ImagingPathologyCodeBridge

**Extracted:** 2025-07-23 00:09:54
**Content Length:** 569 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class A Helper
Try It
ImagingPathologyBiopsyRepeatReasonBridge
The imaging pathology biopsy repeat reason bridge contains unique combinations of biopsy repeat reasons associated with imaging pathology results. Each row represents a pathology biopsy repeat reason in a combination. Change Type: Non-Snapshot
Columns
ImagingPathologyBiopsyRepeatReasonComboKey : bigint
Surrogate key used to uniquely identify the record
CategoryKey : bigint
Links to CategoryDim
The destination key
```

---

## ImagingPathologyResultFact

**Extracted:** 2025-07-23 00:10:09
**Content Length:** 503 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class A Helper
Try It
ImagingPathologyCodeBridge
The imaging pathology code bridge contains unique combinations of pathology codes associated with imaging pathology results. Each row represents a pathology code in a combination. Change Type: Non-Snapshot
Columns
ImagingPathologyCodeComboKey : bigint
Surrogate key used to uniquely identify the record
CategoryKey : bigint
Links to CategoryDim
The destination key
```

---

## ImagingQualityTrackingFact

**Extracted:** 2025-07-23 00:10:25
**Content Length:** 1317 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Fact
Try It
ImagingPathologyResultFact
The imaging pathology result fact contains information about pathology results. Pathology results are a pathologist's evaluations of biopsied tissue. Each row represents a pathology result. Change Type: Non-Snapshot
Columns
ImagingPathologyResultKey : bigint
Surrogate key used to uniquely identify the record
PathologyBiopsyDateKey : bigint
Links to DateDim
The biopsy date
PatientDurableKey : bigint
Links to PatientDim
The patient associated with the pathology result
ImagingPathologyCodeComboKey : bigint
Links to ImagingPathologyCodeBridge
The code of the pathology
BreastImagingPatientLesionKey : bigint
Links to BreastImagingPatientLesionDim
The breast imaging lesion associated with the pathology result
PathologyBiopsyDate : date
The biopsy date
PathologyClassification : nvarchar(300)
The classification of the pathology code. For Epic data, this column can contain Benign, High Risk, Malignant, or other values.
ImagingPathologyResultEpicId : nvarchar(50)
Epic ID of the pathology result. This column identifies finding (RES) records.
ImagingOrderEpicId : nvarchar(50)
Epic ID of the order the pathology result is attached to. This column identifies order (ORD) records
```

---

## ImagingScreeningProgramFact

**Extracted:** 2025-07-23 00:10:41
**Content Length:** 1414 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Fact
Try It
ImagingScreeningProgramFact
The imaging screening program fact contains information about patients in imaging screening programs. Each row represents an active period for a patient in an imaging screening program. Change Type: Non-Snapshot
Columns
ImagingScreeningProgramKey : bigint
Surrogate key used to uniquely identify the record
PatientDurableKey : bigint
Links to PatientDim
The patient being screened
ActiveDateKey : bigint
Links to DateDim
The date the patient became active in the screening program
ExitDateKey : bigint
Links to DateDim
The date the patient was no longer active in the screening program
Type : nvarchar(300)
The type of screening program. For Epic data this column can contain Lung Screening, Breast Screening, or other values.
Status : nvarchar(300)
The patient's latest status in the screening program for this active period. For Epic data, this can contain Active, Inactive, or other values.
ExitReason : nvarchar(300)
The reason the patient was no longer active in the screening program
ActiveDate : date
The date the patient became active in the screening program
ExitDate : date
The date the patient was no longer active in the screening program
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## ImagingTextFact

**Extracted:** 2025-07-23 00:10:56
**Content Length:** 887 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Fact
Try It
ImagingTextFact
The imaging text fact contains textual information about imaging studies. This full text data extends the imaging fact and is intended for use with full text searches. Each row represents an imaging study. Change Type: Non-Snapshot
Columns
ImagingTextKey : bigint
Surrogate key used to uniquely identify the record
ImagingKey : bigint
Links to ImagingFact
Imaging study associated with this full text data
Narrative : nvarchar(MAX)
Narrative result for the imaging study in string format
Impression : nvarchar(MAX)
Impression for the imaging study in string format
Addenda : nvarchar(MAX)
Addenda for the imaging study in string format
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## ImmunizationDim

**Extracted:** 2025-07-23 00:11:12
**Content Length:** 887 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Fact
Try It
ImagingTextFact
The imaging text fact contains textual information about imaging studies. This full text data extends the imaging fact and is intended for use with full text searches. Each row represents an imaging study. Change Type: Non-Snapshot
Columns
ImagingTextKey : bigint
Surrogate key used to uniquely identify the record
ImagingKey : bigint
Links to ImagingFact
Imaging study associated with this full text data
Narrative : nvarchar(MAX)
Narrative result for the imaging study in string format
Impression : nvarchar(MAX)
Impression for the imaging study in string format
Addenda : nvarchar(MAX)
Addenda for the imaging study in string format
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## ImmunizationEventFact

**Extracted:** 2025-07-23 00:11:27
**Content Length:** 817 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Dim
Try It
ImmunizationDim
The immunization dimension contains information about immunizations. Each row represents an immunization. Change Type: Non-Snapshot
Columns
ImmunizationKey : bigint
Surrogate key used to uniquely identify the record
ImmunizationEpicId : nvarchar(50)
Epic ID of the immunization. This column identifies immunization (LIM) records.
Name : nvarchar(200)
Name of the immunization
Type : nvarchar(300)
Immunization type that defines the group of people who received the immunization. For Epic data, this column can contain Adult or Pediatric.
MedAdminType : nvarchar(300)
The administration type for the immunization. It can be either an immunization, an immunotherapy admin or a medication admin.
```

---

## ImmunizationMappingDim

**Extracted:** 2025-07-23 00:11:43
**Content Length:** 2576 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class D Fact
Try It
ImmunizationEventFact
The immunization event fact contains information about immunizations for patients. Each row represents an immunization given to a patient. Change Type: Non-Snapshot
Columns
ImmunizationEventKey : bigint
Surrogate key used to uniquely identify the record
PatientKey : bigint
Links to PatientDim
Patient associated with the immunization event
PatientDurableKey : bigint
Links to PatientDim
Patient associated with the immunization event
ImmunizationKey : bigint
Links to ImmunizationDim
Immunization associated with the event
EncounterKey : bigint
Links to EncounterFact
Encounter associated with the event
AdministrationDateKey : bigint
Links to DateDim
Date when the immunization was administered
AdministrationDepartmentKey : bigint
Links to DepartmentDim
Department where the immunization was administered
AdministeredByEmployeeKey : bigint
Links to EmployeeDim
Employee who administered the immunization
AdministeredByEmployeeDurableKey : bigint
Links to EmployeeDim
Employee who administered the immunization
ProcedureOrderKey : bigint
Links to ProcedureOrderFact
Procedure order associated with the immunization
MedicationOrderKey : bigint
Links to MedicationOrderFact
Medication order associated with the immunization
ExpirationDateKey : bigint
Links to DateDim
Date when the immunization expires
SourceComboKey : bigint
Links to ImmunizationEventSourceBridge
Key uniquely identifying the combination of data sources for this event
Manufacturer : nvarchar(300)
Manufacturer of the immunization
LotNumber : nvarchar(50)
Lot number of the immunization
Route : nvarchar(300)
Route of the immunization
Site : nvarchar(300)
Location of the injection, if appropriate
Dose : nvarchar(100)
Dosage of the immunization
DoseUnit : nvarchar(300)
Discrete unit of the dose amount
DoseAmount : numeric(18,4)
Discrete dose amount
VaccineInformationStatementDate : nvarchar(300)
Date on the vaccine information statement for the immunization
IsHistoric : tinyint
Indicates whether the immunization administration is a historical administration. This value is 1 for historical, 0 otherwise.
Status : nvarchar(300)
Status of the immunization
CovidSequenceNumber : int
If the immunization administration applies to a COVID-19 vaccination health maintenance topic, this column represents the sequence number in fulfilling that topic
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## InBasketRegistryDim

**Extracted:** 2025-07-23 00:11:58
**Content Length:** 1504 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Dim
Try It
ImmunizationMappingDim
The immunization mapping dimension contains information about mappings from immunizations to standard concepts. Each row represents an immunization mapped to a standard concept for a defined standard, such as CVX, SNOMED CT®, or other similar values. As a snapshot (Type-2) table, all non-current rows represent an audit trail of when a mapping has changed in Caboodle. Change Type: Snapshot
Columns
ImmunizationMappingKey : bigint
Surrogate key used to uniquely identify the record
DurableKey : bigint
Durable key used to identify the record
ImmunizationKey : bigint
Links to ImmunizationDim
The entity in ImmunizationDim associated with the standard concept. This column will be changed in the future to have no change tracking (Type 1).
TerminologyConceptKey : bigint
Links to TerminologyConceptDim
The entity in TerminologyConceptDim associated with the immunization. This column will be changed in the future to have no change tracking (Type 1).
StartDate : date
The date of the execution that loaded a change to at least one column that has snapshot tracking enabled. For the first row loaded for the record this will be an arbitrary date in the past.
EndDate : date
The day before the next StartDate for the record. For the IsCurrent = 1 row, this will be an arbitrary date in the future.
IsCurrent : bit
1 indicates this is the most recent information, otherwise 0
```

---

## IncomingCapitationReceivedFact

**Extracted:** 2025-07-23 00:12:14
**Content Length:** 1573 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Dim
Try It
InBasketRegistryDim
The In Basket registry dimension contains In Basket registry data. Each row represents an In Basket registry. Change Type: Non-Snapshot
Columns
InBasketRegistryKey : bigint
Surrogate key used to uniquely identify the record
InBasketRegistryEpicId : nvarchar(50)
Epic ID of the In Basket registry. This column identifies registry (HIP) records.
InBasketRegistryName : nvarchar(300)
Name of the In Basket registry
InBasketRegistryDescription : nvarchar(300)
Description of the In Basket registry
RecipientDatabase : nvarchar(50)
Master file recipients receive messages through
SelectionIni : nvarchar(50)
Recipient selection master file
SelectionItem : nvarchar(100)
Recipient selection item
ActiveRegistry : nvarchar(300)
Status of the In Basket registry
DefaultAsPool : tinyint
1/0 column that indicates if the registry is a pool. This column returns 1 if the registry is a pool and 0 if the registry is not a pool.
InBasketRegistryDepartmentComboKey : bigint
Links to InBasketRegistryDepartmentBridge
All departments in which this registry is used. This only applies to user pool registries.
InBasketRegistryLocationComboKey : bigint
Links to InBasketRegistryLocationBridge
All locations in which this registry is used. This only applies to user pool registries.
InBasketRegistryServiceAreaComboKey : bigint
Links to InBasketRegistryServiceAreaBridge
All service areas in which this registry is used. This only applies to user pool registries.
```

---

## InductionMedicationBridge

**Extracted:** 2025-07-23 00:12:29
**Content Length:** 1573 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Dim
Try It
InBasketRegistryDim
The In Basket registry dimension contains In Basket registry data. Each row represents an In Basket registry. Change Type: Non-Snapshot
Columns
InBasketRegistryKey : bigint
Surrogate key used to uniquely identify the record
InBasketRegistryEpicId : nvarchar(50)
Epic ID of the In Basket registry. This column identifies registry (HIP) records.
InBasketRegistryName : nvarchar(300)
Name of the In Basket registry
InBasketRegistryDescription : nvarchar(300)
Description of the In Basket registry
RecipientDatabase : nvarchar(50)
Master file recipients receive messages through
SelectionIni : nvarchar(50)
Recipient selection master file
SelectionItem : nvarchar(100)
Recipient selection item
ActiveRegistry : nvarchar(300)
Status of the In Basket registry
DefaultAsPool : tinyint
1/0 column that indicates if the registry is a pool. This column returns 1 if the registry is a pool and 0 if the registry is not a pool.
InBasketRegistryDepartmentComboKey : bigint
Links to InBasketRegistryDepartmentBridge
All departments in which this registry is used. This only applies to user pool registries.
InBasketRegistryLocationComboKey : bigint
Links to InBasketRegistryLocationBridge
All locations in which this registry is used. This only applies to user pool registries.
InBasketRegistryServiceAreaComboKey : bigint
Links to InBasketRegistryServiceAreaBridge
All service areas in which this registry is used. This only applies to user pool registries.
```

---

## InfectionControlReportingLocationDim

**Extracted:** 2025-07-23 00:12:45
**Content Length:** 451 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class A Helper
Try It
InductionMedicationBridge
The induction medication bridge contains unique combinations of induction medications that where used when transplanting an organ Change Type: Non-Snapshot
Columns
InductionMedicationComboKey : bigint
Surrogate key used to uniquely identify the record
CategoryKey : bigint
Links to CategoryDim
The destination key
```

---

## InvasiveCaseFact

**Extracted:** 2025-07-23 00:13:01
**Content Length:** 2731 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class D Dim
Try It
InfectionControlReportingLocationDim
The infection control reporting location dimension contains information about reporting units and reporting hospitals that are used to partition patients for reporting differently than how the facility structure is built. Each row represents a reporting unit or reporting hospital. For Epic data, reporting units will include information about the reporting hospital it currently rolls up to. Change Type: Non-Snapshot
Columns
InfectionControlReportingLocationKey : bigint
Surrogate key used to uniquely identify the record
Name : nvarchar(200)
Name of the reporting location
IsReportingUnit : tinyint
1/0 column that indicates whether this is a reporting unit. This column returns 1 if this is a reporting unit and 0 if this is not a reporting unit.
ReportingUnitName : nvarchar(200)
Name of the reporting unit
ReportingUnitEpicId : numeric(18,0)
Epic ID of the reporting unit. This column identifies a regulatory definition (CMU) record.
ReportingUnitExternalId : nvarchar(200)
External ID for the reporting unit
NhsnLocationCode : nvarchar(50)
NHSN location code for the reporting unit
NhsnLocationType : nvarchar(300)
NHSN location type for the reporting unit (e.g., "Inpatient Locations")
NhsnLocationSubtype : nvarchar(300)
NHSN location subtype for the reporting unit (e.g., "Inpatient Adult Critical Care")
NhsnServiceLocationName : nvarchar(300)
NHSN service location name for the reporting unit
IsNhsnInpatientRehab : tinyint
1/0 column that indicates whether the reporting unit is an Inpatient Rehabilitation Facility (IRF) according to NHSN guidelines
IsNhsnInpatientPsychiatric : tinyint
1/0 column that indicates whether the reporting unit is an Inpatient Psychiatric Facility (IPF) according to NHSN guidelines
IsReportingHospital : tinyint
1/0 column that indicates whether this is a reporting hospital. This column returns 1 if this is a reporting hospital and 0 if this is not a reporting hospital.
ReportingHospitalName : nvarchar(200)
Name of the reporting hospital
ReportingHospitalEpicId : numeric(18,0)
Epic ID of the reporting hospital. This column identifies a regulatory definition (CMU) record.
ReportingHospitalExternalId : nvarchar(200)
External ID for the reporting hospital
NhsnFacilityOid : nvarchar(100)
Facility OID of the reporting hospital. This is an NHSN-assigned code used by the NHSN to identify a facility.
NhsnFacilityId : numeric(18,0)
Facility ID as reported to the NHSN
NhsnFacilityType : nvarchar(300)
Facility type as reported to the NHSN
NhsnEducationalAffiliation : nvarchar(300)
Facility educational affiliation as reported to the NHSN
```

---

## InvasiveCaseOrderMappingFact

**Extracted:** 2025-07-23 00:13:16
**Content Length:** 1175 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Fact
Try It
InvasiveCaseFact
The invasive case fact contains information about invasive procedural cases. Each row represents an invasive case for which the physician has finalized their report. Change Type: Non-Snapshot
Columns
InvasiveCaseKey : bigint
Surrogate key used to uniquely identify the record
SurgicalCaseKey : bigint
Links to SurgicalCaseFact
Surgical case associated with the invasive procedure
SurgeryDateKey : bigint
Links to DateDim
Date and time when the invasive case was performed. For Epic data, this is only a date.
PatientDurableKey : bigint
Links to PatientDim
Patient associated with the invasive case
CaseEncounterKey : bigint
Links to EncounterFact
Encounter during which the case was performed. For Epic data, this encounter is only associated with the surgical case, not the hospital admission or outpatient visit with which the case is associated.
LocationKey : bigint
Links to DepartmentDim
Location of the invasive case
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## InvasiveEventAttributeValueDim

**Extracted:** 2025-07-23 00:13:31
**Content Length:** 461 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Dim
Try It
InvasiveEventAttributeValueDim
The invasive event attribute value dimension contains information about invasive procedure event attribute values. Each row represents an attribute value documented in an invasive procedure event. Change Type: Non-Snapshot
Columns
InvasiveEventAttributeValueKey : bigint
Surrogate key used to uniquely identify the record
```

---

## InvasiveEventFact

**Extracted:** 2025-07-23 00:13:47
**Content Length:** 970 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Fact
Try It
InvasiveEventFact
The invasive event fact contains information about events that occurred during an invasive procedure. Each row represents an event. Change Type: Non-Snapshot
Columns
InvasiveEventKey : bigint
Surrogate key used to uniquely identify the record
InvasiveCaseKey : bigint
Links to InvasiveCaseFact
Invasive case associated with the event
SupplyDurableKey : bigint
Links to SurgicalSupplyDim
Supply associated with the event
SurgicalDateKey : bigint
Links to DateDim
Date of the case the event is associated with
EventInstant : datetime
Date and time when the event occurred
EventName : nvarchar(300)
The event's display name
EventType : nvarchar(300)
The type of event. For Epic data, this is the event's template class.
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## InvasiveFindingFact

**Extracted:** 2025-07-23 00:14:03
**Content Length:** 2591 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Fact
Try It
InvasiveFindingFact
The invasive finding fact contains information about invasive vessel, graft, lesion, and intervention findings and invasive measurements. Each row represents a finding or measurement. Change Type: Non-Snapshot
Columns
InvasiveFindingKey : bigint
Surrogate key used to uniquely identify the record
InvasiveCaseKey : bigint
Links to InvasiveCaseFact
Invasive case associated with the finding or measurement
ImagingKey : bigint
Links to ImagingFact
Imaging study associated with the finding or measurement
InvasiveLesionKey : bigint
Links to InvasiveLesionFact
Lesion associated with the finding or measurement
InvasiveInterventionKey : bigint
Links to InvasiveInterventionFact
Intervention associated with the finding or measurement
InvasiveGraftKey : bigint
Links to InvasiveGraftFact
Graft associated with the finding or measurement
InvasiveVesselKey : bigint
Links to InvasiveVesselFact
Vessel associated with the finding or measurement
AttributeKey : bigint
Links to AttributeDim
Attribute representing the finding
ValueAttributeKey : bigint
Links to AttributeDim
Attribute representing the finding value if applicable
ComponentKey : bigint
Links to LabComponentDim
Result component associated with the measurement
FinalizingDateKey : bigint
Links to DateDim
Date when the order associated with the finding or measurement was finalized
SupplyDurableKey : bigint
Links to SurgicalSupplyDim
Supply associated with the finding
EpicFindingId : nvarchar(50)
Epic Finding ID associated with the finding. This is the RES record associated with the finding.
AttributeSmartDataEpicId : nvarchar(50)
Epic ID of the finding SmartData element. This column identifies SmartData element (HLX) records.
AttributeName : nvarchar(300)
Name of the SmartData element or measurement
ValueSmartDataEpicId : nvarchar(50)
Epic ID of the finding value SmartData element. This column identifies SmartData element (HLX) records if applicable.
StringValue : nvarchar(1000)
Value of the finding or measurement in string format
NumericValue : float
Value of the finding or measurement in numeric format
Unit : nvarchar(100)
Unit associated with the measurement result value
ComponentEpicId : nvarchar(50)
Epic ID of the measurement component. This column identifies lab result component (LRR) records.
EpicFindingTypeId : int
Epic category ID of the finding type
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## InvasiveGraftFact

**Extracted:** 2025-07-23 00:14:19
**Content Length:** 2591 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Fact
Try It
InvasiveFindingFact
The invasive finding fact contains information about invasive vessel, graft, lesion, and intervention findings and invasive measurements. Each row represents a finding or measurement. Change Type: Non-Snapshot
Columns
InvasiveFindingKey : bigint
Surrogate key used to uniquely identify the record
InvasiveCaseKey : bigint
Links to InvasiveCaseFact
Invasive case associated with the finding or measurement
ImagingKey : bigint
Links to ImagingFact
Imaging study associated with the finding or measurement
InvasiveLesionKey : bigint
Links to InvasiveLesionFact
Lesion associated with the finding or measurement
InvasiveInterventionKey : bigint
Links to InvasiveInterventionFact
Intervention associated with the finding or measurement
InvasiveGraftKey : bigint
Links to InvasiveGraftFact
Graft associated with the finding or measurement
InvasiveVesselKey : bigint
Links to InvasiveVesselFact
Vessel associated with the finding or measurement
AttributeKey : bigint
Links to AttributeDim
Attribute representing the finding
ValueAttributeKey : bigint
Links to AttributeDim
Attribute representing the finding value if applicable
ComponentKey : bigint
Links to LabComponentDim
Result component associated with the measurement
FinalizingDateKey : bigint
Links to DateDim
Date when the order associated with the finding or measurement was finalized
SupplyDurableKey : bigint
Links to SurgicalSupplyDim
Supply associated with the finding
EpicFindingId : nvarchar(50)
Epic Finding ID associated with the finding. This is the RES record associated with the finding.
AttributeSmartDataEpicId : nvarchar(50)
Epic ID of the finding SmartData element. This column identifies SmartData element (HLX) records.
AttributeName : nvarchar(300)
Name of the SmartData element or measurement
ValueSmartDataEpicId : nvarchar(50)
Epic ID of the finding value SmartData element. This column identifies SmartData element (HLX) records if applicable.
StringValue : nvarchar(1000)
Value of the finding or measurement in string format
NumericValue : float
Value of the finding or measurement in numeric format
Unit : nvarchar(100)
Unit associated with the measurement result value
ComponentEpicId : nvarchar(50)
Epic ID of the measurement component. This column identifies lab result component (LRR) records.
EpicFindingTypeId : int
Epic category ID of the finding type
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## InvasiveGraftLesionMappingFact

**Extracted:** 2025-07-23 00:14:34
**Content Length:** 1235 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Fact
Try It
InvasiveGraftFact
The invasive graft fact contains information about invasive grafts. Each row represents a graft in an invasive procedure. Change Type: Non-Snapshot
Columns
InvasiveGraftKey : bigint
Surrogate key used to uniquely identify the record
InvasiveCaseKey : bigint
Links to InvasiveCaseFact
Case associated with the graft
ImagingKey : bigint
Links to ImagingFact
Imaging study associated with the graft
FinalizingDateKey : bigint
Links to DateDim
Date when the invasive order was finalized
GraftSourceKey : bigint
Links to VesselDim
Source vessel associated with the graft
GraftSourceSegmentKey : bigint
Links to VesselDim
Source vessel segment associated with the graft
GraftOutletComboKey : bigint
Links to InvasiveVesselBridge
All outlet vessels associated with the graft
GraftOutletSegmentComboKey : bigint
Links to InvasiveVesselBridge
All outlet vessel segments associated with the graft
VesselLocation : nvarchar(300)
The location of the body the graft belongs to, such as coronary
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## InvasiveInterventionFact

**Extracted:** 2025-07-23 00:14:49
**Content Length:** 822 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Fact
Try It
InvasiveGraftLesionMappingFact
The invasive graft lesion mapping fact contains information about grafts that have lesions documented on them. Each row represents a lesion documented in a graft. Change Type: Non-Snapshot
Columns
InvasiveGraftLesionMappingFactKey : bigint
Surrogate key used to uniquely identify the record
InvasiveGraftKey : bigint
Links to InvasiveGraftFact
Graft on which a lesion was documented
InvasiveLesionKey : bigint
Links to InvasiveLesionFact
Lesion documented on the graft
FinalizingDateKey : bigint
Links to DateDim
Date when the invasive order was finalized
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## InvasiveLesionFact

**Extracted:** 2025-07-23 00:15:05
**Content Length:** 1065 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Fact
Try It
InvasiveInterventionFact
The invasive intervention fact contains information about invasive interventions. Each row represents an intervention. Change Type: Non-Snapshot
Columns
InvasiveInterventionKey : bigint
Surrogate key used to uniquely identify the record
InvasiveCaseKey : bigint
Links to InvasiveCaseFact
Case associated with the intervention
ImagingKey : bigint
Links to ImagingFact
Imaging study associated with the intervention
FinalizingDateKey : bigint
Links to DateDim
Date when the order associated with the intervention was finalized
VesselComboKey : bigint
Links to InvasiveVesselBridge
All vessels the intervention is associated with
VesselLocation : nvarchar(300)
The location of the body the intervention belongs to, such as coronary
InterventionType : nvarchar(300)
Name of the type of intervention performed
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## InvasiveLesionInterventionMappingFact

**Extracted:** 2025-07-23 00:15:20
**Content Length:** 876 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Fact
Try It
InvasiveLesionInterventionMappingFact
The invasive lesion intervention mapping fact contains information about lesions that had an intervention documented on them. Each row represents a lesion with an intervention. Change Type: Non-Snapshot
Columns
InvasiveLesionInterventionMappingKey : bigint
Surrogate key used to uniquely identify the record
InvasiveLesionKey : bigint
Links to InvasiveLesionFact
Lesion on which the intervention was documented
InvasiveInterventionKey : bigint
Links to InvasiveInterventionFact
Intervention documented on the lesion
FinalizingDateKey : bigint
Links to DateDim
Date when the invasive order was finalized
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## InvasiveVesselBridge

**Extracted:** 2025-07-23 00:15:35
**Content Length:** 461 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class A Helper
Try It
InvasiveVesselBridge
The vessel bridge contains unique combinations of vessels associated with other records. Each row represents a vessel in a combination. Change Type: Non-Snapshot
Columns
InvasiveVesselComboKey : bigint
Surrogate key used to uniquely identify the record
VesselKey : bigint
Links to VesselDim
One of the vessels in the combination
```

---

## InvasiveVesselFact

**Extracted:** 2025-07-23 00:15:51
**Content Length:** 1397 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Fact
Try It
InvasiveVesselFact
The invasive vessel fact contains information about vessels. Each row represents a vessel that was present on an invasive study. For Epic data, the fact includes all major vessels from the invasive toolset diagram chosen, as well as any minor vessels with findings on the study. Change Type: Non-Snapshot
Columns
InvasiveVesselKey : bigint
Surrogate key used to uniquely identify the record
InvasiveCaseKey : bigint
Links to InvasiveCaseFact
Invasive case associated with the vessel documentation
ImagingKey : bigint
Links to ImagingFact
Imaging study associated with the vessel documentation
FinalizingDateKey : bigint
Links to DateDim
Date when the order associated with the vessel was finalized
VesselKey : bigint
Links to VesselDim
Vessel this row is associated with
VesselLocation : nvarchar(300)
The location of the body the vessel belongs to, such as coronary
VesselDominance : nvarchar(300)
The dominance of the patient's coronary arteries (left, right or codominant)
IsVasculatureRecord : tinyint
1/0 column that determines if this row is a vasculature record. This column returns 1 if it is a vasculature record, and 0 if it is not.
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## LabComponentDim

**Extracted:** 2025-07-23 00:16:06
**Content Length:** 1397 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Fact
Try It
InvasiveVesselFact
The invasive vessel fact contains information about vessels. Each row represents a vessel that was present on an invasive study. For Epic data, the fact includes all major vessels from the invasive toolset diagram chosen, as well as any minor vessels with findings on the study. Change Type: Non-Snapshot
Columns
InvasiveVesselKey : bigint
Surrogate key used to uniquely identify the record
InvasiveCaseKey : bigint
Links to InvasiveCaseFact
Invasive case associated with the vessel documentation
ImagingKey : bigint
Links to ImagingFact
Imaging study associated with the vessel documentation
FinalizingDateKey : bigint
Links to DateDim
Date when the order associated with the vessel was finalized
VesselKey : bigint
Links to VesselDim
Vessel this row is associated with
VesselLocation : nvarchar(300)
The location of the body the vessel belongs to, such as coronary
VesselDominance : nvarchar(300)
The dominance of the patient's coronary arteries (left, right or codominant)
IsVasculatureRecord : tinyint
1/0 column that determines if this row is a vasculature record. This column returns 1 if it is a vasculature record, and 0 if it is not.
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## LabComponentMappingDim

**Extracted:** 2025-07-23 00:16:22
**Content Length:** 1833 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Dim
Try It
LabComponentDim
The lab component dimension contains information about lab components. Each row represents a lab component. For Epic data, the dimension contains only lab-related components. Change Type: Non-Snapshot
Columns
LabComponentKey : bigint
Surrogate key used to uniquely identify the record
LabComponentEpicId : numeric(18,0)
Epic ID of the lab component. This column identifies lab result component (LRR) records.
LabSynopticQuestionEpicId : nvarchar(50)
Epic ID of the lab synoptic question. This column identifies lab synoptic question (HLX) records.
Name : nvarchar(300)
Name of the component
Abbreviation : nvarchar(300)
Abbreviated component name
BaseName : nvarchar(100)
Base name of the component
CommonName : nvarchar(300)
Common name of the component
LoincCode : nvarchar(300)
Default Logical Observation Identifiers Names and Codes (LOINC®) code associated with the component
LoincName : nvarchar(550)
Name of the default Logical Observation Identifiers Names and Codes (LOINC®) code associated with the component
DefaultUnit : nvarchar(300)
Default unit for results based on the component
Type : nvarchar(300)
Component type
Subtype : nvarchar(300)
Component subtype. For Epic data, this column can contain Final Diagnosis, Cytology Interpretation, Culture, Stain, or other values.
DataType : nvarchar(300)
Component data type. For Epic data, this column can contain String, Titer, Category, Number, Multi String, or other values.
CategoryIni : nvarchar(50)
Category INI associated with the component
CategoryItem : numeric(18,0)
Category item associated with the component
CancerReportingFormIdentifier : nvarchar(50)
The identifier of the cancer reporting form that contains the lab synoptic question
```

---

## LabComponentResultFact

**Extracted:** 2025-07-23 00:16:37
**Content Length:** 1619 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Dim
Try It
LabComponentMappingDim
The lab component mapping dimension contains information about mappings from lab components to standard concepts. Each row represents a lab component mapped to a standard concept for a defined standard, such as LOINC®, SNOMED CT®, or other similar values. If available, prioritize the LOINC associated directly with the order instead of using these mappings. As a snapshot (Type-2) table, all non-current rows represent an audit trail of when a mapping has changed in Caboodle. Change Type: Snapshot
Columns
LabComponentMappingKey : bigint
Surrogate key used to uniquely identify the record
DurableKey : bigint
Durable key used to identify the record
LabComponentKey : bigint
Links to LabComponentDim
The entity in LabComponentDim associated with the standard concept. This column will be changed in the future to have no change tracking (Type 1).
TerminologyConceptKey : bigint
Links to TerminologyConceptDim
Standard concept in TerminologyConceptDim associated with the lab component. This column will be changed in the future to have no change tracking (Type 1).
StartDate : date
The date of the execution that loaded a change to at least one column that has snapshot tracking enabled. For the first row loaded for the record this will be an arbitrary date in the past.
EndDate : date
The day before the next StartDate for the record. For the IsCurrent = 1 row, this will be an arbitrary date in the future.
IsCurrent : bit
1 indicates this is the most recent information, otherwise 0
```

---

## LabComponentResultTextFact

**Extracted:** 2025-07-23 00:16:54
**Content Length:** 6009 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class D Fact
Try It
LabComponentResultFact
The lab component mapping dimension contains information about mappings from lab components to standard concepts. Each row represents a lab component mapped to a standard concept for a defined standard, such as LOINC®, SNOMED CT®, or other similar values. If available, prioritize the LOINC associated directly with the order instead of using these mappings. As a snapshot (Type-2) table, all non-current rows represent an audit trail of when a mapping has changed in Caboodle. Change Type: Non-Snapshot
Columns
LabComponentResultKey : bigint
Surrogate key used to uniquely identify the record
LabComponentKey : bigint
Links to LabComponentDim
Lab component associated with the result
ResultingLabKey : bigint
Links to LabDim
Resulting lab that provided the results
ResultingLabDurableKey : bigint
Links to LabDim
Resulting lab that provided the results
ProcedureKey : bigint
Links to ProcedureDim
Procedure associated with the result
ProcedureDurableKey : bigint
Links to ProcedureDim
Procedure associated with the result
PatientKey : bigint
Links to PatientDim
Patient associated with the result
PatientDurableKey : bigint
Links to PatientDim
Patient associated with the result
LabTestingSourceKey : bigint
Links to LabTestingSourceDim
Source the specimen was collected from when that source is not considered a patient
EncounterKey : bigint
Links to EncounterFact
Encounter associated with the result
AuthorizedByProviderKey : bigint
Links to ProviderDim
Provider who authorized the order associated with the result
AuthorizedByProviderDurableKey : bigint
Links to ProviderDim
Provider who authorized the order associated with the result
ResultDateKey : bigint
Links to DateDim
Date tests were run for the order associated with the result
ResultTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day tests were run for the order associated with the result
OrderedDateKey : bigint
Links to DateDim
Date the order associated with the result was placed
OrderedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day the order associated with the result was placed
CollectionDateKey : bigint
Links to DateDim
Date the specimen was collected
PrioritizedDateKey : bigint
Links to DateDim
Date the specimen was collected if known, otherwise the best available date representing the specimen. This can be based on instants in UTC, local, or unknown time zones and is intended for use as a date only.
CollectionTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day the specimen was collected
LoincKey : bigint
Links to LoincDim
Logical Observation Identifiers Names and Codes (LOINC®) code assigned to the component result
SourceKey : bigint
Links to SourceDim
Source of the data in this line. If there are multiple sources, use SourceComboKey instead.
SourceComboKey : bigint
Links to LabComponentResultSourceBridge
Sources of the data in this line. Use this instead of SourceKey if there are multiple sources.
ExternalOrganizationKey : bigint
Links to SourceDim
Source organization for the data in this line
LabOrganismKey : bigint
Links to LabOrganismDim
The Organism discretely associated with this component result. Organisms identified by an order are not always represented with component rows
LabOrderEpicId : numeric(18,0)
Epic ID of the lab order. This column identifies lab order (ORD) records.
Flag : nvarchar(300)
Descriptive flag associated with abnormal results
ResultStatus : nvarchar(300)
Result status of the order. For Epic data, this column can contain In process, Preliminary result, Final result, or other values.
Value : nvarchar(300)
Value of the result in string format. The first 300 characters of the result value are stored. For the full text of the result value see LabComponentResultTextFact.Value.
NumericValue : float
Value of the result in numeric format
Unit : nvarchar(100)
Unit associated with the component result value
ReferenceValues : nvarchar(400)
Reference values used to determine if a component result value is abnormal
IsReportable : tinyint
1/0 column that indicates whether the component's results are considered reportable. The column returns 1 if the component's results are reportable and 0 otherwise
Abnormal : tinyint
1/0 column that indicates whether the component result value is considered abnormal. This column returns 1 if the component result value is considered abnormal and 0 if the component result value is considered normal. This column may be null if the component result value was not evaluated for abnormality.
IsFinal : tinyint
1/0 column that indicates whether the component's test is final verified and is not affected by other common exclusion criteria such as being marked as an unsuccessful attempt or as having been documented on the wrong patient. This column returns 1 if the test is final verified and meets common criteria and 0 if it is not.
IsBlankOrUnsuccessfulAttempt : tinyint
1/0 column that indicates whether the component was blank, returned only a value indicating an unsuccessful attempt, or was part of an order marked as an unsuccessful attempt. This column returns 1 if the component was blank or indicates it was an unsuccessful attempt and 0 otherwise.
IsFromOutsideSource : tinyint
1/0 column that indicates whether the entire order, including the request for testing and its results, is from an outside source. This column returns 1 if the order was from an outside source and 0 otherwise.
IsAccredited : tinyint
1/0 column that indicates whether the component's results are considered accredited. The column returns 1 if the component's results are accredited, 0 if the component's results are not accredited, or null if no evaluation was done for this component value.
OrderEncounterKey : bigint
Links to EncounterFact
The encounter the lab order was placed
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## LabContainerTypeDim

**Extracted:** 2025-07-23 00:17:09
**Content Length:** 962 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Fact
Try It
LabComponentResultTextFact
The lab component result text fact contains textual information about component results from procedures. This full text data extends the lab component result fact and is intended for use with full text searches. Each row represents a component result for a procedure. For Epic data, the fact contains only results for lab-related components. Change Type: Non-Snapshot
Columns
LabComponentResultTextKey : bigint
Surrogate key used to uniquely identify the record
LabComponentResultKey : bigint
Links to LabComponentResultFact
Lab component result associated with this full text data
Value : nvarchar(MAX)
Value of the result in string format
Comment : nvarchar(MAX)
Comment associated with the result
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## LabDim

**Extracted:** 2025-07-23 00:17:25
**Content Length:** 2652 characters

**Content:**
```
LabDim
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Dim
Try It
LabDim
The lab dimension contains information about labs, sections, and case types. Each row represents a lab, section, or case type for a date range. For Epic data, data is imported at each level of granularity, with records at each level of granularity containing information about the levels above it. This table contains both current and historical information. For current records, IsCurrent has a value of 1. Historical records contain information that is valid for the date range specified by the StartDate and EndDate columns. Change Type: Snapshot
Columns
LabKey : bigint
Surrogate key used to uniquely identify the record
DurableKey : bigint
Durable key used to identify the record
LabEpicId : nvarchar(50)
Epic ID of the laboratory. This column identifies lab definition (LDF) records of type 6-Laboratory.
LabName : nvarchar(300)
Name of the lab. This column will be changed in the future to have no change tracking (Type 1).
LabAddress : nvarchar(300)
Street address for the lab. Only the first 300 characters are stored. This column will be changed in the future to have no change tracking (Type 1).
LabCity : nvarchar(300)
City for the address associated with the lab. This column will be changed in the future to have no change tracking (Type 1).
LabCounty : nvarchar(300)
County for the address associated with the lab. This column will be changed in the future to have no change tracking (Type 1).
LabStateOrProvince : nvarchar(300)
State or province for the address associated with the lab. This column will be changed in the future to have no change tracking (Type 1).
LabStateOrProvinceAbbreviation : nvarchar(300)
Abbreviated name of the state or province for the address associated with the lab. This column will be changed in the future to have no change tracking (Type 1).
LabCountry : nvarchar(300)
Country for the address associated with the lab. This column will be changed in the future to have no change tracking (Type 1).
LabPostalCode : nvarchar(300)
Postal code for the address associated with the lab. This column will be changed in the future to have no change tracking (Type 1).
StartDate : date
The date of the execution that loaded a change to at least one column that has snapshot tracking enabled. For the first row loaded for the record this will be an arbitrary date in the past.
EndDate : date
The day before the next StartDate for the record. For the IsCurrent = 1 row, this will be an arbitrary date in the future.
IsCurrent : bit
1 indicates this is the most recent information, otherwise 0
```

---

## LabFlagBridge

**Extracted:** 2025-07-23 00:17:41
**Content Length:** 2645 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Dim
Try It
LabDim
The lab dimension contains information about labs, sections, and case types. Each row represents a lab, section, or case type for a date range. For Epic data, data is imported at each level of granularity, with records at each level of granularity containing information about the levels above it. This table contains both current and historical information. For current records, IsCurrent has a value of 1. Historical records contain information that is valid for the date range specified by the StartDate and EndDate columns. Change Type: Snapshot
Columns
LabKey : bigint
Surrogate key used to uniquely identify the record
DurableKey : bigint
Durable key used to identify the record
LabEpicId : nvarchar(50)
Epic ID of the laboratory. This column identifies lab definition (LDF) records of type 6-Laboratory.
LabName : nvarchar(300)
Name of the lab. This column will be changed in the future to have no change tracking (Type 1).
LabAddress : nvarchar(300)
Street address for the lab. Only the first 300 characters are stored. This column will be changed in the future to have no change tracking (Type 1).
LabCity : nvarchar(300)
City for the address associated with the lab. This column will be changed in the future to have no change tracking (Type 1).
LabCounty : nvarchar(300)
County for the address associated with the lab. This column will be changed in the future to have no change tracking (Type 1).
LabStateOrProvince : nvarchar(300)
State or province for the address associated with the lab. This column will be changed in the future to have no change tracking (Type 1).
LabStateOrProvinceAbbreviation : nvarchar(300)
Abbreviated name of the state or province for the address associated with the lab. This column will be changed in the future to have no change tracking (Type 1).
LabCountry : nvarchar(300)
Country for the address associated with the lab. This column will be changed in the future to have no change tracking (Type 1).
LabPostalCode : nvarchar(300)
Postal code for the address associated with the lab. This column will be changed in the future to have no change tracking (Type 1).
StartDate : date
The date of the execution that loaded a change to at least one column that has snapshot tracking enabled. For the first row loaded for the record this will be an arbitrary date in the past.
EndDate : date
The day before the next StartDate for the record. For the IsCurrent = 1 row, this will be an arbitrary date in the future.
IsCurrent : bit
1 indicates this is the most recent information, otherwise 0
```

---

## LabOrganismDim

**Extracted:** 2025-07-23 00:17:56
**Content Length:** 459 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class A Helper
Try It
LabFlagBridge
The lab flag bridge contains unique combinations of lab flags associated with other records. Each row represents a lab flag in a combination. Change Type: Non-Snapshot
Columns
LabFlagComboKey : bigint
Surrogate key used to uniquely identify the record
CategoryKey : bigint
Links to CategoryDim
One of the lab flags in the combination
```

---

## LabTaskFact

**Extracted:** 2025-07-23 00:18:12
**Content Length:** 643 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Dim
Try It
LabOrganismDim
The lab organism dimension contains information about lab organisms. Each row represents a lab organism. Change Type: Non-Snapshot
Columns
LabOrganismKey : bigint
Surrogate key used to uniquely identify the record
LabOrganismEpicId : numeric(18,0)
Epic ID of the organism. This column identifies organism (LLO) records.
Name : nvarchar(300)
Name of the organism
Type : nvarchar(300)
Organism type
OrganismGroup : nvarchar(300)
Organism group
Genus : nvarchar(300)
Organism genus
Species : nvarchar(300)
Organism species
```

---

## LabTestComponentResultMappingFact

**Extracted:** 2025-07-23 00:18:28
**Content Length:** 4159 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class D Fact
Try It
LabTaskFact
The lab task fact contains information about work performed in the lab. Each row represents a lab task. For Epic data, this includes Setup Bench tasks and Case Prep Worklist tasks. Change Type: Non-Snapshot
Columns
LabTaskKey : bigint
Surrogate key used to uniquely identify the record
LabTestKey : bigint
Links to LabTestFact
Test associated with the task
PatientDurableKey : bigint
Links to PatientDim
Patient the specimen was collected from
LabTestingSourceKey : bigint
Links to LabTestingSourceDim
Source the specimen was collected from when that source is not considered a patient
LabContainerTypeKey : bigint
Links to LabContainerTypeDim
Type of container associated with the task
CompletionLabDurableKey : bigint
Links to LabDim
Location where the task was completed. For Epic data, this is the laboratory where the task was completed.
TestingLabDurableKey : bigint
Links to LabDim
Location where the task's test was performed or that is responsible for the test. For Epic data, this is the section or case type if available. Otherwise, this is the laboratory where the test was performed.
LabFlagComboKey : bigint
Links to LabFlagBridge
Flags placed on the task
DepartmentComboKey : bigint
Links to DepartmentBridge
Departments involved in the ordering, processing, or resulting of the task's specimen
CollectionDepartmentKey : bigint
Links to DepartmentDim
Location where the task's specimen was collected. For Epic data, this is the submitter for requisitions, but is a department in other scenarios.
PathologistUserDurableKey : bigint
Links to EmployeeDim
Pathologist assigned to the task's case
CreationUserDurableKey : bigint
Links to EmployeeDim
User who created or added the task
CompletionUserDurableKey : bigint
Links to EmployeeDim
User who completed the task
CreationDateKey : bigint
Links to DateDim
Date the task was created or added
CreationTimeOfDayKey : bigint
Links to TimeOfDayDim
Time the task was created or added
CompletionDateKey : bigint
Links to DateDim
Date the task was completed
CompletionTimeOfDayKey : bigint
Links to TimeOfDayDim
Time the task was completed
CreationInstant : datetime
Date and time the task was created or added
CompletionInstant : datetime
Date and time the task was completed
ContainerEpicId : nvarchar(50)
Epic ID of the lab container. This column identifies lab container (OVC) records.
SpecimenEpicId : nvarchar(50)
Epic ID of the lab specimen. This column identifies lab specimen (OVS) records.
CaseEpicId : numeric(18,0)
Epic ID of the case. This column identifies lab requisition/case (REQ) records of type 1-Case.
ResultEpicId : nvarchar(50)
Epic ID of the lab result. This column identifies lab result (OVR) records.
Name : nvarchar(300)
Name of the task
Type : nvarchar(300)
Type of the task
TestName : nvarchar(300)
Name of the test associated with the task
TaskProtocol : nvarchar(300)
Protocol associated with the task
SpecimenProtocol : nvarchar(300)
Specimen protocol associated with the task's specimen
SpecimenType : nvarchar(300)
Type of specimen collected
SpecimenSource : nvarchar(300)
Source of the specimen that was collected
ContainerName : nvarchar(300)
Name of the container associated with the task
SlideName : nvarchar(300)
Name of the slide associated with the task
BlockName : nvarchar(300)
Name of the block associated with the task
SpecimenName : nvarchar(300)
Name of the specimen associated with the task
CountName : nvarchar(300)
Identifier for use when performing counts where all tests or specimens on a single case are counted as one, but all tests not on a case are counted individually
CaseName : nvarchar(300)
Name of the case associated with the task
IsFrozenSpecimen : tinyint
1/0 column that indicates whether this is a frozen specimen. This column returns 1 if the specimen is frozen, and 0 if the specimen is not frozen.
IsQualityControlSpecimen : tinyint
1/0 column that indicates whether this is a quality control specimen. This column returns 1 if the the specimen is a quality control and 0 if the specimen is not a quality control.
```

---

## LabTestFact

**Extracted:** 2025-07-23 00:18:44
**Content Length:** 770 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Fact
Try It
LabTestComponentResultMappingFact
The lab test component result mapping fact contains information about component results on an order for a test. Each row represents a component on an order and its associated tests. Change Type: Non-Snapshot
Columns
LabTestComponentResultMappingKey : bigint
Surrogate key used to uniquely identify the record
LabComponentResultKey : bigint
Links to LabComponentResultFact
Component result associated with a lab test
LabTestKey : bigint
Links to LabTestFact
Lab test associated with a component result
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## LabTestingSourceDim

**Extracted:** 2025-07-23 00:19:00
**Content Length:** 3146 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class D Dim
Try It
LabTestingSourceDim
The lab testing source dimension contains information about sources from which specimens have been collected or created. Each row represents a source. For Epic data, this dimension includes quality control material lots, requisition grouper records from non-participating submitters, and requisition grouper records from non-human testing. Change Type: Non-Snapshot
Columns
LabTestingSourceKey : bigint
Surrogate key used to uniquely identify the record
LabTestingSourceRaceComboKey : bigint
Links to PatientRaceBridge
All races for the lab testing source
DepartmentComboKey : bigint
Links to DepartmentBridge
Department associated to the access tier of the submitter that created the requisition grouper
LabRequisitionGrouperEpicId : numeric(18,0)
Epic ID of the lab requisition grouper. This column identifies lab requisition grouper (RQG) records.
BirthDate : date
Birth date of the testing source
EffectiveDate : date
Effective date of the testing source
ExpirationDate : date
Expiration date of the testing source
Name : nvarchar(550)
Name of the testing source
Status : nvarchar(300)
Status of the testing source. For Epic, data this column can contain Active or Inactive.
Type : nvarchar(300)
Type of the testing source. For Epic data, this column can contain Control, Standard, or other values.
Manufacturer : nvarchar(300)
Manufacturer of the testing source
Species : nvarchar(300)
Species of the testing source
Sex : nvarchar(300)
Sex of the testing source. For Epic data, this is the legal sex of the lab testing source as defined by a government body.
SexAssignedAtBirth : nvarchar(300)
Sex assigned at birth as determined by a medical or birthing professional
GenderIdentity : nvarchar(300)
Gender identity of the lab testing source
Ssn : nvarchar(200)
Social Security number (SSN) for the testing source
Ethnicity : nvarchar(300)
Primary ethnicity of the testing source
FirstRace : nvarchar(300)
First race associated with the testing source
SecondRace : nvarchar(300)
Second race associated with the testing source
ThirdRace : nvarchar(300)
Third race associated with the testing source
FourthRace : nvarchar(300)
Fourth race associated with the testing source
FifthRace : nvarchar(300)
Fifth race associated with the testing source
Address : nvarchar(150)
Street address for the testing source's residence or location
City : nvarchar(300)
City of the testing source's residence or location
County : nvarchar(300)
County of the testing source's residence or location
StateOrProvince : nvarchar(300)
State or province of the testing source's residence or location
StateOrProvinceAbbreviation : nvarchar(300)
Abbreviated name of the state or province of the testing source's residence or location
Country : nvarchar(300)
Country of the testing source's residence or location
PostalCode : nvarchar(50)
Postal code of the testing source's residence or location
HomePhoneNumber : nvarchar(200)
Home phone number for the testing source
WorkPhoneNumber : nvarchar(200)
Work phone number for the testing source
```

---

## LabTestTextFact

**Extracted:** 2025-07-23 00:19:16
**Content Length:** 3146 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class D Dim
Try It
LabTestingSourceDim
The lab testing source dimension contains information about sources from which specimens have been collected or created. Each row represents a source. For Epic data, this dimension includes quality control material lots, requisition grouper records from non-participating submitters, and requisition grouper records from non-human testing. Change Type: Non-Snapshot
Columns
LabTestingSourceKey : bigint
Surrogate key used to uniquely identify the record
LabTestingSourceRaceComboKey : bigint
Links to PatientRaceBridge
All races for the lab testing source
DepartmentComboKey : bigint
Links to DepartmentBridge
Department associated to the access tier of the submitter that created the requisition grouper
LabRequisitionGrouperEpicId : numeric(18,0)
Epic ID of the lab requisition grouper. This column identifies lab requisition grouper (RQG) records.
BirthDate : date
Birth date of the testing source
EffectiveDate : date
Effective date of the testing source
ExpirationDate : date
Expiration date of the testing source
Name : nvarchar(550)
Name of the testing source
Status : nvarchar(300)
Status of the testing source. For Epic, data this column can contain Active or Inactive.
Type : nvarchar(300)
Type of the testing source. For Epic data, this column can contain Control, Standard, or other values.
Manufacturer : nvarchar(300)
Manufacturer of the testing source
Species : nvarchar(300)
Species of the testing source
Sex : nvarchar(300)
Sex of the testing source. For Epic data, this is the legal sex of the lab testing source as defined by a government body.
SexAssignedAtBirth : nvarchar(300)
Sex assigned at birth as determined by a medical or birthing professional
GenderIdentity : nvarchar(300)
Gender identity of the lab testing source
Ssn : nvarchar(200)
Social Security number (SSN) for the testing source
Ethnicity : nvarchar(300)
Primary ethnicity of the testing source
FirstRace : nvarchar(300)
First race associated with the testing source
SecondRace : nvarchar(300)
Second race associated with the testing source
ThirdRace : nvarchar(300)
Third race associated with the testing source
FourthRace : nvarchar(300)
Fourth race associated with the testing source
FifthRace : nvarchar(300)
Fifth race associated with the testing source
Address : nvarchar(150)
Street address for the testing source's residence or location
City : nvarchar(300)
City of the testing source's residence or location
County : nvarchar(300)
County of the testing source's residence or location
StateOrProvince : nvarchar(300)
State or province of the testing source's residence or location
StateOrProvinceAbbreviation : nvarchar(300)
Abbreviated name of the state or province of the testing source's residence or location
Country : nvarchar(300)
Country of the testing source's residence or location
PostalCode : nvarchar(50)
Postal code of the testing source's residence or location
HomePhoneNumber : nvarchar(200)
Home phone number for the testing source
WorkPhoneNumber : nvarchar(200)
Work phone number for the testing source
```

---

## LoincDim

**Extracted:** 2025-07-23 00:19:32
**Content Length:** 565 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Dim
Try It
LoincDim
The Logical Observation Identifiers Names and Codes (LOINC®) dimension contains information about LOINC codes. Each row represents a LOINC code. Change Type: Non-Snapshot
Columns
LoincKey : bigint
Surrogate key used to uniquely identify the record
LoincCode : nvarchar(50)
Logical Observation Identifiers Names and Codes (LOINC®) code
LoincName : nvarchar(550)
Logical Observation Identifiers Names and Codes (LOINC®) name associated with the code
```

---

## ManagedCareTransactionFact

**Extracted:** 2025-07-23 00:19:48
**Content Length:** 565 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Dim
Try It
LoincDim
The Logical Observation Identifiers Names and Codes (LOINC®) dimension contains information about LOINC codes. Each row represents a LOINC code. Change Type: Non-Snapshot
Columns
LoincKey : bigint
Surrogate key used to uniquely identify the record
LoincCode : nvarchar(50)
Logical Observation Identifiers Names and Codes (LOINC®) code
LoincName : nvarchar(550)
Logical Observation Identifiers Names and Codes (LOINC®) name associated with the code
```

---

## MappingDim

**Extracted:** 2025-07-23 00:20:04
**Content Length:** 4212 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class D Fact
Try It
ManagedCareTransactionFact
The managed care member transaction fact contains information about monetary transactions associated with a managed care member. Change Type: Non-Snapshot
Columns
ManagedCareTransactionKey : bigint
Surrogate key used to uniquely identify the record
PatientDurableKey : bigint
Links to PatientDim
Patient associated with the transaction
CoverageKey : bigint
Links to CoverageDim
Coverage associated with the transaction
OwningServiceAreaKey : bigint
Links to DepartmentDim
Primary service area for the transaction
ServiceAreaComboKey : bigint
Links to DepartmentBridge
All associated service areas and business segments for the transaction
EffectiveDateKey : bigint
Links to DateDim
Effective date of the transaction
PaymentDateKey : bigint
Links to DateDim
Payment date for the transaction
AdHocPaymentTransactionKey : bigint
Links to AdHocPaymentTransactionFact
Ad hoc adjustment associated with the transaction
ApClaimKey : bigint
Links to ApClaimFact
AP claim associated with the transaction
ReceivedClaimKey : bigint
Links to ReceivedClaimFact
Received claim associated with the transaction
ReceivedClaimProcedureKey : bigint
Links to ReceivedClaimProcedureFact
Received claim procedure associated with the transaction
ReceivedClaimMedicationKey : bigint
Links to ReceivedClaimMedicationFact
Received claim medication line associated with the transaction
OutgoingCapitationPaymentKey : bigint
Links to OutgoingCapitationPaymentFact
Outgoing capitation payment associated with the transaction
AttributedRegionKey : bigint
Links to PlaceOfServiceDim
Region attributed to the transaction
AttributedMedicalGroupKey : bigint
Links to PlaceOfServiceDim
Medical group attributed to the transaction
ProviderDurableKey : bigint
Links to ProviderDim
Provider associated with the transaction
VendorKey : bigint
Links to VendorDim
Vendor associated with the transaction
CheckKey : bigint
Links to ApCheckFact
Check associated with the transaction
MemberGroupEpicId : nvarchar(50)
Epic ID of the member group associated with the transaction. This column is used to identify member group (MGR) records.
MemberGroupName : nvarchar(200)
Name of the member group associated with the transaction
EmployerGroupKey : bigint
Links to ManagedCareEmployerDim
Employer group associated with the transaction
EmployerGroupEpicId : nvarchar(50)
Epic ID of the employer group associated with the transaction. This column is used to identify employer group (PPG) records.
EmployerGroupName : nvarchar(300)
Name of the employer group associated with the transaction
CorporationEpicId : nvarchar(50)
Epic ID of the corporation associated with the transaction. This column is used to identify corporation (CPG) records.
CorporationName : nvarchar(200)
Name of the corporation associated with the transaction
DivisionEpicId : nvarchar(50)
Epic ID of the division associated with the transaction. This column is used to identify division (DPG) records.
DivisionName : nvarchar(200)
Name of the division associated with the transaction
RiskPanelEpicId : nvarchar(50)
Epic ID of the risk panel associated with the transaction. This column is used to identify risk panel (RKP) records.
RiskPanelName : nvarchar(100)
Name of the risk panel associated with the transaction
ResponsibilityClassEpicId : nvarchar(50)
Epic ID of the responsibility class associated with the transaction. This column is used to identify responsibility class (NRC) records.
ResponsibilityClassName : nvarchar(200)
Name of the responsibility class associated with the transaction
Specialty : nvarchar(300)
Name of the specialty associated with the transaction
Source : nvarchar(50)
Source of the transaction
CheckNumber : nvarchar(200)
Check number associated with the transaction
Amount : numeric(18,2)
Amount of the transaction, not including any interest or penalties
InterestAmount : numeric(18,2)
The interest amount of the transaction
PenaltyAmount : numeric(18,2)
The penalty amount of the transaction
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## MappingTableColumnBridge

**Extracted:** 2025-07-23 00:20:20
**Content Length:** 1183 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Dim
Try It
MappingDim
The mapping dimension contains mappings between columns, their values and standards-based values. Each row represents a mapping from a table, column, and value to a standard value. Change Type: Non-Snapshot
Columns
MappingKey : bigint
Surrogate key used to uniquely identify the record
MappingTableColumnComboKey : bigint
Links to MappingTableColumnBridge
The combination of reporting table names and associated column names where this mapping can be applied
SourceValue : nvarchar(300)
The value that is mapped
StandardId : nvarchar(50)
The ID of the standard associated with this mapping
StandardCode : nvarchar(50)
The code the associated standard uses for this mapping
StandardTerm : nvarchar(300)
The term the associated standard uses for this mapping
SourceValueId : nvarchar(300)
The value that should be used to join MappingDim to the appropriate Warehouse dimension table
EpicReleased : bit
1/0 column that indicates whether the value is released by Epic. This column returns 1 if the value is released by Epic and 0 if the value is not released by Epic.
```

---

## MappingTableColumnDim

**Extracted:** 2025-07-23 00:20:36
**Content Length:** 645 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class A Helper
Try It
MappingTableColumnBridge
The MappingTableColumn bridge contains unique combinations of reporting table name and column name pairs and flowsheet row names that correspond to terminology mappings in MappingDim Change Type: Non-Snapshot
Columns
MappingTableColumnComboKey : bigint
Combination key used to uniquely identify a set of table names/column names, INIs/items, or flowsheet row names
MappingTableColumnKey : bigint
Links to MappingTableColumnDim
A table name/column name, INI/item, or flowsheet row name pair in the combination
```

---

## MedicationCodeCostMappingDim

**Extracted:** 2025-07-23 00:20:51
**Content Length:** 1046 characters

**Content:**
```
MedicationCodeCostMappingDim
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Dim
Try It
MedicationCodeCostMappingDim
The medication code cost mapping dimension contains information about cost codes for medication packages. Each row represents a cost code for a medication package for a specified time period. Change Type: Non-Snapshot
Columns
MedicationCodeCostMappingKey : bigint
Surrogate key used to uniquely identify the record
MedicationCodeKey : bigint
Links to MedicationCodeDim
The medication package associated with this cost
StartDateKey : bigint
Links to DateDim
The effective start date for the associated cost
EndDateKey : bigint
Links to DateDim
The effective end date for the associated cost
CostCode : nvarchar(300)
The cost code for the associated cost
Cost : numeric(19,3)
The package cost to use to calculate the total cost for a charge
CostIsPerUnit : tinyint
1/0 column indicating whether the associated price applies to the charged quantity unit instead of the whole package
```

---

## MedicationAdjudicationFact

**Extracted:** 2025-07-23 00:21:06
**Content Length:** 1017 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Dim
Try It
MedicationCodeCostMappingDim
The medication code cost mapping dimension contains information about cost codes for medication packages. Each row represents a cost code for a medication package for a specified time period. Change Type: Non-Snapshot
Columns
MedicationCodeCostMappingKey : bigint
Surrogate key used to uniquely identify the record
MedicationCodeKey : bigint
Links to MedicationCodeDim
The medication package associated with this cost
StartDateKey : bigint
Links to DateDim
The effective start date for the associated cost
EndDateKey : bigint
Links to DateDim
The effective end date for the associated cost
CostCode : nvarchar(300)
The cost code for the associated cost
Cost : numeric(19,3)
The package cost to use to calculate the total cost for a charge
CostIsPerUnit : tinyint
1/0 column indicating whether the associated price applies to the charged quantity unit instead of the whole package
```

---

## MedicationAdministrationFact

**Extracted:** 2025-07-23 00:21:23
**Content Length:** 4560 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class E Fact
Try It
MedicationAdjudicationFact
The medication adjudication fact contains information about medication dispense adjudications for primary, secondary, and tertiary payers. Each row represents an adjudication. Change Type: Non-Snapshot
Columns
MedicationAdjudicationKey : bigint
Surrogate key used to uniquely identify the record
AdjudicationDateKey : bigint
Links to DateDim
Date the adjudication action was performed
AdjudicationTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day the adjudication action was performed
CoverageKey : bigint
Links to CoverageDim
The coverage that the adjudication was sent to
InitiatingEmployeeDurableKey : bigint
Links to EmployeeDim
Employee who initiated the adjudication
MedicationDispenseKey : bigint
Links to MedicationDispenseFact
Medication dispense the adjudication was for
ServiceDateKey : bigint
Links to DateDim
The date the prescription was filled or professional service was rendered for this adjudication
AdjudicationInstant : datetime
The instant when the adjudication action was performed on the dispense
AuthorizationNumber : nvarchar(50)
Number assigned by the payer to identify an authorized transaction
BankInformationNumber : nvarchar(50)
Card Issuer ID or Bank ID Number used for network routing
CardholderFirstName : nvarchar(50)
First name of the holder of the insurance coverage used in this adjudication
CardholderLastName : nvarchar(50)
Last name of the holder of the insurance coverage used in this adjudication
CompoundCode : nvarchar(200)
Indicator of whether the prescription in this adjudication is a compound or not
ContractNumber : nvarchar(50)
Contract number returned by the payer for this adjudication
Copay : numeric(18,2)
Patient copay
CostDeterminationBasis : nvarchar(200)
How the submitted amount in column IngredientCostSubmitted was calculated
DispensingFeePaid : numeric(18,3)
Dispensing fee paid by the payer in this adjudication
DispensingFeeSubmitted : numeric(18,2)
Dispensing fee submitted by the pharmacy in this adjudication
FlatSalesTaxPaid : numeric(18,3)
Flat sales tax paid by the payer in this adjudication
FlatSalesTaxSubmitted : numeric(18,2)
Flat sales tax submitted by the pharmacy in this adjudication
FormularyId : nvarchar(50)
ID of the formulary list, returned by payer in this adjudication
GroupId : nvarchar(300)
The ID assigned to the cardholder group or employer group
IngredientCostPaid : numeric(18,3)
Product component cost paid by the payer in this adjudication
IngredientCostSubmitted : numeric(18,2)
Product component cost submitted by the pharmacy in this adjudication
MedicationAdjudicationEpicId : numeric(18,0)
Epic ID of the medication adjudication. This column identifies Rx Adjudication (RXA) records.
NetworkReimbursementId : nvarchar(50)
Network identifier used to calculate the reimbursement to the pharmacy in this adjudication
OtherCoverageCode : nvarchar(200)
Indicator of whether the patient has other insurance coverage or not
OtherPayerBankInformationNumber : nvarchar(50)
Bank information number for the other coverage other than the one used in this adjudication
PatientPayAmount : numeric(18,2)
Amount that is calculated by the processor and returned to the pharmacy as the total amount to be paid by the patient to the pharmacy
PayerId : nvarchar(50)
The ID of the payer from the Payer ID field of the adjudication response
PayerType : nvarchar(50)
Payer type, either Primary, Secondary, or Tertiary
PersonCode : nvarchar(50)
Code assigned to a specific person within a family
PlanId : nvarchar(50)
Assigned by the processor to identify a set of parameters, benefit, or coverage criteria used to adjudicate a claim
PlanPatientId : nvarchar(50)
Insurance ID assigned to the cardholder or identification number used by the plan
ProcessorControlNumber : nvarchar(50)
Number assigned by the processor
ReimbursementDeterminationBasis : nvarchar(200)
How the reimbursement amount in column IngredientCostPaid was calculated
RelationshipToCardholder : nvarchar(200)
The relationship of the patient to the holder of the insurance coverage used in this adjudication
TotalPaidAmount : numeric(18,3)
Total amount to be paid by the payer in this adjudication
TransactionType : nvarchar(50)
The type of NCPDP transaction made for this adjudication. For Epic data, this value will be either Bill, Reversal, or Rebill.
UsualCustomaryChargeSubmitted : numeric(18,2)
Usual and customary charge submitted by the pharmacy in this adjudication
```

---

## MedicationCodeDim

**Extracted:** 2025-07-23 00:21:40
**Content Length:** 6349 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class E Fact
Try It
MedicationAdministrationFact
The medication administration fact contains information about medication and feeding product administrations. Each row represents a medication or feeding product administration. For Epic data, the fact table includes records with administration actions: given, new bag, bolus, and push. It also includes custom actions mapped to those actions. Change Type: Non-Snapshot
Columns
MedicationAdministrationKey : bigint
Surrogate key used to uniquely identify the record
PatientKey : bigint
Links to PatientDim
Patient associated with the administration
PatientDurableKey : bigint
Links to PatientDim
Patient associated with the administration
EncounterKey : bigint
Links to EncounterFact
Encounter associated with the administration
MedicationOrderKey : bigint
Links to MedicationOrderFact
Parent medication or feeding order associated with the administration
PrimaryComponentKey : bigint
Links to MedicationDim
Primary administered component
SecondComponentKey : bigint
Links to MedicationDim
Second administered component
ThirdComponentKey : bigint
Links to MedicationDim
Third administered component
FourthComponentKey : bigint
Links to MedicationDim
Fourth administered component
FifthComponentKey : bigint
Links to MedicationDim
Fifth administered component
AdministrationDepartmentKey : bigint
Links to DepartmentDim
Department associated with the administration
ScheduledAdministrationDateKey : bigint
Links to DateDim
Date the administration was scheduled to occur
ScheduledAdministrationTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day the administration was scheduled to occur
AdministrationDateKey : bigint
Links to DateDim
Date the administration occurred
AdministrationTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day the administration occurred
AdministeringEmployeeKey : bigint
Links to EmployeeDim
Employee who administered the medication
AdministeringEmployeeDurableKey : bigint
Links to EmployeeDim
Employee who administered the medication
MedicationKey : bigint
Links to MedicationDim
Medication or feeding product associated with the administration
AdministrationAction : nvarchar(300)
Action associated with the administration
PrimaryComponentNdc : nvarchar(300)
National Drug Code (NDC) for the primary component administered
SecondComponentNdc : nvarchar(300)
National Drug Code (NDC) for the second component administered
ThirdComponentNdc : nvarchar(300)
National Drug Code (NDC) for the third component administered
FourthComponentNdc : nvarchar(300)
National Drug Code (NDC) for the fourth component administered
FifthComponentNdc : nvarchar(300)
National Drug Code (NDC) for the fifth component administered
ScheduledAdministrationInstant : datetime
Date and time the administration was scheduled to occur
AdministrationInstant : datetime
Date and time the administration occurred
EncounterEpicCsn : numeric(18,0)
Epic contact serial number (CSN) of the encounter associated with the administration. This column identifies patient (EPT) contacts.
MedicationRepresentativeCost : numeric(18,2)
Total representative cost of the medications for the administration. If no value is recorded in the system, this amount is converted to zero.
MedicationAcquisitionCost : numeric(18,2)
Total acquisition cost of the medications for the administration. If no value is recorded in the system, this amount is converted to zero.
MedicationOrderEpicId : numeric(18,0)
Epic ID of the medication or feeding order. This column identifies order (ORD) records.
AnesthesiaAdministrationWasScanned : tinyint
1/0 column that indicates whether the medication was scanned at administration during anesthesia intraprocedure. This column returns 1 if the medication was scanned at administration and 0 if the medication administration wasn't scanned.
IsPrn : tinyint
1/0 column that indicates whether this administration is for a PRN medication. This column returns 1 if the medication is PRN and 0 if it isn't. If no PRN value is specified, the column returns NULL.
IsPainReassessmentAccepted : tinyint
1/0 column that indicates whether the flowsheet value for pain reassessment was accepted and is not currently pended. This column returns 1 if the flowsheet value was accepted and 0 if the flowsheet value wasn't accepted. This column returns NULL if no pain reassessment was required.
AdministeredBeforeVerification : tinyint
1/0 column that indicates whether the administration was documented before the order was verified by a pharmacist or autoverified. This column returns 1 if the administration was done before the order's first verification or if the order was not verified and 0 otherwise.
SpecialMedicationType : nvarchar(300)
Special type linked to the product given in this administration
AdministrationRoute : nvarchar(300)
Route through which the medication or feeding product was administered
PatientUnscannedReason : nvarchar(300)
Override reason given for why a patient was not scanned for an administration
ProductUnscannedReason : nvarchar(300)
Override reason given for why a product was not scanned for an administration
PatientSpecificPackageNotScannedReason : nvarchar(300)
Override reason given for why a patient-specific package was not scanned for an administration.
AdministrationType : nvarchar(300)
Indicates whether the administration is for a medication or a feeding product
Dose : nvarchar(200)
Dose value of the administration
DoseUnit : nvarchar(300)
Unit associated with the dose of the administration
AdsOverride : tinyint
1/0 column that indicates whether the medication administration was created from an ADS override. This column returns 1 if the medication administration was created from an ADS override and 0 if the medication administration wasn't created from an ADS override.
ClientType : nvarchar(300)
The type of client (Hyperspace/Rover/etc.) used to document the administration
CupIdentifier : nvarchar(50)
This is the ID that dictates which cup an administration belongs to
PatientSpecificPackageIdentifier : nvarchar(200)
This is the identifier that dictates which patient-specific package an administration belongs to.
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## MedicationComponentBridge

**Extracted:** 2025-07-23 00:21:55
**Content Length:** 1982 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Dim
Try It
MedicationCodeDim
The medication code dimension contains information about codes for medications. Each row represents a code for a medication. For Epic data, the dimension includes NDC codes and RxNorm codes. Change Type: Non-Snapshot
Columns
MedicationCodeKey : bigint
Surrogate key used to uniquely identify the record
MedicationKey : bigint
Links to MedicationDim
Medication associated with the medication code
TerminologyConceptKey : bigint
Links to TerminologyConceptDim
Standard concept in TerminologyConceptDim associated with the medication
Type : nvarchar(50)
Type of the medication code
Code : nvarchar(300)
Medication code
Classification : nvarchar(300)
ATC code name
RawNumericCode : numeric(18,0)
Raw numeric medication code. For National Drug Codes (NDC), this is the raw 11-digit form of the code converted to a numeric value. This is set to NULL if the code is not an NDC code.
IsNdcDeleted : tinyint
1/0 column that indicates whether the National Drug Code (NDC) is deleted. This column returns 1 if the NDC is deleted, 0 if the NDC is not deleted, and NULL if the code is not an NDC code.
IsNdcHidden : tinyint
1/0 column that indicates whether the National Drug Code (NDC) is hidden. This column returns 1 if the NDC is hidden, 0 if the NDC is not hidden, and NULL if the code is not an NDC code.
IsNdcSafeExternalMatch : tinyint
1/0 column that indicates whether the National Drug Code (NDC) can safely be used to match on if it's coming from external data. This column returns 1 if the NDC can be used to match external data safely, 0 if the NDC should not be used to match external data, and NULL if the code is not an NDC code.
PackageSize : numeric(12,3)
Number of medication products in each NDC-labeled container or unit. This column returns NULL if the code is not an NDC code.
PackageSizeUnit : nvarchar(300)
Unit of measure for the package size
```

---

## MedicationDim

**Extracted:** 2025-07-23 00:22:11
**Content Length:** 2343 characters

**Content:**
```
MedicationDim
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Dim
Try It
MedicationDim
The medication dimension contains information about medications. Each row represents a medication. Change Type: Non-Snapshot
Columns
MedicationKey : bigint
Surrogate key used to uniquely identify the record
MedicationEpicId : numeric(18,0)
Epic ID of the medication. This column identifies medication (ERX) records.
Name : nvarchar(300)
Name of the medication
GenericName : nvarchar(200)
Generic, non-proprietary name of the medication. For Epic data, if the medication has multiple generic names, this is the first name listed.
SimpleGenericName : nvarchar(300)
Simple generic, non-proprietary name of the medication. For Epic data, if the medication has multiple simple generic names, this is the first name listed.
TherapeuticClass : nvarchar(300)
Therapeutic class that indicates the accepted purpose of the medication
PharmaceuticalClass : nvarchar(300)
Pharmaceutical class that indicates the chemical family the medication belongs to
PharmaceuticalSubclass : nvarchar(300)
Pharmaceutical subclass that indicates the chemical family the medication belongs to. For Epic data, if there are multiple subclasses for the medication, this is the first subclass listed.
DeaClass : nvarchar(300)
Drug Enforcement Administration (DEA) Controlled Substance Code for the medication
Gpi : nvarchar(200)
Generic Product Identifier (GPI) for the medication. For Epic data, if there are multiple GPIs for the medication, this is the first GPI listed.
Strength : nvarchar(300)
Strength of the medication
Form : nvarchar(300)
Form of the medication
Route : nvarchar(300)
Administration route of the medication
Controlled : tinyint
1/0 column that indicates whether the medication is a controlled substance. This column returns 1 if the medication is a controlled substance and 0 if the medication isn't a controlled substance.
Opioid : tinyint
1/0 column that indicates whether the medication is an opioid. This column returns 1 if the medication is an opioid and 0 if the medication isn't an opioid.
OpioidAntagonist : tinyint
1/0 column that indicates whether the medication is an opioid antagonist. This column returns 1 if the medication is an opioid antagonist and 0 if the medication isn't an opioid antagonist.
```

---

## MedicationDispenseComponentFact

**Extracted:** 2025-07-23 00:22:27
**Content Length:** 2329 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Dim
Try It
MedicationDim
The medication dimension contains information about medications. Each row represents a medication. Change Type: Non-Snapshot
Columns
MedicationKey : bigint
Surrogate key used to uniquely identify the record
MedicationEpicId : numeric(18,0)
Epic ID of the medication. This column identifies medication (ERX) records.
Name : nvarchar(300)
Name of the medication
GenericName : nvarchar(200)
Generic, non-proprietary name of the medication. For Epic data, if the medication has multiple generic names, this is the first name listed.
SimpleGenericName : nvarchar(300)
Simple generic, non-proprietary name of the medication. For Epic data, if the medication has multiple simple generic names, this is the first name listed.
TherapeuticClass : nvarchar(300)
Therapeutic class that indicates the accepted purpose of the medication
PharmaceuticalClass : nvarchar(300)
Pharmaceutical class that indicates the chemical family the medication belongs to
PharmaceuticalSubclass : nvarchar(300)
Pharmaceutical subclass that indicates the chemical family the medication belongs to. For Epic data, if there are multiple subclasses for the medication, this is the first subclass listed.
DeaClass : nvarchar(300)
Drug Enforcement Administration (DEA) Controlled Substance Code for the medication
Gpi : nvarchar(200)
Generic Product Identifier (GPI) for the medication. For Epic data, if there are multiple GPIs for the medication, this is the first GPI listed.
Strength : nvarchar(300)
Strength of the medication
Form : nvarchar(300)
Form of the medication
Route : nvarchar(300)
Administration route of the medication
Controlled : tinyint
1/0 column that indicates whether the medication is a controlled substance. This column returns 1 if the medication is a controlled substance and 0 if the medication isn't a controlled substance.
Opioid : tinyint
1/0 column that indicates whether the medication is an opioid. This column returns 1 if the medication is an opioid and 0 if the medication isn't an opioid.
OpioidAntagonist : tinyint
1/0 column that indicates whether the medication is an opioid antagonist. This column returns 1 if the medication is an opioid antagonist and 0 if the medication isn't an opioid antagonist.
```

---

## MedicationDispenseFact

**Extracted:** 2025-07-23 00:22:43
**Content Length:** 1971 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Fact
Try It
MedicationDispenseComponentFact
The medication dispense component fact contains information about components used in medication dispenses. Each row represents a medication used in a dispense. Change Type: Non-Snapshot
Columns
MedicationDispenseComponentKey : bigint
Surrogate key used to uniquely identify the record
MedicationDispenseKey : bigint
Links to MedicationDispenseFact
Dispense record which the component belongs to
MedicationOrderKey : bigint
Links to MedicationOrderFact
Order record for the dispense
MedicationKey : bigint
Links to MedicationDim
Medication record for the dispense component
ReadyToDispenseDateKey : bigint
Links to DateDim
Date the dispense was ready to be dispensed. For Epic data, this is when the labels were printed.
ReadyToDispenseTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day the dispense was ready to be dispensed. For Epic data, this is when the labels were printed.
DispenseAmount : float
The amount of the medication component that was dispensed. For Epic data, this amount is converted to the dispense unit specified in the medication record.
AdministrationAmount : float
The amount of the medication component that was administered from this dispense. For Epic data, this amount is converted to the dispense unit specified in the medication record.
ReturnAmount : float
The amount of the medication component that was returned from this dispense. For Epic data, this amount is converted to the dispense unit specified in the medication record.
WasteAmount : float
The amount of the medication component that was wasted from this dispense. For Epic data, this amount is converted to the dispense unit specified in the medication component record.
AmountUnit : nvarchar(50)
The unit used for calculating the amount columns. For Epic data, this is the dispense unit specified in the medication component record.
```

---

## MedicationEventFact

**Extracted:** 2025-07-23 00:23:05
**Content Length:** 36506 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class G Fact
Try It
MedicationDispenseFact
The medication dispense fact contains information about medication dispenses. Each row represents a medication dispense. Change Type: Non-Snapshot
Columns
MedicationDispenseKey : bigint
Surrogate key used to uniquely identify the record
PatientKey : bigint
Links to PatientDim
Patient associated with the order getting dispensed
PatientDurableKey : bigint
Links to PatientDim
Patient associated with the order getting dispensed
MedicationOrderKey : bigint
Links to MedicationOrderFact
Parent order associated with the dispense. For Epic data, if the order is a bulk dispense or is not released this column is not applicable. If the dispense is an override pull that is linked to a clinical order this column contains the clinical order. This column is unspecified for override pulls that are not linked.
MedicationKey : bigint
Links to MedicationDim
Medication or mixture associated with the order
OrderMedicationComponentComboKey : bigint
Links to MedicationComponentBridge
All medication components associated with the order
PrimaryComponentKey : bigint
Links to MedicationDim
Primary component associated with the dispense
SecondComponentKey : bigint
Links to MedicationDim
Second component associated with the dispense
ThirdComponentKey : bigint
Links to MedicationDim
Third component associated with the dispense
FourthComponentKey : bigint
Links to MedicationDim
Fourth component associated with the dispense
FifthComponentKey : bigint
Links to MedicationDim
Fifth component associated with the dispense
DepartmentKey : bigint
Links to DepartmentDim
Department associated with the dispense
DispensePharmacyKey : bigint
Links to PharmacyDim
Pharmacy associated with the dispense
FillPharmacyKey : bigint
Links to PharmacyDim
Pharmacy associated with the fill. For Epic data, this column isn't populated for inpatient dispenses.
ReleaseDateKey : bigint
Links to DateDim
Date the associated order was released. For outpatient dispenses in Epic, this is the date that the fill reached the pending fill status.
ReleaseTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day the associated order was released. For outpatient dispenses in Epic, this is the time that the fill reached the pending fill status.
ReadyToFillDateKey : bigint
Links to DateDim
Date the dispense was ready to be filled. For Epic data, this column isn't populated for inpatient dispenses.
ReadyToFillTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day the dispense was ready to be filled. For Epic data, this column isn't populated for inpatient dispenses.
FillInitiatedDateKey : bigint
Links to DateDim
Date a fill was initiated. For Epic data, this column isn't populated for inpatient dispenses.
FillInitiatedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day a fill was initiated. For Epic data, this column isn't populated for inpatient dispenses.
FilledDateKey : bigint
Links to DateDim
Date a fill was completed. For Epic data, this column isn't populated for inpatient dispenses.
FilledTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day a fill was completed. For Epic data, this column isn't populated for inpatient dispenses.
VerifiedDateKey : bigint
Links to DateDim
Date the dispense was verified. For Epic data, this is the date the dispense was first verified.
VerifiedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day the dispense was verified. For Epic data, this is the time of day the dispense was first verified.
ReadyToPackageDateKey : bigint
Links to DateDim
Date the dispense was ready to be packaged. For Epic data, this column isn't populated for inpatient dispenses.
ReadyToPackageTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day the dispense was ready to be packaged. For Epic data, this column isn't populated for inpatient dispenses.
ReceivedByDispensingPharmacyDateKey : bigint
Links to DateDim
Date the fill was received from the remote filling pharmacy. For Epic data, this column isn't populated for inpatient dispenses.
ReceivedByDispensingPharmacyTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day the fill was received from the remote filling pharmacy. For Epic data, this column isn't populated for inpatient dispenses.
ReadyToDispenseDateKey : bigint
Links to DateDim
Date the dispense was ready to be dispensed. For Epic data, this is the date when labels were printed for inpatient dispenses. For inpatient dispenses currently in the dispense queue, this is the date that the dispense was added to the queue. For outpatient dispenses in Epic, this is the date the fill was ready to be given to the patient.
ReadyToDispenseTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day the dispense was ready to be dispensed. For Epic data, this is the time when labels were printed for inpatient dispenses. For inpatient dispenses currently in the dispense queue, this is the time that the dispense was added to the queue. For outpatient dispenses in Epic, this is the time the fill was ready to be given to the patient.
FirstReviseRequestDateKey : bigint
Links to DateDim
Date the revision was requested for the dispense. If the dispense required multiple revisions, this will only store the date of the first request.
FirstReviseRequestTimeOfDayKey : bigint
Links to TimeOfDayDim
Time the revision was requested for the dispense. If the dispense required multiple revisions, this will only store the time of the first request.
FirstMidPrepSubmissionDateKey : bigint
Links to DateDim
Date the mid-prep review was sent for the dispense. If the dispense required multiple reviews, this will only store the date of the first time it was sent for review.
FirstMidPrepSubmissionTimeOfDayKey : bigint
Links to TimeOfDayDim
Time the mid-prep review was sent for the dispense. If the dispense required multiple reviews, this will only store the time of the first time it was sent for review.
DispensePreparedDateKey : bigint
Links to DateDim
Date and time the dispense was prepared. For outpatient dispenses in Epic, this is the date that the fill was dispensed.
DispensePreparedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day the dispense was prepared. For outpatient dispenses in Epic, this is the time that the fill was dispensed.
FinalLabelCheckDateKey : bigint
Links to DateDim
Date the final label check was completed
FinalLabelCheckTimeOfDayKey : bigint
Links to TimeOfDayDim
Time the final label check was completed
DispenseSentDateKey : bigint
Links to DateDim
Date the dispense was sent. For outpatient dispenses in Epic, this is the date that the fill was shipped.
DispenseSentTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day the dispense was sent. For outpatient dispenses in Epic, this is the time that the fill was shipped.
DispenseReceivedDateKey : bigint
Links to DateDim
Date the dispense was received. For outpatient dispenses in Epic, this is the date that the fill was sent out for delivery.
DispenseReceivedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day the dispense was received. For outpatient dispenses in Epic, this is the time that the fill was sent out for delivery.
ServiceDateKey : bigint
Links to DateDim
The date of service of this medication dispense.
WastedDateKey : bigint
Links to DateDim
Date when waste was documented for the dispense
WastedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when waste was documented for the dispense
FillingEmployeeDurableKey : bigint
Links to EmployeeDim
Employee who filled the associated order. For Epic data, this column isn't populated for inpatient dispenses.
VerifyingEmployeeKey : bigint
Links to EmployeeDim
Employee who verified the associated order. For Epic inpatient data, if the dispense was dual verified this is the second verifying employee and if the medication order was conditional this is the reviewing employee.
VerifyingEmployeeDurableKey : bigint
Links to EmployeeDim
Employee who verified the associated order. For Epic inpatient data, if the dispense was dual verified this is the second verifying employee and if the medication order was conditional this is the reviewing employee.
DispensingEmployeeKey : bigint
Links to EmployeeDim
Employee who dispensed the associated order
DispensingEmployeeDurableKey : bigint
Links to EmployeeDim
Employee who dispensed the associated order
FirstReviseRequestEmployeeKey : bigint
Links to EmployeeDim
Employee who requested a revision for the dispense in mid-prep review. If the dispense required multiple revisions, this will only store the employee who requested the first revision.
FirstReviseRequestEmployeeDurableKey : bigint
Links to EmployeeDim
Employee who requested a revision for the dispense in mid-prep review. If the dispense required multiple revisions, this will only store the employee who requested the first revision.
FirstMidPrepSubmissionEmployeeKey : bigint
Links to EmployeeDim
Employee who sent the dispense for mid-prep review. If the dispense required multiple reviews, this will only store the employee who sent it for review the first time.
FirstMidPrepSubmissionEmployeeDurableKey : bigint
Links to EmployeeDim
Employee who sent the dispense for mid-prep review. If the dispense required multiple reviews, this will only store the employee who sent it for review the first time.
FinalLabelCheckEmployeeDurableKey : bigint
Links to EmployeeDim
User who completed the final label check for the dispense
FinalDispenseCheckEmployeeKey : bigint
Links to EmployeeDim
Employee who checked the dispense before it was sent to the patient and approved or rejected the dispense. For Epic inpatient data, if the dispense was checked twice, this is the second check employee. This column isn't populated for outpatient dispenses.
FinalDispenseCheckEmployeeDurableKey : bigint
Links to EmployeeDim
Employee who checked the dispense before it was sent to the patient and approved or rejected the dispense. For Epic inpatient data, if the dispense was checked twice, this is the second check employee. This column isn't populated for outpatient dispenses.
DispenseSentEmployeeKey : bigint
Links to EmployeeDim
Employee who sent the dispense to its destination
DispenseSentEmployeeDurableKey : bigint
Links to EmployeeDim
Employee who sent the dispense to its destination
DispenseReceivedEmployeeKey : bigint
Links to EmployeeDim
Employee who received the dispense at its destination
DispenseReceivedEmployeeDurableKey : bigint
Links to EmployeeDim
Employee who received the dispense at its destination
DispenseReceivedDepartmentKey : bigint
Links to DepartmentDim
Department where the dispense was received
AdministrationEmployeeKey : bigint
Links to EmployeeDim
Employee who documented the administration associated with the dispense. For Epic data, if a dispense is associated with more than one administration, this is from the first administration. This column isn't populated for outpatient dispenses.
AdministrationEmployeeDurableKey : bigint
Links to EmployeeDim
Employee who documented the administration associated with the dispense. For Epic data, if a dispense is associated with more than one administration, this is from the first administration. This column isn't populated for outpatient dispenses.
WasteEmployeeDurableKey : bigint
Links to EmployeeDim
Employee who wasted medication after it was dispensed
WasteFirstSignoffEmployeeDurableKey : bigint
Links to EmployeeDim
Employee who signed off on the waste of the medication after it was dispensed. For Epic inpatient data, if the waste was signed off on by multiple employees, this is the first employee to sign off on the waste.
FirstCoverageKey : bigint
Links to CoverageDim
First coverage associated with the dispense. For Epic data, this column isn't populated for inpatient dispenses.
SecondCoverageKey : bigint
Links to CoverageDim
Second coverage associated with the dispense. For Epic data, this column isn't populated for inpatient dispenses.
ThirdCoverageKey : bigint
Links to CoverageDim
Third coverage associated with the dispense. For Epic data, this column isn't populated for inpatient dispenses.
EncounterKey : bigint
Links to EncounterFact
Encounter associated with the medication order
PreparationWorkstationKey : bigint
Links to WorkstationDim
The workstation where this dispense was prepared
OrderName : nvarchar(700)
The name of the order
PrimaryComponentQuantityUnit : nvarchar(300)
Unit for the quantity of the primary component dispensed
SecondComponentQuantityUnit : nvarchar(300)
Unit for the quantity of the second component dispensed. For Epic data, this column isn't populated for outpatient dispenses.
ThirdComponentQuantityUnit : nvarchar(300)
Unit for the quantity of the third component dispensed. For Epic data, this column isn't populated for outpatient dispenses.
FourthComponentQuantityUnit : nvarchar(300)
Unit for the quantity of the fourth component dispensed. For Epic data, this column isn't populated for outpatient dispenses.
FifthComponentQuantityUnit : nvarchar(300)
Unit for the quantity of the fifth component dispensed. For Epic data, this column isn't populated for outpatient dispenses.
IntendedQuantityUnit : nvarchar(300)
Intended quantity unit of this medication dispense. For Epic data, this column is not populated for inpatient dispenses.
PrimaryComponentNdc : nvarchar(300)
National Drug Code (NDC) for the primary component dispensed
SecondComponentNdc : nvarchar(300)
National Drug Code (NDC) for the second component dispensed
ThirdComponentNdc : nvarchar(300)
National Drug Code (NDC) for the third component dispensed
FourthComponentNdc : nvarchar(300)
National Drug Code (NDC) for the fourth component dispensed
FifthComponentNdc : nvarchar(300)
National Drug Code (NDC) for the fifth component dispensed
PrimaryComponentUnformattedNdc : nvarchar(300)
Raw 11-digit National Drug Code (NDC) for the primary component dispensed
SecondComponentUnformattedNdc : nvarchar(300)
Raw 11-digit National Drug Code (NDC) for the second component dispensed
ThirdComponentUnformattedNdc : nvarchar(300)
Raw 11-digit National Drug Code (NDC) for the third component dispensed
FourthComponentUnformattedNdc : nvarchar(300)
Raw 11-digit National Drug Code (NDC) for the fourth component dispensed
FifthComponentUnformattedNdc : nvarchar(300)
Raw 11-digit National Drug Code (NDC) for the fifth component dispensed
Mode : nvarchar(50)
Mode for the dispense. For Epic data, this column can contain Inpatient or Outpatient.
DispenseCode : nvarchar(300)
Code for the dispense. For Epic data, this column isn't populated for outpatient dispenses.
DeliveryMethod : nvarchar(300)
Delivery method for the dispense
DispenseType : nvarchar(50)
The type of dispense. For Epic data, this column is not applicable for outpatient orders. This column can contain Non-Clinical ADS Override, ADS Override, ADS Dispense, Cart, First Dose, Bulk Charge, or Redispense.
RedispenseReason : nvarchar(300)
The reason the dispense user documented why the medication was redispensed. For Epic data, if the dispense is not a redispense or is outpatient, this column is not applicable.
DispenseInterfaceComment : nvarchar(1000)
Comment received from the interface message that created this dispense. For Epic data, this is only populated on ADS dispenses. This column contains the name of the employee who created an ADS dispense.
FirstReviseReason : nvarchar(300)
The reason why a revision was requested for the dispense. If the dispense required multiple revisions, this will only store the reason for the first request.
Accumulator : nvarchar(300)
The accumulator applied for this medication dispense. For Epic data, this column isn't populated for inpatient dispenses.
Calculated340BEligibility : tinyint
1/0 column that indicates the calculated 340B eligibility of this fill. This column returns 1 if the fill is calculated to be eligible for 340B, 0 if not.
Overridden340BEligibility : tinyint
1/0 column that indicates the fill's 340B eligibility when overridden by a user. This column returns 1 if the overridden 340B eligibility value is Yes, and 0 if the overridden 340B eligibility value is No. If not set, the calculated value (Calculated340BEligibility - I ORD 49480) is applicable.
FillStatus : nvarchar(300)
The fill status of the medication dispense. For Epic data, this column isn't populated for inpatient dispenses.
RequestSource : nvarchar(300)
The source where this medication dispense is requested from. For Epic data, this column is not populated for inpatient dispenses.
DAWReason : nvarchar(300)
Reason why this is dispensed as written. For Epic data, this column is not populated for inpatient dispenses.
FinalLabelCheckStatus : nvarchar(300)
The current status of the final label check for the medication dispense
WasteSource : nvarchar(100)
The source where waste was documented for the dispense
PreparationCompoundingAreaType : nvarchar(300)
The compounding area type of the workstation where the dispense was prepared
PreparationCompoundingMethod : nvarchar(300)
The compounding method for the dispense preparation
PreparationBeyondUseDateComment : nvarchar(500)
The most recent comment entered when the beyond-use date was manually overridden
MedicationOrderEpicId : numeric(18,0)
Epic ID of the medication order. This column identifies order (ORD) records.
ReleaseInstant : datetime
Date and time the associated order was released. For outpatient dispenses in Epic, this is the date and time that the fill reached the pending fill status.
ReadyToFillInstant : datetime
Date and time the dispense was ready to be filled. For Epic data, this column isn't populated for inpatient dispenses.
FillInitiatedInstant : datetime
Date and time a fill was initiated. For Epic data, this column isn't populated for inpatient dispenses.
FilledInstant : datetime
Date and time a fill was completed. For Epic data, this column isn't populated for inpatient dispenses.
VerifiedInstant : datetime
Date and time the dispense was verified. For Epic data, this is the date the dispense was first verified.
ReadyToPackageInstant : datetime
Date and time the dispense was ready to be packaged. For Epic data, this column isn't populated for inpatient dispenses.
ReceivedByDispensingPharmacyInstant : datetime
Date and time the fill was received from the remote filling pharmacy. For Epic data, this column isn't populated for inpatient dispenses.
ReadyToDispenseInstant : datetime
Date and time the dispense was ready to be dispensed. For Epic data, this is the date and time when labels were printed for inpatient dispenses. For inpatient dispenses currently in the dispense queue, this is the date and time that the dispense was added to the queue. For outpatient dispenses in Epic, this is the date and time the fill was ready to be given to the patient.
PreparationStartOfCompoundingInstant : datetime
The instant at which the user started compounding the dispense preparation
FirstReviseRequestInstant : datetime
Instant the revision was requested for the dispense. If the dispense required multiple revisions, this will only store the instant of the first request.
FirstMidPrepSubmissionInstant : datetime
Instant the mid-prep review was sent for the dispense. If the dispense required multiple reviews, this will only store the instant of the first time it was sent for review.
DispensePreparedInstant : datetime
Date and time the dispense was prepared. For outpatient dispenses in Epic, this is the date and time that the fill was dispensed.
PreparationBeyondUseDateInstant : datetime
The beyond-use date instant of the dispense after it was prepared
FinalLabelCheckInstant : datetime
Date and time the final label check was completed
FinalDispenseCheckInstant : datetime
Date and time the dispense was checked and approved or rejected before it was sent to the patient. For Epic inpatient data, if the dispense was checked twice, this is the date and time of the second check. This column isn't populated for outpatient dispenses.
DispenseSentInstant : datetime
Date and time the dispense was sent. For outpatient dispenses in Epic, this is the date and time that the fill was shipped.
DispenseReceivedInstant : datetime
Date and time the dispense was received. For outpatient dispenses in Epic, this is the date and time that the fill was sent out for delivery.
AdministeredInstant : datetime
Date and time the dispense was given to the patient. For Epic data, if a dispense is associated with more than one administration, this is from the first administration. This column isn't populated for outpatient dispenses.
DocumentedAdministrationInstant : datetime
Date and time the dispense was documented as being administered by the administering user. For Epic data, if a dispense is associated with more than one administration, this is from the first administration. This column isn't populated for outpatient dispenses.
ScheduledDueInstant : datetime
Date and time when the administration was due. For Epic data, if a dispense is associated with more than one administration, this is from the first administration. This column isn't populated for outpatient dispenses.
WastedInstant : datetime
Date and time waste was documented for the dispense
ReleaseUtcInstant : datetime
Date and time the associated order was released in UTC. For outpatient dispenses in Epic, this is the date and time that the fill reached the pending fill status.
ReadyToFillUtcInstant : datetime
Date and time the dispense was ready to be filled in UTC. For Epic data, this column isn't populated for inpatient dispenses.
FillInitiatedUtcInstant : datetime
Date and time a fill was initiated in UTC. For Epic data, this column isn't populated for inpatient dispenses.
FilledUtcInstant : datetime
Data and time a fill was completed in UTC. For Epic data, this column isn't populated for inpatient dispenses.
VerifiedUtcInstant : datetime
Date and time the dispense was verified in UTC. For Epic data, this is the date the dispense was first verified.
ReadyToPackageUtcInstant : datetime
Date and time the dispense was read to be packaged. For Epic data, this column isn't populated for inpatient dispenses.
ReceivedByDispensingPharmacyUtcInstant : datetime
Date and time the fill was received from the remote filling pharmacy in UTC. For Epic data, this column isn't populated for inpatient dispenses.
ReadyToDispenseUtcInstant : datetime
Date and time the dispense was ready to be dispensed in UTC. For Epic data, this is the date and time when labels were printed for inpatient dispenses. For inpatient dispenses currently in the dispense queue, this is the date and time the dispense was added to the queue. For outpatient dispenses in Epic, this is the date and time the fill was ready to be given to the patient.
PreparationStartOfCompoundingUtcInstant : datetime
The instant in UTC at which the user started compounding the dispense preparation
FirstReviseRequestUtcInstant : datetime
Instant the revision was requested for the dispense in UTC. If the dispense required multiple revisions, this will only store the instant of the first request.
FirstMidPrepSubmissionUtcInstant : datetime
Instant the mid-prep review was sent for the dispense in UTC. If the dispense required multiple reviews, this will only store the instant of the first time it was sent for review.
DispensePreparedUtcInstant : datetime
Date and time the dispense was prepared in UTC. For outpatient dispenses in Epic, this is the date and time that the fill was dispensed.
PreparationBeyondUseDateUtcInstant : datetime
The beyond-use date instant in UTC of the dispense after it was prepared
FinalLabelCheckUtcInstant : datetime
Date and time the final label check was completed in UTC
FinalDispenseCheckUtcInstant : datetime
Date and time the dispense was checked and approved or rejected before it was sent to the patient in UTC. For Epic inpatient data, if the dispense was checked twice, this is the date and time of the second check. This column isn't populated for outpatient dispenses.
DispenseSentUtcInstant : datetime
Date and time the dispense was sent in UTC. For outpatient dispenses in Epic, this is the date and time that the fill was shipped.
DispenseReceivedUtcInstant : datetime
Date and time the dispense was received in UTC. For outpatient dispenses in Epic, this is the date and time that the fill was sent out for delivery.
AdministeredUtcInstant : datetime
Date and time the dispense was given to the patient in UTC. For Epic data, if a dispense is associated with more than one administration, this is from the first administration. This column isn't populated for outpatient dispenses.
DocumentedAdministrationUtcInstant : datetime
Date and time the dispense was documented as being administered by the administering user in UTC. For Epic data, if a dispense is associated with more than one administration, this is from the first administration. This column isn't populated for outpatient dispenses.
ScheduledDueUtcInstant : datetime
Date and time when the administration was due in UTC. For Epic data, if a dispense is associated with more than one administration, this is from the first administration. This column isn't populated for outpatient dispenses.
WastedUtcInstant : datetime
Date and time waste was documented for the dispense in UTC
MedicationAcquisitionCost : numeric(18,2)
Total medication acquisition cost for the dispense
MedicationRepresentativeCost : numeric(18,2)
Total medication representative cost for the dispense
PatientChargedAmount : numeric(18,2)
Total amount charged to the patient. For Epic data, this column isn't populated for inpatient dispenses.
PatientPaidAmount : numeric(18,2)
Total amount paid by the patient. For Epic data, this column isn't populated for inpatient dispenses.
FirstPayorChargedAmount : numeric(18,2)
Total amount charged to the first payer. For Epic data, this column isn't populated for inpatient dispenses.
FirstPayorPaidAmount : numeric(18,2)
Total amount paid by the first payer. For Epic data, this column isn't populated for inpatient dispenses.
SecondPayorChargedAmount : numeric(18,2)
Total amount charged to the second payer. For Epic data, this column isn't populated for inpatient dispenses.
SecondPayorPaidAmount : numeric(18,2)
Total amount paid by the second payer. For Epic data, this column isn't populated for inpatient dispenses.
ThirdPayorChargedAmount : numeric(18,2)
Total amount charged to the third payer. For Epic data, this column isn't populated for inpatient dispenses.
ThirdPayorPaidAmount : numeric(18,2)
Total amount paid by the third payer. For Epic data, this column isn't populated for inpatient dispenses.
PrimaryComponentQuantity : numeric(26,5)
Quantity of the primary component dispensed
SecondComponentQuantity : numeric(26,5)
Quantity of the second component dispensed. For Epic data, this column isn't populated for outpatient dispenses.
ThirdComponentQuantity : numeric(26,5)
Quantity of the third component dispensed. For Epic data, this column isn't populated for outpatient dispenses.
FourthComponentQuantity : numeric(26,5)
Quantity of the fourth component dispensed. For Epic data, this column isn't populated for outpatient dispenses.
FifthComponentQuantity : numeric(26,5)
Quantity of the fifth component dispensed. For Epic data, this column isn't populated for outpatient dispenses.
IntendedQuantity : numeric(26,5)
Intended quantity of this medication dispense. For Epic data, this column is not populated for inpatient dispenses.
PreparationOverrideTimeAmount : int
The manually overridden time amount for the beyond-use date of the preparation
PreparationOverrideTimeUnit : nvarchar(50)
The manually overridden time unit for the beyond-use date of the preparation
DaysSupply : smallint
Number of days supply dispensed of the medication. For Epic data, this column isn't populated for inpatient dispenses.
IntendedDaysSupply : smallint
Number of intended days supply for this medication dispense. For Epic data, this column is not populated for inpatient dispenses.
FillNumber : nvarchar(50)
The fill number for the current dispensed medication by the pharmacy. Designates the sequential order of the original fill or subsequent refills of a prescription. For Epic data, this column isn't populated for inpatient dispenses.
RxNumber : nvarchar(200)
The formatted prescription number for the dispense. For Epic data, this column isn't populated for inpatient dispenses.
NumberOfRevisions : smallint
The number of times the dispense was sent back for a revision in mid-prep review
NumberOfPreparationStepsSkipped : int
The number of preparation steps which were skipped for a completed dispense preparation
ForcedDispense : tinyint
1/0 column that indicates whether the dispense was forced. This column returns 1 if the dispense was forced and 0 if the dispense wasn't forced. For Epic data, this indicates if the dispense was an override pull for inpatient dispenses.
ForcedDispenseResolved : tinyint
1/0 column that indicates whether the forced dispense was resolved. This column returns 1 if a forced dispense was resolved and 0 if it was not resolved. For Epic data, this column indicates if an ADS override pull was linked to a clinical order. This column isn’t populated for dispenses that are outpatient or not forced.
ReturnedDispense : tinyint
1/0 column that indicates whether the dispense was returned. This column returns 1 if the dispense was returned and 0 if the dispense wasn't returned.
AdsDispense : tinyint
1/0 column that indicates whether the dispense is from an automated dispense system. This column returns 1 if the dispense is from an automated dispense system and 0 if the dispense isn't from an automated dispense system.
CartDispense : tinyint
1/0 column that indicates whether the dispense is from a cart. This column returns 1 if the dispense is from a cart and 0 if the dispense isn't from a cart. For Epic data, this column isn't populated for outpatient dispenses.
FirstDispense : tinyint
1/0 column that indicates whether the dispense is a first dose or fill. This column returns 1 if the dispense is a first dose or fill and 0 if the dispense isn't a first dose or fill.
Redispense : tinyint
1/0 column that indicates whether the dispense is a redispense. This column returns 1 if the dispense is a redispense and 0 if the dispense isn't a redispense. For Epic data, this column isn't populated for outpatient dispenses.
BulkDispense : tinyint
1/0 column that indicates whether the dispense is a bulk product dispense. This column returns 1 if the dispense is a bulk product dispense and 0 if the dispense isn't a bulk product dispense. For Epic data, this column isn't populated for outpatient dispenses.
PreparationCompleted : tinyint
1/0 column that indicates whether a dispense was documented as prepared. This column returns 1 if dispense preparation was documented and 0 if it was not documented. For Epic data, this column isn't populated for outpatient dispenses.
PictureAttached : tinyint
1/0 column that indicates whether the dispense was prepared with a picture attached. This column returns 1 if the dispense was prepared with a picture attached and 0 otherwise.
PreparationWeighed : tinyint
1/0 column that indicates that gravimetric was measured for a dispense preparation. This column returns 1 if at least one component of the dispense was weighed in dispense prep and 0 otherwise.
PreparationWeightNotVerified : tinyint
1/0 column that indicates whether a dispense preparation required gravimetric measurement but it was not used. This column returns 1 if a 'Weight not verified' warning was overridden in dispense prep and 0 otherwise.
WrongIngredientWarningDuringPreparation : tinyint
1/0 column that indicates whether the user was warned that they were preparing the dispense with the wrong ingredient. This column returns 1 if a warning of this type was shown and 0 if one was not shown. For Epic data, this column isn't populated for outpatient dispenses.
WrongIngredientWarningOverrideDuringPreparation : tinyint
1/0 column that indicates whether the user overrode a warning that they were preparing the dispense with the wrong ingredient. This column returns 1 if the warning was overridden and 0 if the user did not override the warning. For Epic data, this column isn't populated for outpatient dispenses or if no wrong ingredient warning was encountered.
ExpiredProductWarningDuringPreparation : tinyint
1/0 column that indicates whether the user was warned that the medications were past their expiration date during dispense preparation. This column returns 1 if a warning of this type was shown and 0 if one was not shown. For Epic data, this column isn't populated for outpatient dispenses.
MedicationScannedForDispense : tinyint
1/0 column that indicates whether the dispensed medication was scanned. This column returns 1 if the dispensed medication was scanned and 0 if the dispensed medication wasn't scanned. For Epic data, this column isn't populated for outpatient dispenses.
InactiveWarningDuringPreparation : tinyint
1/0 column that indicates whether the user was warned that the dispense no longer needs to be prepared during dispense preparation. This column returns 1 if a warning of this type was shown and 0 if one was not shown. For Epic data, this column isn't populated for outpatient dispenses.
BarcodeNotRecognizedWarningDuringPreparation : tinyint
1/0 column that indicates whether the user was warned that the barcode was not recognized during dispense preparation. This column returns 1 if a warning of this type was shown and 0 if one was not shown. For Epic data, this column isn't populated for outpatient dispenses.
InsufficientStockWarningDuringPreparation : tinyint
1/0 column that indicates whether the user was warned that the scanned package has insufficient stock during dispense preparation. This column returns 1 if a warning of this type was shown and 0 if one was not shown. For Epic data, this column isn't populated for outpatient dispenses.
NdcManuallyEntered : tinyint
1/0 column that indicates whether the National Drug Code (NDC) was manually entered. This column returns 1 if the NDC was manually entered and 0 if the NDC wasn't manually entered. For Epic data, this column isn't populated for outpatient dispenses.
PendingDispense : tinyint
1/0 column that indicates whether the dispense is pending. This column returns 1 if the dispense is pending and 0 if the dispense isn't pending.
PreparationStepsCompletedOutOfOrder : tinyint
1/0 column indicating whether a dispense preparation was completed with any of the workflow steps being done out of order. This column returns a 1 if any steps were done out of order and 0 if the dispense was prepared with all steps completed in the correct order or skipped.
PreparationIsTerminallySterilized : tinyint
1/0 column indicating that the preparation of the dispense was terminally sterilized
Rejected : tinyint
1/0 column that indicates whether the dispense was rejected while being checked, before it was sent to the patient. This column returns 1 if the dispense was rejected during dispense check and 0 if the dispense was not rejected. For Epic data, this column isn't populated for outpatient dispenses.
Canceled : tinyint
1/0 column that indicates whether a dispense was canceled. For Epic data, a dispense can be canceled if it is rejected in Dispense Check or if the order is edited before release and the dispense was prepared in advance. This column returns 1 if the dispense was canceled and 0 if the dispense was not canceled. This column isn't populated for outpatient dispenses.
PartialFill : tinyint
1/0 column that indicates whether the dispense is a partial fill. This column returns 1 if the dispense is a partial fill and 0 if the dispense is not a partial fill. For Epic data, this column is not populated for inpatient dispenses.
CompletionFill : tinyint
1/0 column that indicates whether the dispense is a completion fill. This column returns 1 if the dispense is a completion fill and 0 if the dispense is not a completion fill. For Epic data, this column is not populated for inpatient dispenses.
EmergencyFill : tinyint
1/0 column that indicates whether the dispense is an emergency fill. This column returns 1 if the dispense is an emergency fill and 0 if the dispense is not an emergency fill. For Epic data, this column is not populated for inpatient dispenses.
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## MedicationOrderComponentFact

**Extracted:** 2025-07-23 00:23:28
**Content Length:** 36506 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class G Fact
Try It
MedicationDispenseFact
The medication dispense fact contains information about medication dispenses. Each row represents a medication dispense. Change Type: Non-Snapshot
Columns
MedicationDispenseKey : bigint
Surrogate key used to uniquely identify the record
PatientKey : bigint
Links to PatientDim
Patient associated with the order getting dispensed
PatientDurableKey : bigint
Links to PatientDim
Patient associated with the order getting dispensed
MedicationOrderKey : bigint
Links to MedicationOrderFact
Parent order associated with the dispense. For Epic data, if the order is a bulk dispense or is not released this column is not applicable. If the dispense is an override pull that is linked to a clinical order this column contains the clinical order. This column is unspecified for override pulls that are not linked.
MedicationKey : bigint
Links to MedicationDim
Medication or mixture associated with the order
OrderMedicationComponentComboKey : bigint
Links to MedicationComponentBridge
All medication components associated with the order
PrimaryComponentKey : bigint
Links to MedicationDim
Primary component associated with the dispense
SecondComponentKey : bigint
Links to MedicationDim
Second component associated with the dispense
ThirdComponentKey : bigint
Links to MedicationDim
Third component associated with the dispense
FourthComponentKey : bigint
Links to MedicationDim
Fourth component associated with the dispense
FifthComponentKey : bigint
Links to MedicationDim
Fifth component associated with the dispense
DepartmentKey : bigint
Links to DepartmentDim
Department associated with the dispense
DispensePharmacyKey : bigint
Links to PharmacyDim
Pharmacy associated with the dispense
FillPharmacyKey : bigint
Links to PharmacyDim
Pharmacy associated with the fill. For Epic data, this column isn't populated for inpatient dispenses.
ReleaseDateKey : bigint
Links to DateDim
Date the associated order was released. For outpatient dispenses in Epic, this is the date that the fill reached the pending fill status.
ReleaseTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day the associated order was released. For outpatient dispenses in Epic, this is the time that the fill reached the pending fill status.
ReadyToFillDateKey : bigint
Links to DateDim
Date the dispense was ready to be filled. For Epic data, this column isn't populated for inpatient dispenses.
ReadyToFillTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day the dispense was ready to be filled. For Epic data, this column isn't populated for inpatient dispenses.
FillInitiatedDateKey : bigint
Links to DateDim
Date a fill was initiated. For Epic data, this column isn't populated for inpatient dispenses.
FillInitiatedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day a fill was initiated. For Epic data, this column isn't populated for inpatient dispenses.
FilledDateKey : bigint
Links to DateDim
Date a fill was completed. For Epic data, this column isn't populated for inpatient dispenses.
FilledTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day a fill was completed. For Epic data, this column isn't populated for inpatient dispenses.
VerifiedDateKey : bigint
Links to DateDim
Date the dispense was verified. For Epic data, this is the date the dispense was first verified.
VerifiedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day the dispense was verified. For Epic data, this is the time of day the dispense was first verified.
ReadyToPackageDateKey : bigint
Links to DateDim
Date the dispense was ready to be packaged. For Epic data, this column isn't populated for inpatient dispenses.
ReadyToPackageTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day the dispense was ready to be packaged. For Epic data, this column isn't populated for inpatient dispenses.
ReceivedByDispensingPharmacyDateKey : bigint
Links to DateDim
Date the fill was received from the remote filling pharmacy. For Epic data, this column isn't populated for inpatient dispenses.
ReceivedByDispensingPharmacyTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day the fill was received from the remote filling pharmacy. For Epic data, this column isn't populated for inpatient dispenses.
ReadyToDispenseDateKey : bigint
Links to DateDim
Date the dispense was ready to be dispensed. For Epic data, this is the date when labels were printed for inpatient dispenses. For inpatient dispenses currently in the dispense queue, this is the date that the dispense was added to the queue. For outpatient dispenses in Epic, this is the date the fill was ready to be given to the patient.
ReadyToDispenseTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day the dispense was ready to be dispensed. For Epic data, this is the time when labels were printed for inpatient dispenses. For inpatient dispenses currently in the dispense queue, this is the time that the dispense was added to the queue. For outpatient dispenses in Epic, this is the time the fill was ready to be given to the patient.
FirstReviseRequestDateKey : bigint
Links to DateDim
Date the revision was requested for the dispense. If the dispense required multiple revisions, this will only store the date of the first request.
FirstReviseRequestTimeOfDayKey : bigint
Links to TimeOfDayDim
Time the revision was requested for the dispense. If the dispense required multiple revisions, this will only store the time of the first request.
FirstMidPrepSubmissionDateKey : bigint
Links to DateDim
Date the mid-prep review was sent for the dispense. If the dispense required multiple reviews, this will only store the date of the first time it was sent for review.
FirstMidPrepSubmissionTimeOfDayKey : bigint
Links to TimeOfDayDim
Time the mid-prep review was sent for the dispense. If the dispense required multiple reviews, this will only store the time of the first time it was sent for review.
DispensePreparedDateKey : bigint
Links to DateDim
Date and time the dispense was prepared. For outpatient dispenses in Epic, this is the date that the fill was dispensed.
DispensePreparedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day the dispense was prepared. For outpatient dispenses in Epic, this is the time that the fill was dispensed.
FinalLabelCheckDateKey : bigint
Links to DateDim
Date the final label check was completed
FinalLabelCheckTimeOfDayKey : bigint
Links to TimeOfDayDim
Time the final label check was completed
DispenseSentDateKey : bigint
Links to DateDim
Date the dispense was sent. For outpatient dispenses in Epic, this is the date that the fill was shipped.
DispenseSentTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day the dispense was sent. For outpatient dispenses in Epic, this is the time that the fill was shipped.
DispenseReceivedDateKey : bigint
Links to DateDim
Date the dispense was received. For outpatient dispenses in Epic, this is the date that the fill was sent out for delivery.
DispenseReceivedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day the dispense was received. For outpatient dispenses in Epic, this is the time that the fill was sent out for delivery.
ServiceDateKey : bigint
Links to DateDim
The date of service of this medication dispense.
WastedDateKey : bigint
Links to DateDim
Date when waste was documented for the dispense
WastedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day when waste was documented for the dispense
FillingEmployeeDurableKey : bigint
Links to EmployeeDim
Employee who filled the associated order. For Epic data, this column isn't populated for inpatient dispenses.
VerifyingEmployeeKey : bigint
Links to EmployeeDim
Employee who verified the associated order. For Epic inpatient data, if the dispense was dual verified this is the second verifying employee and if the medication order was conditional this is the reviewing employee.
VerifyingEmployeeDurableKey : bigint
Links to EmployeeDim
Employee who verified the associated order. For Epic inpatient data, if the dispense was dual verified this is the second verifying employee and if the medication order was conditional this is the reviewing employee.
DispensingEmployeeKey : bigint
Links to EmployeeDim
Employee who dispensed the associated order
DispensingEmployeeDurableKey : bigint
Links to EmployeeDim
Employee who dispensed the associated order
FirstReviseRequestEmployeeKey : bigint
Links to EmployeeDim
Employee who requested a revision for the dispense in mid-prep review. If the dispense required multiple revisions, this will only store the employee who requested the first revision.
FirstReviseRequestEmployeeDurableKey : bigint
Links to EmployeeDim
Employee who requested a revision for the dispense in mid-prep review. If the dispense required multiple revisions, this will only store the employee who requested the first revision.
FirstMidPrepSubmissionEmployeeKey : bigint
Links to EmployeeDim
Employee who sent the dispense for mid-prep review. If the dispense required multiple reviews, this will only store the employee who sent it for review the first time.
FirstMidPrepSubmissionEmployeeDurableKey : bigint
Links to EmployeeDim
Employee who sent the dispense for mid-prep review. If the dispense required multiple reviews, this will only store the employee who sent it for review the first time.
FinalLabelCheckEmployeeDurableKey : bigint
Links to EmployeeDim
User who completed the final label check for the dispense
FinalDispenseCheckEmployeeKey : bigint
Links to EmployeeDim
Employee who checked the dispense before it was sent to the patient and approved or rejected the dispense. For Epic inpatient data, if the dispense was checked twice, this is the second check employee. This column isn't populated for outpatient dispenses.
FinalDispenseCheckEmployeeDurableKey : bigint
Links to EmployeeDim
Employee who checked the dispense before it was sent to the patient and approved or rejected the dispense. For Epic inpatient data, if the dispense was checked twice, this is the second check employee. This column isn't populated for outpatient dispenses.
DispenseSentEmployeeKey : bigint
Links to EmployeeDim
Employee who sent the dispense to its destination
DispenseSentEmployeeDurableKey : bigint
Links to EmployeeDim
Employee who sent the dispense to its destination
DispenseReceivedEmployeeKey : bigint
Links to EmployeeDim
Employee who received the dispense at its destination
DispenseReceivedEmployeeDurableKey : bigint
Links to EmployeeDim
Employee who received the dispense at its destination
DispenseReceivedDepartmentKey : bigint
Links to DepartmentDim
Department where the dispense was received
AdministrationEmployeeKey : bigint
Links to EmployeeDim
Employee who documented the administration associated with the dispense. For Epic data, if a dispense is associated with more than one administration, this is from the first administration. This column isn't populated for outpatient dispenses.
AdministrationEmployeeDurableKey : bigint
Links to EmployeeDim
Employee who documented the administration associated with the dispense. For Epic data, if a dispense is associated with more than one administration, this is from the first administration. This column isn't populated for outpatient dispenses.
WasteEmployeeDurableKey : bigint
Links to EmployeeDim
Employee who wasted medication after it was dispensed
WasteFirstSignoffEmployeeDurableKey : bigint
Links to EmployeeDim
Employee who signed off on the waste of the medication after it was dispensed. For Epic inpatient data, if the waste was signed off on by multiple employees, this is the first employee to sign off on the waste.
FirstCoverageKey : bigint
Links to CoverageDim
First coverage associated with the dispense. For Epic data, this column isn't populated for inpatient dispenses.
SecondCoverageKey : bigint
Links to CoverageDim
Second coverage associated with the dispense. For Epic data, this column isn't populated for inpatient dispenses.
ThirdCoverageKey : bigint
Links to CoverageDim
Third coverage associated with the dispense. For Epic data, this column isn't populated for inpatient dispenses.
EncounterKey : bigint
Links to EncounterFact
Encounter associated with the medication order
PreparationWorkstationKey : bigint
Links to WorkstationDim
The workstation where this dispense was prepared
OrderName : nvarchar(700)
The name of the order
PrimaryComponentQuantityUnit : nvarchar(300)
Unit for the quantity of the primary component dispensed
SecondComponentQuantityUnit : nvarchar(300)
Unit for the quantity of the second component dispensed. For Epic data, this column isn't populated for outpatient dispenses.
ThirdComponentQuantityUnit : nvarchar(300)
Unit for the quantity of the third component dispensed. For Epic data, this column isn't populated for outpatient dispenses.
FourthComponentQuantityUnit : nvarchar(300)
Unit for the quantity of the fourth component dispensed. For Epic data, this column isn't populated for outpatient dispenses.
FifthComponentQuantityUnit : nvarchar(300)
Unit for the quantity of the fifth component dispensed. For Epic data, this column isn't populated for outpatient dispenses.
IntendedQuantityUnit : nvarchar(300)
Intended quantity unit of this medication dispense. For Epic data, this column is not populated for inpatient dispenses.
PrimaryComponentNdc : nvarchar(300)
National Drug Code (NDC) for the primary component dispensed
SecondComponentNdc : nvarchar(300)
National Drug Code (NDC) for the second component dispensed
ThirdComponentNdc : nvarchar(300)
National Drug Code (NDC) for the third component dispensed
FourthComponentNdc : nvarchar(300)
National Drug Code (NDC) for the fourth component dispensed
FifthComponentNdc : nvarchar(300)
National Drug Code (NDC) for the fifth component dispensed
PrimaryComponentUnformattedNdc : nvarchar(300)
Raw 11-digit National Drug Code (NDC) for the primary component dispensed
SecondComponentUnformattedNdc : nvarchar(300)
Raw 11-digit National Drug Code (NDC) for the second component dispensed
ThirdComponentUnformattedNdc : nvarchar(300)
Raw 11-digit National Drug Code (NDC) for the third component dispensed
FourthComponentUnformattedNdc : nvarchar(300)
Raw 11-digit National Drug Code (NDC) for the fourth component dispensed
FifthComponentUnformattedNdc : nvarchar(300)
Raw 11-digit National Drug Code (NDC) for the fifth component dispensed
Mode : nvarchar(50)
Mode for the dispense. For Epic data, this column can contain Inpatient or Outpatient.
DispenseCode : nvarchar(300)
Code for the dispense. For Epic data, this column isn't populated for outpatient dispenses.
DeliveryMethod : nvarchar(300)
Delivery method for the dispense
DispenseType : nvarchar(50)
The type of dispense. For Epic data, this column is not applicable for outpatient orders. This column can contain Non-Clinical ADS Override, ADS Override, ADS Dispense, Cart, First Dose, Bulk Charge, or Redispense.
RedispenseReason : nvarchar(300)
The reason the dispense user documented why the medication was redispensed. For Epic data, if the dispense is not a redispense or is outpatient, this column is not applicable.
DispenseInterfaceComment : nvarchar(1000)
Comment received from the interface message that created this dispense. For Epic data, this is only populated on ADS dispenses. This column contains the name of the employee who created an ADS dispense.
FirstReviseReason : nvarchar(300)
The reason why a revision was requested for the dispense. If the dispense required multiple revisions, this will only store the reason for the first request.
Accumulator : nvarchar(300)
The accumulator applied for this medication dispense. For Epic data, this column isn't populated for inpatient dispenses.
Calculated340BEligibility : tinyint
1/0 column that indicates the calculated 340B eligibility of this fill. This column returns 1 if the fill is calculated to be eligible for 340B, 0 if not.
Overridden340BEligibility : tinyint
1/0 column that indicates the fill's 340B eligibility when overridden by a user. This column returns 1 if the overridden 340B eligibility value is Yes, and 0 if the overridden 340B eligibility value is No. If not set, the calculated value (Calculated340BEligibility - I ORD 49480) is applicable.
FillStatus : nvarchar(300)
The fill status of the medication dispense. For Epic data, this column isn't populated for inpatient dispenses.
RequestSource : nvarchar(300)
The source where this medication dispense is requested from. For Epic data, this column is not populated for inpatient dispenses.
DAWReason : nvarchar(300)
Reason why this is dispensed as written. For Epic data, this column is not populated for inpatient dispenses.
FinalLabelCheckStatus : nvarchar(300)
The current status of the final label check for the medication dispense
WasteSource : nvarchar(100)
The source where waste was documented for the dispense
PreparationCompoundingAreaType : nvarchar(300)
The compounding area type of the workstation where the dispense was prepared
PreparationCompoundingMethod : nvarchar(300)
The compounding method for the dispense preparation
PreparationBeyondUseDateComment : nvarchar(500)
The most recent comment entered when the beyond-use date was manually overridden
MedicationOrderEpicId : numeric(18,0)
Epic ID of the medication order. This column identifies order (ORD) records.
ReleaseInstant : datetime
Date and time the associated order was released. For outpatient dispenses in Epic, this is the date and time that the fill reached the pending fill status.
ReadyToFillInstant : datetime
Date and time the dispense was ready to be filled. For Epic data, this column isn't populated for inpatient dispenses.
FillInitiatedInstant : datetime
Date and time a fill was initiated. For Epic data, this column isn't populated for inpatient dispenses.
FilledInstant : datetime
Date and time a fill was completed. For Epic data, this column isn't populated for inpatient dispenses.
VerifiedInstant : datetime
Date and time the dispense was verified. For Epic data, this is the date the dispense was first verified.
ReadyToPackageInstant : datetime
Date and time the dispense was ready to be packaged. For Epic data, this column isn't populated for inpatient dispenses.
ReceivedByDispensingPharmacyInstant : datetime
Date and time the fill was received from the remote filling pharmacy. For Epic data, this column isn't populated for inpatient dispenses.
ReadyToDispenseInstant : datetime
Date and time the dispense was ready to be dispensed. For Epic data, this is the date and time when labels were printed for inpatient dispenses. For inpatient dispenses currently in the dispense queue, this is the date and time that the dispense was added to the queue. For outpatient dispenses in Epic, this is the date and time the fill was ready to be given to the patient.
PreparationStartOfCompoundingInstant : datetime
The instant at which the user started compounding the dispense preparation
FirstReviseRequestInstant : datetime
Instant the revision was requested for the dispense. If the dispense required multiple revisions, this will only store the instant of the first request.
FirstMidPrepSubmissionInstant : datetime
Instant the mid-prep review was sent for the dispense. If the dispense required multiple reviews, this will only store the instant of the first time it was sent for review.
DispensePreparedInstant : datetime
Date and time the dispense was prepared. For outpatient dispenses in Epic, this is the date and time that the fill was dispensed.
PreparationBeyondUseDateInstant : datetime
The beyond-use date instant of the dispense after it was prepared
FinalLabelCheckInstant : datetime
Date and time the final label check was completed
FinalDispenseCheckInstant : datetime
Date and time the dispense was checked and approved or rejected before it was sent to the patient. For Epic inpatient data, if the dispense was checked twice, this is the date and time of the second check. This column isn't populated for outpatient dispenses.
DispenseSentInstant : datetime
Date and time the dispense was sent. For outpatient dispenses in Epic, this is the date and time that the fill was shipped.
DispenseReceivedInstant : datetime
Date and time the dispense was received. For outpatient dispenses in Epic, this is the date and time that the fill was sent out for delivery.
AdministeredInstant : datetime
Date and time the dispense was given to the patient. For Epic data, if a dispense is associated with more than one administration, this is from the first administration. This column isn't populated for outpatient dispenses.
DocumentedAdministrationInstant : datetime
Date and time the dispense was documented as being administered by the administering user. For Epic data, if a dispense is associated with more than one administration, this is from the first administration. This column isn't populated for outpatient dispenses.
ScheduledDueInstant : datetime
Date and time when the administration was due. For Epic data, if a dispense is associated with more than one administration, this is from the first administration. This column isn't populated for outpatient dispenses.
WastedInstant : datetime
Date and time waste was documented for the dispense
ReleaseUtcInstant : datetime
Date and time the associated order was released in UTC. For outpatient dispenses in Epic, this is the date and time that the fill reached the pending fill status.
ReadyToFillUtcInstant : datetime
Date and time the dispense was ready to be filled in UTC. For Epic data, this column isn't populated for inpatient dispenses.
FillInitiatedUtcInstant : datetime
Date and time a fill was initiated in UTC. For Epic data, this column isn't populated for inpatient dispenses.
FilledUtcInstant : datetime
Data and time a fill was completed in UTC. For Epic data, this column isn't populated for inpatient dispenses.
VerifiedUtcInstant : datetime
Date and time the dispense was verified in UTC. For Epic data, this is the date the dispense was first verified.
ReadyToPackageUtcInstant : datetime
Date and time the dispense was read to be packaged. For Epic data, this column isn't populated for inpatient dispenses.
ReceivedByDispensingPharmacyUtcInstant : datetime
Date and time the fill was received from the remote filling pharmacy in UTC. For Epic data, this column isn't populated for inpatient dispenses.
ReadyToDispenseUtcInstant : datetime
Date and time the dispense was ready to be dispensed in UTC. For Epic data, this is the date and time when labels were printed for inpatient dispenses. For inpatient dispenses currently in the dispense queue, this is the date and time the dispense was added to the queue. For outpatient dispenses in Epic, this is the date and time the fill was ready to be given to the patient.
PreparationStartOfCompoundingUtcInstant : datetime
The instant in UTC at which the user started compounding the dispense preparation
FirstReviseRequestUtcInstant : datetime
Instant the revision was requested for the dispense in UTC. If the dispense required multiple revisions, this will only store the instant of the first request.
FirstMidPrepSubmissionUtcInstant : datetime
Instant the mid-prep review was sent for the dispense in UTC. If the dispense required multiple reviews, this will only store the instant of the first time it was sent for review.
DispensePreparedUtcInstant : datetime
Date and time the dispense was prepared in UTC. For outpatient dispenses in Epic, this is the date and time that the fill was dispensed.
PreparationBeyondUseDateUtcInstant : datetime
The beyond-use date instant in UTC of the dispense after it was prepared
FinalLabelCheckUtcInstant : datetime
Date and time the final label check was completed in UTC
FinalDispenseCheckUtcInstant : datetime
Date and time the dispense was checked and approved or rejected before it was sent to the patient in UTC. For Epic inpatient data, if the dispense was checked twice, this is the date and time of the second check. This column isn't populated for outpatient dispenses.
DispenseSentUtcInstant : datetime
Date and time the dispense was sent in UTC. For outpatient dispenses in Epic, this is the date and time that the fill was shipped.
DispenseReceivedUtcInstant : datetime
Date and time the dispense was received in UTC. For outpatient dispenses in Epic, this is the date and time that the fill was sent out for delivery.
AdministeredUtcInstant : datetime
Date and time the dispense was given to the patient in UTC. For Epic data, if a dispense is associated with more than one administration, this is from the first administration. This column isn't populated for outpatient dispenses.
DocumentedAdministrationUtcInstant : datetime
Date and time the dispense was documented as being administered by the administering user in UTC. For Epic data, if a dispense is associated with more than one administration, this is from the first administration. This column isn't populated for outpatient dispenses.
ScheduledDueUtcInstant : datetime
Date and time when the administration was due in UTC. For Epic data, if a dispense is associated with more than one administration, this is from the first administration. This column isn't populated for outpatient dispenses.
WastedUtcInstant : datetime
Date and time waste was documented for the dispense in UTC
MedicationAcquisitionCost : numeric(18,2)
Total medication acquisition cost for the dispense
MedicationRepresentativeCost : numeric(18,2)
Total medication representative cost for the dispense
PatientChargedAmount : numeric(18,2)
Total amount charged to the patient. For Epic data, this column isn't populated for inpatient dispenses.
PatientPaidAmount : numeric(18,2)
Total amount paid by the patient. For Epic data, this column isn't populated for inpatient dispenses.
FirstPayorChargedAmount : numeric(18,2)
Total amount charged to the first payer. For Epic data, this column isn't populated for inpatient dispenses.
FirstPayorPaidAmount : numeric(18,2)
Total amount paid by the first payer. For Epic data, this column isn't populated for inpatient dispenses.
SecondPayorChargedAmount : numeric(18,2)
Total amount charged to the second payer. For Epic data, this column isn't populated for inpatient dispenses.
SecondPayorPaidAmount : numeric(18,2)
Total amount paid by the second payer. For Epic data, this column isn't populated for inpatient dispenses.
ThirdPayorChargedAmount : numeric(18,2)
Total amount charged to the third payer. For Epic data, this column isn't populated for inpatient dispenses.
ThirdPayorPaidAmount : numeric(18,2)
Total amount paid by the third payer. For Epic data, this column isn't populated for inpatient dispenses.
PrimaryComponentQuantity : numeric(26,5)
Quantity of the primary component dispensed
SecondComponentQuantity : numeric(26,5)
Quantity of the second component dispensed. For Epic data, this column isn't populated for outpatient dispenses.
ThirdComponentQuantity : numeric(26,5)
Quantity of the third component dispensed. For Epic data, this column isn't populated for outpatient dispenses.
FourthComponentQuantity : numeric(26,5)
Quantity of the fourth component dispensed. For Epic data, this column isn't populated for outpatient dispenses.
FifthComponentQuantity : numeric(26,5)
Quantity of the fifth component dispensed. For Epic data, this column isn't populated for outpatient dispenses.
IntendedQuantity : numeric(26,5)
Intended quantity of this medication dispense. For Epic data, this column is not populated for inpatient dispenses.
PreparationOverrideTimeAmount : int
The manually overridden time amount for the beyond-use date of the preparation
PreparationOverrideTimeUnit : nvarchar(50)
The manually overridden time unit for the beyond-use date of the preparation
DaysSupply : smallint
Number of days supply dispensed of the medication. For Epic data, this column isn't populated for inpatient dispenses.
IntendedDaysSupply : smallint
Number of intended days supply for this medication dispense. For Epic data, this column is not populated for inpatient dispenses.
FillNumber : nvarchar(50)
The fill number for the current dispensed medication by the pharmacy. Designates the sequential order of the original fill or subsequent refills of a prescription. For Epic data, this column isn't populated for inpatient dispenses.
RxNumber : nvarchar(200)
The formatted prescription number for the dispense. For Epic data, this column isn't populated for inpatient dispenses.
NumberOfRevisions : smallint
The number of times the dispense was sent back for a revision in mid-prep review
NumberOfPreparationStepsSkipped : int
The number of preparation steps which were skipped for a completed dispense preparation
ForcedDispense : tinyint
1/0 column that indicates whether the dispense was forced. This column returns 1 if the dispense was forced and 0 if the dispense wasn't forced. For Epic data, this indicates if the dispense was an override pull for inpatient dispenses.
ForcedDispenseResolved : tinyint
1/0 column that indicates whether the forced dispense was resolved. This column returns 1 if a forced dispense was resolved and 0 if it was not resolved. For Epic data, this column indicates if an ADS override pull was linked to a clinical order. This column isn’t populated for dispenses that are outpatient or not forced.
ReturnedDispense : tinyint
1/0 column that indicates whether the dispense was returned. This column returns 1 if the dispense was returned and 0 if the dispense wasn't returned.
AdsDispense : tinyint
1/0 column that indicates whether the dispense is from an automated dispense system. This column returns 1 if the dispense is from an automated dispense system and 0 if the dispense isn't from an automated dispense system.
CartDispense : tinyint
1/0 column that indicates whether the dispense is from a cart. This column returns 1 if the dispense is from a cart and 0 if the dispense isn't from a cart. For Epic data, this column isn't populated for outpatient dispenses.
FirstDispense : tinyint
1/0 column that indicates whether the dispense is a first dose or fill. This column returns 1 if the dispense is a first dose or fill and 0 if the dispense isn't a first dose or fill.
Redispense : tinyint
1/0 column that indicates whether the dispense is a redispense. This column returns 1 if the dispense is a redispense and 0 if the dispense isn't a redispense. For Epic data, this column isn't populated for outpatient dispenses.
BulkDispense : tinyint
1/0 column that indicates whether the dispense is a bulk product dispense. This column returns 1 if the dispense is a bulk product dispense and 0 if the dispense isn't a bulk product dispense. For Epic data, this column isn't populated for outpatient dispenses.
PreparationCompleted : tinyint
1/0 column that indicates whether a dispense was documented as prepared. This column returns 1 if dispense preparation was documented and 0 if it was not documented. For Epic data, this column isn't populated for outpatient dispenses.
PictureAttached : tinyint
1/0 column that indicates whether the dispense was prepared with a picture attached. This column returns 1 if the dispense was prepared with a picture attached and 0 otherwise.
PreparationWeighed : tinyint
1/0 column that indicates that gravimetric was measured for a dispense preparation. This column returns 1 if at least one component of the dispense was weighed in dispense prep and 0 otherwise.
PreparationWeightNotVerified : tinyint
1/0 column that indicates whether a dispense preparation required gravimetric measurement but it was not used. This column returns 1 if a 'Weight not verified' warning was overridden in dispense prep and 0 otherwise.
WrongIngredientWarningDuringPreparation : tinyint
1/0 column that indicates whether the user was warned that they were preparing the dispense with the wrong ingredient. This column returns 1 if a warning of this type was shown and 0 if one was not shown. For Epic data, this column isn't populated for outpatient dispenses.
WrongIngredientWarningOverrideDuringPreparation : tinyint
1/0 column that indicates whether the user overrode a warning that they were preparing the dispense with the wrong ingredient. This column returns 1 if the warning was overridden and 0 if the user did not override the warning. For Epic data, this column isn't populated for outpatient dispenses or if no wrong ingredient warning was encountered.
ExpiredProductWarningDuringPreparation : tinyint
1/0 column that indicates whether the user was warned that the medications were past their expiration date during dispense preparation. This column returns 1 if a warning of this type was shown and 0 if one was not shown. For Epic data, this column isn't populated for outpatient dispenses.
MedicationScannedForDispense : tinyint
1/0 column that indicates whether the dispensed medication was scanned. This column returns 1 if the dispensed medication was scanned and 0 if the dispensed medication wasn't scanned. For Epic data, this column isn't populated for outpatient dispenses.
InactiveWarningDuringPreparation : tinyint
1/0 column that indicates whether the user was warned that the dispense no longer needs to be prepared during dispense preparation. This column returns 1 if a warning of this type was shown and 0 if one was not shown. For Epic data, this column isn't populated for outpatient dispenses.
BarcodeNotRecognizedWarningDuringPreparation : tinyint
1/0 column that indicates whether the user was warned that the barcode was not recognized during dispense preparation. This column returns 1 if a warning of this type was shown and 0 if one was not shown. For Epic data, this column isn't populated for outpatient dispenses.
InsufficientStockWarningDuringPreparation : tinyint
1/0 column that indicates whether the user was warned that the scanned package has insufficient stock during dispense preparation. This column returns 1 if a warning of this type was shown and 0 if one was not shown. For Epic data, this column isn't populated for outpatient dispenses.
NdcManuallyEntered : tinyint
1/0 column that indicates whether the National Drug Code (NDC) was manually entered. This column returns 1 if the NDC was manually entered and 0 if the NDC wasn't manually entered. For Epic data, this column isn't populated for outpatient dispenses.
PendingDispense : tinyint
1/0 column that indicates whether the dispense is pending. This column returns 1 if the dispense is pending and 0 if the dispense isn't pending.
PreparationStepsCompletedOutOfOrder : tinyint
1/0 column indicating whether a dispense preparation was completed with any of the workflow steps being done out of order. This column returns a 1 if any steps were done out of order and 0 if the dispense was prepared with all steps completed in the correct order or skipped.
PreparationIsTerminallySterilized : tinyint
1/0 column indicating that the preparation of the dispense was terminally sterilized
Rejected : tinyint
1/0 column that indicates whether the dispense was rejected while being checked, before it was sent to the patient. This column returns 1 if the dispense was rejected during dispense check and 0 if the dispense was not rejected. For Epic data, this column isn't populated for outpatient dispenses.
Canceled : tinyint
1/0 column that indicates whether a dispense was canceled. For Epic data, a dispense can be canceled if it is rejected in Dispense Check or if the order is edited before release and the dispense was prepared in advance. This column returns 1 if the dispense was canceled and 0 if the dispense was not canceled. This column isn't populated for outpatient dispenses.
PartialFill : tinyint
1/0 column that indicates whether the dispense is a partial fill. This column returns 1 if the dispense is a partial fill and 0 if the dispense is not a partial fill. For Epic data, this column is not populated for inpatient dispenses.
CompletionFill : tinyint
1/0 column that indicates whether the dispense is a completion fill. This column returns 1 if the dispense is a completion fill and 0 if the dispense is not a completion fill. For Epic data, this column is not populated for inpatient dispenses.
EmergencyFill : tinyint
1/0 column that indicates whether the dispense is an emergency fill. This column returns 1 if the dispense is an emergency fill and 0 if the dispense is not an emergency fill. For Epic data, this column is not populated for inpatient dispenses.
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## MedicationOrderFact

**Extracted:** 2025-07-23 00:23:44
**Content Length:** 3385 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class D Fact
Try It
MedicationEventFact
The medication event fact contains information about medications attributed to patients. Each row represents an event attributing a medication to a patient. Change Type: Non-Snapshot
Columns
MedicationEventKey : bigint
Surrogate key used to uniquely identify the record
MedicationKey : bigint
Links to MedicationDim
Medication for the event
PatientKey : bigint
Links to PatientDim
Patient for the event
PatientDurableKey : bigint
Links to PatientDim
Patient for the event
EncounterKey : bigint
Links to EncounterFact
Encounter associated with the event
DepartmentKey : bigint
Links to DepartmentDim
Department in which the event occurred
PharmacyKey : bigint
Links to PharmacyDim
Pharmacy associated with the medication for the event
EndDateKey : bigint
Links to DateDim
End date of the event
AdministrationDateKey : bigint
Links to DateDim
Date the administration occurred
StartDateKey : bigint
Links to DateDim
Start date of the event
PrescribingProviderKey : bigint
Links to ProviderDim
Provider who prescribed the medication to the patient
PrescribingProviderDurableKey : bigint
Links to ProviderDim
Provider who prescribed the medication to the patient
ServiceProviderKey : bigint
Links to ProviderDim
Provider who performed the medication-rendering pharmacy service
ServiceProviderDurableKey : bigint
Links to ProviderDim
Provider who performed the medication-rendering pharmacy service
DiagnosisComboKey : bigint
Links to DiagnosisBridge
All diagnoses associated with this medication event
SourceKey : bigint
Links to SourceDim
Source of the medication event
SourceComboKey : bigint
Links to MedicationEventSourceBridge
Sources of the procedure event. Use this instead of SourceKey if there are multiple sources.
MedicationOrderKey : bigint
Links to MedicationOrderFact
Medication order for the event
Mode : nvarchar(300)
Mode for this event, typically Inpatient or Outpatient
Type : nvarchar(300)
Type of event
Frequency : nvarchar(100)
Frequency associated with the medication
Route : nvarchar(300)
Route associated with the medication
QuantityUnit : nvarchar(300)
Unit for the quantity of the medication
DoseUnit : nvarchar(300)
Dose amount unit
Ndc : nvarchar(50)
National Drug Code (NDC) for the medication
StartInstant : datetime
Start date and time of the event
EndInstant : datetime
End date and time of the event
AdministrationInstant : datetime
Date and time the administration occurred
Quantity : numeric(18,4)
Quantity of the medication
MinimumDose : numeric(19,4)
Minimum ordered dose. For Epic data, if the dose is not ordered as a range, this column can contain the exact dose associated with the order.
MaximumDose : numeric(19,4)
Maximum ordered dose. For Epic data, if the dose is not ordered as a range, this column is empty.
RefillsWritten : numeric(18,0)
Number of refills ordered. For Epic data, this column is not populated for inpatient orders.
DaysSupply : int
Number of days' supply dispensed of the medication
FillNumber : int
Fill number for the medication
RxNumber : nvarchar(200)
Prescription number for the event
AdministrationAction : nvarchar(300)
Action associated with the administration
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## MedicationTerminologyConceptDim

**Extracted:** 2025-07-23 00:24:00
**Content Length:** 2546 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Dim
Try It
MedicationTerminologyConceptDim
The medication terminology concept dimension contains information about concepts used for mapping and grouping. Concepts are external identifiers used to map to a record, a value, or another concept. Each row represents a standard value for a defined medication standard. Change Type: Non-Snapshot
Columns
MedicationTerminologyConceptKey : bigint
Surrogate key used to uniquely identify the record
TerminologyConceptKey : bigint
Links to TerminologyConceptDim
Concept associated with the medication
StandardId : nvarchar(50)
ID of the standard
CodeType : nvarchar(300)
Code type of the medication terminology concept
Code : nvarchar(50)
Code of the medication terminology concept
Name : nvarchar(300)
Name of the medication terminology concept
SimpleGenericName : nvarchar(300)
Simple generic, non-proprietary name of the medication terminology concept
DeaClass : nvarchar(300)
Drug Enforcement Administration (DEA) Controlled Substance Code for the medication terminology concept
TherapeuticClass : nvarchar(300)
Therapeutic class that indicates the accepted purpose of the medication terminology concept
PharmaceuticalClass : nvarchar(300)
Pharmaceutical class that indicates the chemical family the medication terminology concept belongs to
PharmaceuticalSubclass : nvarchar(300)
Pharmaceutical subclass that indicates the chemical family the medication terminology concept belongs to
Gpi : nvarchar(200)
Generic Product Identifier (GPI) associated with the medication terminology concept
Strength : nvarchar(300)
Strength of the medication terminology concept
Form : nvarchar(300)
Form of the medication terminology concept
Route : nvarchar(300)
Administration route of the medication terminology concept
IsControlled : tinyint
1/0 column that indicates whether the medication terminology concept is a controlled substance. This column returns 1 if the medication is a controlled substance and 0 otherwise.
IsOpioid : tinyint
1/0 column that indicates whether the medication terminology concept is an opioid. This column returns 1 if the medication is an opioid and 0 if the medication terminology concept isn't an opioid.
IsOpioidAntagonist : tinyint
1/0 column that indicates whether the medication terminology concept is an opioid antagonist. This column returns 1 if the medication terminology concept is an opioid antagonist and 0 if the medication terminology concept isn't an opioid antagonist.
```

---

## MedicationTherapyProblemFact

**Extracted:** 2025-07-23 00:24:17
**Content Length:** 3606 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Fact
Try It
MedicationTherapyProblemFact
The medication therapy problem fact contains information about medication recommendations. Each row represents a single medication therapy problem. Change Type: Non-Snapshot
Columns
MedicationTherapyProblemKey : bigint
Surrogate key used to uniquely identify the record
CompletionEmployeeDurableKey : bigint
Links to EmployeeDim
The user that completed or deleted the medication therapy problem
CreationEmployeeDurableKey : bigint
Links to EmployeeDim
The user that created/documented the medication therapy problem
DiagnosisComboKey : bigint
Links to MtpDiagnosisBridge
All diagnoses associated with the medication therapy problem
EncounterKey : bigint
Links to EncounterFact
Encounter associated with the medication therapy problem
EpisodeKey : bigint
Links to EpisodeFact
Episode associated with the medication therapy problem
MtpTemplateHistoryKey : bigint
Links to MtpTemplateHistoryDim
The medication therapy problem template (MTT) version used to create this medication therapy problem
PatientDurableKey : bigint
Links to PatientDim
Patient associated with the medication therapy problem
ResponsibleEmployeeDurableKey : bigint
Links to EmployeeDim
The user that last updated the medication therapy problem and is responsible for its resolution
StartDateKey : bigint
Links to DateDim
Date the medication therapy problem was created
CompletedDate : date
Date the medication therapy problem was completed or deleted
Context : nvarchar(300)
The context or workflow where the medication therapy problem is used (for example: Medication Management Services, Regulated MTM, or Specialty Pharmacy)
CreationType : nvarchar(300)
The method by which the medication therapy problem was created (for example: manual or automated process)
DueDate : date
The date when the next action is due for the medication therapy problem
EpicEncounterCsn : bigint
Epic contact serial number (CSN) of the encounter in which the medication therapy problem was created
LastUpdatedInstantUtc : datetime
The instant the source data of the medication therapy problem was last updated. This is different than the _LastUpdatedInstant of the row in Caboodle.
LegacyMedicationTherapyProblemEpicId : nvarchar(50)
The Task (LTK) ID of the medication therapy problem. This is only populated on medication therapy problems created before the transition to the MTP INI.
MedicationRelatedNeeds : nvarchar(300)
The medication related needs for the medication therapy problem (for example: Indication, Effectiveness, Safety, or Adherence)
MedicationTherapyProblemEpicId : nvarchar(50)
Medication Therapy Problem (MTP) ID
PriorityLevel : nvarchar(300)
The relative priority of the medication therapy problem
ProblemCategory : nvarchar(300)
The problem category of the medication therapy problem (for example: Unnecessary medication therapy, Ineffective medication, Dosage too low, etc.)
Rationale : nvarchar(300)
Rationale of the medication therapy problem (for example: Duplicate therapy, Dosage form inappropriate, Dose too low, etc.)
Status : nvarchar(300)
Status value associated with the medication therapy problem (for example: Unverified, In Progress, Completed, or Deleted)
WasEvaluatedAsTargetedMedicationReview : tinyint
1/0 column that indicates whether this MTP was created during evaluation of a targeted medication review (TMR). This column returns 1 if this MTP was created as part of performing an automated TMR and 0 if this MTP was created manually or automatically but not during a TMR.
```

---

## MedicationWarningFact

**Extracted:** 2025-07-23 00:24:33
**Content Length:** 4305 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class D Fact
Try It
MedicationWarningFact
The medication warning fact contains information about medication warnings. Each row represents a medication warning alert. Change Type: Non-Snapshot
Columns
MedicationWarningKey : bigint
Surrogate key used to uniquely identify the record
AlertEpicId : numeric(18,0)
Epic ID of the alert. This column identifies alert (ALT) records.
AlertEpicCsn : numeric(18,0)
Epic contact serial number (CSN) of the alert. This column identifies alert (ALT) contacts.
PatientDurableKey : bigint
Links to PatientDim
The patient who is receiving the medication that the medication warning alert was triggered on
ProviderDurableKey : bigint
Links to ProviderDim
The provider who is receiving the medication warning alert
EncounterKey : bigint
Links to EncounterFact
The encounter associated with the medication warning alert
MedicationWarningOrderComboKey : bigint
Links to MedicationWarningOrderBridge
Connects medication warnings alerts to orders
TriggerDateKey : bigint
Links to DateDim
The date the medication warning alert was triggered
TriggerTimeKey : bigint
Links to TimeOfDayDim
The time the medication warning alert was triggered
AlertDescription : nvarchar(300)
The description of the medication warning alert
AlertType : nvarchar(300)
The type of medication warning alert
AlertTypeCategory : numeric(18,0)
The category of the type of medication warning alert
AlertStatus : nvarchar(300)
The status of the medication warning alert
AlertStatusCategory : numeric(18,0)
The category of the status of the medication warning alert
AlertSource : nvarchar(300)
The source of the medication warning alert
AlertSourceCategory : numeric(18,0)
The category of the source of the medication warning alert
AlertActionTaken : nvarchar(300)
The actions taken by the provider on the medication warning alert
AlertActionTakenCategory : numeric(18,0)
The category of the actions taken by the provider on the medication warning alert
AlertOverrideReason : nvarchar(300)
The reason why the medication warning alert was overridden by the provider
AlertOverrideReasonCategory : numeric(18,0)
The category of the reason why the medication warning alert was overridden by the provider
AlertOverrideComment : nvarchar(1000)
The comment left by the provider to explain the override on the medication warning alert
AlertImportanceLevel : nvarchar(300)
The importance level of the medication warning alert
AlertImportanceLevelCategory : numeric(18,0)
The category of the importance level of the medication warning alert
AllergyLevel : nvarchar(300)
The severity level of the drug-allergy medication warning alert
AllergyLevelCategory : numeric(18,0)
The category of the severity level of the drug-allergy medication warning alert
AllergyGroup : nvarchar(300)
The allergy contraindication group of the drug-allergy medication warning alert when it was fired
AllergyGroupCategory : numeric(18,0)
The category of the allergy contraindication group of the drug-allergy medication warning alert when it was fired
AlertInteractionSettingName : nvarchar(300)
The name of the profile or system interaction setting of the medication warning alert
AlertInteractionSettingEpicId : numeric(18,0)
Epic ID of the profile or system interaction setting of the medication warning alert
AlertHardStop : tinyint
1/0 column that indicates if the medication warning alert was a hard stop
AlertFiltered : tinyint
1/0 column that indicates if the medication warning alert was filtered out
AlertUserFiltered : tinyint
1/0 column that indicates if the medication warning alert was marked to be filtered by the user
AlertShown : tinyint
1/0 column that indicates if the medication warning alert was shown to the provider
DuplicateAlert : tinyint
1/0 column that indicates if a similar medication warning alert was shown to the provider within ten minutes before this medication warning alert occurred
AlertCriticalDose : tinyint
1/0 column indicating if the medication warning alert was displayed in a critical dose popup
TriggerInstant : datetime
The date and time the medication warning alert was triggered
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## MedicationWarningSetDim

**Extracted:** 2025-07-23 00:24:50
**Content Length:** 4305 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class D Fact
Try It
MedicationWarningFact
The medication warning fact contains information about medication warnings. Each row represents a medication warning alert. Change Type: Non-Snapshot
Columns
MedicationWarningKey : bigint
Surrogate key used to uniquely identify the record
AlertEpicId : numeric(18,0)
Epic ID of the alert. This column identifies alert (ALT) records.
AlertEpicCsn : numeric(18,0)
Epic contact serial number (CSN) of the alert. This column identifies alert (ALT) contacts.
PatientDurableKey : bigint
Links to PatientDim
The patient who is receiving the medication that the medication warning alert was triggered on
ProviderDurableKey : bigint
Links to ProviderDim
The provider who is receiving the medication warning alert
EncounterKey : bigint
Links to EncounterFact
The encounter associated with the medication warning alert
MedicationWarningOrderComboKey : bigint
Links to MedicationWarningOrderBridge
Connects medication warnings alerts to orders
TriggerDateKey : bigint
Links to DateDim
The date the medication warning alert was triggered
TriggerTimeKey : bigint
Links to TimeOfDayDim
The time the medication warning alert was triggered
AlertDescription : nvarchar(300)
The description of the medication warning alert
AlertType : nvarchar(300)
The type of medication warning alert
AlertTypeCategory : numeric(18,0)
The category of the type of medication warning alert
AlertStatus : nvarchar(300)
The status of the medication warning alert
AlertStatusCategory : numeric(18,0)
The category of the status of the medication warning alert
AlertSource : nvarchar(300)
The source of the medication warning alert
AlertSourceCategory : numeric(18,0)
The category of the source of the medication warning alert
AlertActionTaken : nvarchar(300)
The actions taken by the provider on the medication warning alert
AlertActionTakenCategory : numeric(18,0)
The category of the actions taken by the provider on the medication warning alert
AlertOverrideReason : nvarchar(300)
The reason why the medication warning alert was overridden by the provider
AlertOverrideReasonCategory : numeric(18,0)
The category of the reason why the medication warning alert was overridden by the provider
AlertOverrideComment : nvarchar(1000)
The comment left by the provider to explain the override on the medication warning alert
AlertImportanceLevel : nvarchar(300)
The importance level of the medication warning alert
AlertImportanceLevelCategory : numeric(18,0)
The category of the importance level of the medication warning alert
AllergyLevel : nvarchar(300)
The severity level of the drug-allergy medication warning alert
AllergyLevelCategory : numeric(18,0)
The category of the severity level of the drug-allergy medication warning alert
AllergyGroup : nvarchar(300)
The allergy contraindication group of the drug-allergy medication warning alert when it was fired
AllergyGroupCategory : numeric(18,0)
The category of the allergy contraindication group of the drug-allergy medication warning alert when it was fired
AlertInteractionSettingName : nvarchar(300)
The name of the profile or system interaction setting of the medication warning alert
AlertInteractionSettingEpicId : numeric(18,0)
Epic ID of the profile or system interaction setting of the medication warning alert
AlertHardStop : tinyint
1/0 column that indicates if the medication warning alert was a hard stop
AlertFiltered : tinyint
1/0 column that indicates if the medication warning alert was filtered out
AlertUserFiltered : tinyint
1/0 column that indicates if the medication warning alert was marked to be filtered by the user
AlertShown : tinyint
1/0 column that indicates if the medication warning alert was shown to the provider
DuplicateAlert : tinyint
1/0 column that indicates if a similar medication warning alert was shown to the provider within ten minutes before this medication warning alert occurred
AlertCriticalDose : tinyint
1/0 column indicating if the medication warning alert was displayed in a critical dose popup
TriggerInstant : datetime
The date and time the medication warning alert was triggered
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## MemberInsightFeedbackActionFact

**Extracted:** 2025-07-23 00:25:05
**Content Length:** 583 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Dim
Try It
MedicationWarningSetDim
The medication set dimension contains information about medication warning value sets. Each row represents a medication warning in a value set. Change Type: Non-Snapshot
Columns
MedicationWarningSetKey : bigint
Surrogate key used to uniquely identify the record
MedicationWarningKey : bigint
Links to MedicationWarningFact
Medication warning alert in the value set
Name : nvarchar(300)
Name of the value set
Type : nvarchar(100)
Type of the value set
```

---

## MemberInsightSubmissionFact

**Extracted:** 2025-07-23 00:25:22
**Content Length:** 4695 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class D Fact
Try It
MemberInsightFeedbackActionFact
The member insight feedback action fact table contains information about actions taken by provider organizations on member insights. Columns contain information on the actions delivered over Payer Platform, and the data is intended to help your organization evaluate how users are responding to the member insights (either a CDS Hook, Care Gaps Exchange, or Observed Condition) shown to them. Each row represents an action delivered to a payer organization and stored on a feedback record. A record may contain multiple actions. These actions may be taken by providers or non-providers. Records that are hidden or deleted will not appear in this table. Change Type: Non-Snapshot
Columns
MemberInsightFeedbackActionKey : bigint
Surrogate key used to uniquely identify the record
PayerFeedbackEpicId : nvarchar(50)
The record ID of the feedback in Epic. This ID represents feedback (PPF) records.
PatientDurableKey : bigint
Links to PatientDim
Patient this feedback applies to
PayerCalculatedOutcomeKey : bigint
Links to PayerCalculatedOutcomeFact
The calculated outcome associated with the feedback
SourceOrganizationKey : bigint
Links to SourceDim
Organization that sent the feedback
DestinationOrganizationKey : bigint
Links to SourceDim
Organization that received the feedback
SourceType : nvarchar(300)
Type of member insight feedback associated with this record
ClinicalDecisionSupportHookType : nvarchar(300)
The type of Clinical Decision Support (CDS) Hook that prompted the feedback response, for actions with a source type of CDS Hook
ClinicalDecisionSupportHookSubtype : nvarchar(300)
The subtype of Clinical Decision Support (CDS) Hook that prompted the feedback response, for actions with a source type of CDS Hook
ActionTaken : nvarchar(300)
Action associated with this insight
ActionResult : nvarchar(300)
Outcome of the action associated with this insight
ActingPcpDurableKey : bigint
Links to ProviderDim
Primary care provider who acted on this insight
ActingProviderDurableKey : bigint
Links to ProviderDim
Provider who acted on the insight
ActingProviderNpi : nvarchar(50)
The NPI of the provider who acted on the insight
WasActedOnByPcp : tinyint
1/0 column that indicates whether the user who acted on the insight is a primary care provider
WasActedOnByProvider : tinyint
1/0 column that indicates whether the user who acted on the insight is a provider
OriginalBpaKey : bigint
Links to BpaFact
The BPA that was shown to the user.
EncounterDateKey : bigint
Links to DateDim
Date of the patient contact at the organization providing feedback
EncounterType : nvarchar(300)
Encounter type associated with the feedback record
InsightCodeType : nvarchar(300)
Insight code type that the feedback applies to (ex. ICD-10), for source types of Observed Condition and Suspected Condition
InsightCodeValue : nvarchar(100)
String code value corresponding to the insight code type, for source types of Observed Condition and Suspected Condition
CareGapType : nvarchar(300)
The care gap type, if the insight source type is Care Gaps Exchange or Health Maintenance Action
ActionTimeOfDayKey : bigint
Links to TimeOfDayDim
The time of day the user took action on the insight Time Zone: Local
ActionInstantLocal : datetime
The date and time the user took action on the insight Time Zone: Local
ActionDateKey : bigint
Links to DateDim
The date the user took the action on the insight Time Zone: Local
RiskAdjustmentCategory : nvarchar(300)
The risk adjustment category associated with the feedback, if the source type is Observed Condition or Suspected Condition
IsFromThisSystem : tinyint
1/0 column that indicates whether the insight was based on data from the organization receiving the feedback
ConditionInSystem : nvarchar(300)
The reason why IsFromThisSystem was set to No. For Epic data, a value of 'Payer Known Condition, But Not Source For Provider' specifies the condition was in the Payer system as an observed condition at any point before the feedback was acted upon. 'Payer Suspect Condition, But Not Source For Provider' specifies the condition was suspected in the Payer system.
CreationDateKey : bigint
Links to DateDim
Date the insight record was created
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
IsFinalEncounterActionStatus : tinyint
1/0 column that indicates if this action was the final action status for the associated encounter. This is relevant for feedback types that can have multiple actions for the same payer information in one encounter.
```

---

## MessageCommandHistoryFact

**Extracted:** 2025-07-23 00:25:38
**Content Length:** 1009 characters

**Content:**
```
MemberInsightSubmissionFact
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Fact
Try It
MemberInsightSubmissionFact
MenberInsightSubmissionFact Change Type: Non-Snapshot
Columns
MemberInsightSubmissionKey : bigint
Surrogate key used to uniquely identify the record
PayerCalculatedOutcomeKey : bigint
Links to PayerCalculatedOutcomeFact
The calculated outcome that was submitted
ReceivingOrganizationSourceKey : bigint
Links to SourceDim
The organization to which the insight was submitted
SubmissionContractKey : bigint
Links to ContractDim
The value-based program for which the insight was submitted
SubmissionDateKey : bigint
Links to DateDim
The date the insight was submitted to the external organization
SubmissionTimeOfDayKey : bigint
Links to TimeOfDayDim
The time of day the insight was submitted to the external organization
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## MessageEncounterMappingFact

**Extracted:** 2025-07-23 00:25:53
**Content Length:** 798 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Fact
Try It
MessageEncounterMappingFact
The message encounter mapping fact contains information about In Basket message encounters. Each row represents a single In Basket message encounter. Change Type: Non-Snapshot
Columns
MessageEncounterMappingKey : bigint
Surrogate key used to uniquely identify the record
MessageKey : bigint
Links to MessageFact
Message associated with the encounter
EncounterKey : bigint
Links to EncounterFact
Encounter associated with the message
MessageCreationDateKey : bigint
Links to DateDim
Date the associated message was created, in UTC time
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## MessageFact

**Extracted:** 2025-07-23 00:26:09
**Content Length:** 3087 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class D Fact
Try It
MessageFact
The message fact contains information about In Basket messages. Each row represents a single In Basket message. Change Type: Non-Snapshot
Columns
MessageKey : bigint
Surrogate key used to uniquely identify the record
PatientDurableKey : bigint
Links to PatientDim
Patient associated with the message
SchedulingDepartmentKey : bigint
Links to DepartmentDim
Scheduling department associated with the message
CreationDateKey : bigint
Links to DateDim
Date the message was created, in UTC time
CreationInstant : datetime
Instant the message was created, in UTC time
CreationTimeOfDayKey : bigint
Links to TimeOfDayDim
Time the message was created, in UTC time
SendDateKey : bigint
Links to DateDim
Date the message was sent, in UTC time
SendInstant : datetime
Instant the message was sent, in UTC time
SendTimeOfDayKey : bigint
Links to TimeOfDayDim
Time the message was sent, in UTC time
DueDateKey : bigint
Links to DateDim
Date the message is due, in UTC time
DueInstant : datetime
Instant the message is due, in UTC time
DueTimeOfDayKey : bigint
Links to TimeOfDayDim
Time the message is due, in UTC time
ExpireDateKey : bigint
Links to DateDim
Date the message expires, in UTC time
ExpireInstant : datetime
Instant the message expires, in UTC time
ExpireTimeOfDayKey : bigint
Links to TimeOfDayDim
Time the message expires, in UTC time
LastCompletionDateKey : bigint
Links to DateDim
Date the message was last completed, in UTC time
LastCompletionInstant : datetime
Instant the message was last completed, in UTC time
LastCompletionTimeOfDayKey : bigint
Links to TimeOfDayDim
Time the message was last completed, in UTC time
MessageEpicId : nvarchar(50)
Epic ID of the message. This column identifies message (EOW) records.
RoutingThreadEpicId : numeric(18,0)
Epic ID of the message routing thread. This column identifies thread (HTH) records.
ResponsibilityThreadEpicId : numeric(18,0)
Epic ID of the message responsibility thread. This column identifies thread (HTH) records.
MyChartThreadEpicId : numeric(18,0)
Epic ID of the message MyChart thread. This column identifies thread (HTH) records.
Priority : nvarchar(300)
The current priority of the message
Status : nvarchar(300)
The current status of the message
SenderEmployeeDurableKey : bigint
Links to EmployeeDim
Employee that sent the message
ExternalSenderName : nvarchar(150)
The name of the external message sender, if applicable
RxMessageReason : nvarchar(300)
The reason for sending a medication message from the MAR to the pharmacy
MessageTopic : nvarchar(300)
A short description of the message contents
MessageTypeName : nvarchar(300)
The name of the message type
Urgency : nvarchar(300)
The urgency of a message (e.g. Urgent, High, Normal, Low)
WasCurrentUrgencyAddedBySystem : tinyint
1/0 column that indicates whether or not the message urgency was added by the system
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## MessagePatientMappingFact

**Extracted:** 2025-07-23 00:26:19
**Content Length:** 1199 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Fact
Try It
MessagePatientMappingFact
The message patient mapping fact contains the patient that is directly on an In Basket message, plus any patients that are indirectly associated with the message. Note that this does not necessarily include the patient recipient the message may have been sent to, which is stored separately in MessageRecipientFact. Each row represents a single patient associated with one In Basket message. The message patient mapping fact is intended for use with the organization filter only. For reporting it is recommended to use the patient that is stored in MessageFact instead. Change Type: Non-Snapshot
Columns
MessagePatientMappingKey : bigint
Surrogate key used to uniquely identify the record
MessageKey : bigint
Links to MessageFact
Message associated with the patient
PatientDurableKey : bigint
Links to PatientDim
Patient associated with the message
MessageCreationDateKey : bigint
Links to DateDim
Date the associated message was created
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## MessageRecipientFact

**Extracted:** 2025-07-23 00:26:29
**Content Length:** 1766 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Fact
Try It
MessageRecipientFact
The message recipient fact contains information about In Basket message recipients. Each row represents a single In Basket message recipient. Change Type: Non-Snapshot
Columns
MessageRecipientKey : bigint
Surrogate key used to uniquely identify the record
MessageKey : bigint
Links to MessageFact
Message associated with the recipient
EmployeeDurableKey : bigint
Links to EmployeeDim
Employee that received the message
RegistryKey : bigint
Links to InBasketRegistryDim
Registry that received the message
PatientDurableKey : bigint
Links to PatientDim
Patient that received the message
WorkstationKey : bigint
Links to WorkstationDim
Workstation that received the message
ReceivedDateKey : bigint
Links to DateDim
Date that the message was received, in UTC time
ReceivedInstant : datetime
Instant that the message was received, in UTC time
LastCompletionDateKey : bigint
Links to DateDim
Date that the message was last completed, in UTC time
LastCompletionInstant : datetime
Instant that the message was last completed, in UTC time
LastCompletionTimeOfDayKey : bigint
Links to TimeOfDayDim
Time that the message was last completed, in UTC time
IsPool : tinyint
1/0 column that indicates whether this recipient is a pool. 1 indicates that the recipient is a pool and 0 otherwise.
Priority : nvarchar(300)
The current priority of the message
Status : nvarchar(300)
The current status of the message
StatusChangeEmployeeDurableKey : bigint
Links to EmployeeDim
Employee that last changed the status of the message
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## MessageRecipientStatusHistoryFact

**Extracted:** 2025-07-23 00:26:39
**Content Length:** 1056 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Fact
Try It
MessageRecipientStatusHistoryFact
The message recipient status history fact contains information about In Basket message recipient status change events. Each row represents a single In Basket message recipient status change. Change Type: Non-Snapshot
Columns
MessageRecipientStatusHistoryKey : bigint
Surrogate key used to uniquely identify the record
MessageKey : bigint
Links to MessageFact
Message associated with the recipient status change
EmployeeDurableKey : bigint
Links to EmployeeDim
Employee associated with the recipient status change
DateKey : bigint
Links to DateDim
Date that the recipient status change occurred, in local time
TimeOfDayKey : bigint
Links to TimeOfDayDim
Time that the recipient status change occurred, in local time
Status : nvarchar(300)
The recipient status change made for the message
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## MessageStatusHistoryFact

**Extracted:** 2025-07-23 00:26:48
**Content Length:** 958 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Fact
Try It
MessageStatusHistoryFact
The message status history fact contains information about In Basket message status change events. Each row represents a single In Basket message status change. Change Type: Non-Snapshot
Columns
MessageStatusHistoryKey : bigint
Surrogate key used to uniquely identify the record
MessageKey : bigint
Links to MessageFact
Message associated with the status change
EmployeeDurableKey : bigint
Links to EmployeeDim
Employee associated with the status change
DateKey : bigint
Links to DateDim
Date that the status change occurred, in local time
TimeOfDayKey : bigint
Links to TimeOfDayDim
Time that the status change occurred, in local time
Status : nvarchar(300)
The status change made for the message
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## ModifierBridge

**Extracted:** 2025-07-23 00:26:58
**Content Length:** 461 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class A Helper
Try It
ModifierBridge
The modifier bridge contains unique combinations of procedure modifiers. Each row represents a procedure modifier in a combination. Change Type: Non-Snapshot
Columns
ModifierComboKey : bigint
Combination key used to uniquely identify a set of modifiers
ModifierKey : bigint
Links to ModifierDim
One of the modifiers in the combination
```

---

## ModifierDim

**Extracted:** 2025-07-23 00:27:08
**Content Length:** 542 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Dim
Try It
ModifierDim
The modifier dimension contains information about procedure modifiers. Each row represents a procedure modifier. Change Type: Non-Snapshot
Columns
ModifierKey : bigint
Surrogate key used to uniquely identify the record
ModifierEpicId : numeric(18,0)
The Epic ID of the modifier. This column identifies modifier (MOD) records.
Code : nvarchar(50)
Code associated with the modifier
Name : nvarchar(150)
Name of the modifier
```

---

## NhsnAntimicrobialUsageAttributeBridge

**Extracted:** 2025-07-23 00:27:17
**Content Length:** 510 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class A Helper
Try It
NhsnAntimicrobialUsageAttributeBridge
This bridge contains unique combinations of NHSN antimicrobials associated with medication administrations. Each row represents an antimicrobial in a combination. Change Type: Non-Snapshot
Columns
NhsnAntimicrobialUsageAttributeComboKey : bigint
Surrogate key used to uniquely identify the record
AttributeKey : bigint
Links to AttributeDim
The destination key
```

---

## NhsnAntimicrobialUsageFact

**Extracted:** 2025-07-23 00:27:27
**Content Length:** 1606 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Fact
Try It
NhsnAntimicrobialUsageFact
The NHSN antimicrobial usage fact contains medication administrations that contributed to NHSN antimicrobial usage. These administrations can be summarized to calculate Days of Therapy. Each row represents a medication administration. Change Type: Non-Snapshot
Columns
NhsnAntimicrobialUsageKey : bigint
Surrogate key used to uniquely identify the record
AntimicrobialComboKey : bigint
Links to NhsnAntimicrobialUsageAttributeBridge
Antimicrobial that was administered
AttributionDate : date
Date the patient was administered the medication
AttributionDateKey : bigint
Links to DateDim
Date the patient was administered the medication
AttributedDepartmentKey : bigint
Links to DepartmentDim
Department the antimicrobial use day is attributed to
InfectionControlReportingUnitKey : bigint
Links to InfectionControlReportingLocationDim
The reporting unit the antimicrobial day is attributed to
MedicationAdministrationKey : bigint
Links to MedicationAdministrationFact
Medication administration contributing to the antimicrobial usage day
NhsnDaysPresentKey : bigint
Links to NhsnDaysPresentFact
Days Present day associated with the antimicrobial use day
PatientDurableKey : bigint
Links to PatientDim
Patient associated with the antimicrobial use day
RouteKey : bigint
Links to AttributeDim
Route through which the antimicrobial was administered
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## NhsnDaysPresentFact

**Extracted:** 2025-07-23 00:27:38
**Content Length:** 1097 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Fact
Try It
NhsnDaysPresentFact
The NHSN days present fact contains patients that were in NHSN-reportable locations at any point in the day. Each row represents a patient, location, and date in combination. This is used as a denominator for Antimicrobial Usage days. Change Type: Non-Snapshot
Columns
NhsnDaysPresentKey : bigint
Surrogate key used to uniquely identify the record
AttributionDateKey : bigint
Links to DateDim
Date the patient was in the NHSN location
AttributionDate : date
Date the patient was in the NHSN location
AttributedDepartmentKey : bigint
Links to DepartmentDim
Department the Days Present day is attributed to
InfectionControlReportingUnitKey : bigint
Links to InfectionControlReportingLocationDim
The reporting unit the Days Present day is attributed to
PatientDurableKey : bigint
Links to PatientDim
Patient associated with the Days Present day
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## NumbersDim

**Extracted:** 2025-07-23 00:27:47
**Content Length:** 262 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class A Helper
Try It
NumbersDim
The number dimension contains one row for each positive integer from 1 to 1000000 Change Type: Non-Snapshot
Columns
Number : int
An integer
```

---

## OrderValidationActionBridge

**Extracted:** 2025-07-23 00:27:57
**Content Length:** 526 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class A Helper
Try It
OrderValidationActionBridge
The order validation action bridge contains unique combinations of actions associated with order validations that triggered. Each row represents one or more actions in a combination. Change Type: Non-Snapshot
Columns
OrderValidationActionComboKey : bigint
Surrogate key used to uniquely identify the record
CategoryKey : bigint
Links to CategoryDim
One of the actions in the combination
```

---

## OrderValidationBuildDim

**Extracted:** 2025-07-23 00:28:07
**Content Length:** 587 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Dim
Try It
OrderValidationBuildDim
The order validation build dimension contains information about the order validation build. Each row represents an order validation build. Change Type: Non-Snapshot
Columns
OrderValidationBuildKey : bigint
Surrogate key used to uniquely identify the record
OrderValidationExtensionEpicId : numeric(18,0)
Epic ID of the order validation extension. This column identifies extension (LPP) records.
Name : nvarchar(300)
Name of the order validation extension
```

---

## OrderValidationFact

**Extracted:** 2025-07-23 00:28:17
**Content Length:** 2804 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Fact
Try It
OrderValidationFact
The order validation fact contains information about order validations. Each row represents an order validation firing. Change Type: Non-Snapshot
Columns
OrderValidationKey : bigint
Surrogate key used to uniquely identify the record
AlertEpicId : numeric(18,0)
Epic ID of the alert record. This column identifies alert (ALT) records.
AlertEpicContactNumber : int
Epic contact number of the alert contact. This column identifies the alert (ALT) contact number.
OrderValidationBuildKey : bigint
Links to OrderValidationBuildDim
Order validation build that was triggered
PatientDurableKey : bigint
Links to PatientDim
Patient that triggered the validation
EmployeeDurableKey : bigint
Links to EmployeeDim
Employee that triggered the validation
ProviderDurableKey : bigint
Links to ProviderDim
Provider that triggered the validation
DepartmentKey : bigint
Links to DepartmentDim
Patient department where the validation was triggered
EncounterKey : bigint
Links to EncounterFact
Encounter associated with the validation
TriggerDateKey : bigint
Links to DateDim
Date the validation was triggered
TriggerInstant : datetime
Date and time the validation was triggered
UserPlatform : nvarchar(300)
Platform in use when the validation was triggered. For Epic data, this is the Epic platform used, such as Hyperspace or Rover.
DisplayMode : nvarchar(300)
Display mode of the validation. Interruptive means the validation was displayed to the user while Not Displayed means it was not displayed.
WasShown : tinyint
1/0 column that indicates if a user saw the validation
FinalActionTakenInstant : datetime
Date and time the final action - either accept or cancel - was taken
Workflow : nvarchar(300)
The workflow that checked the validation, such as Sign Orders
IsHardStop : tinyint
1/0 column that indicates if the validation was a hard stop, preventing the user from continuing
EpicProfileName : nvarchar(300)
The name of the Epic profile record that the order validation extension came from. This could be a profile (LPR) record that no longer exists.
OrderValidationActionComboKey : bigint
Links to OrderValidationActionBridge
Actions that the user took in the order validation
OrderValidationOrderSourceComboKey : bigint
Links to OrderValidationOrderSourceBridge
The sources of the unsigned orders that were present when the order validation fired. In Beacon, only orders that were selected at the time are included
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
WarningMessage : nvarchar(4000)
The warning message displayed to a user. Data older than 60 days will eventually be deleted from this column.
```

---

## OrderValidationOrderSourceBridge

**Extracted:** 2025-07-23 00:28:26
**Content Length:** 682 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class A Helper
Try It
OrderValidationOrderSourceBridge
The order validation source bridge contains unique combinations of order sources associated with order validations that triggered. Each combination represents the sources of the unsigned orders that were being signed at the time the order validation was triggered. Each row represents one or more sources in a combination. Change Type: Non-Snapshot
Columns
OrderValidationOrderSourceComboKey : bigint
Surrogate key used to uniquely identify the record
CategoryKey : bigint
Links to CategoryDim
One of the order sources in the combination
```

---

## OrganFailureReasonMappingFact

**Extracted:** 2025-07-23 00:28:36
**Content Length:** 796 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Fact
Try It
OrganFailureReasonMappingFact
The organ failure reason mapping fact contains information about organ failure. Each row represents one failure reason for one organ. Change Type: Non-Snapshot
Columns
OrganFailureReasonMappingKey : bigint
Surrogate key used to uniquely identify the record
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
OrganTransplantationKey : bigint
Links to OrganTransplantationFact
The organ that this failure reason belongs to
Reason : nvarchar(300)
A contributory reason that this organ is failing
ReasonSpecify : nvarchar(300)
A free-text contributory reason that this organ is failing
```

---

## OrganLabComponentResultMappingFact

**Extracted:** 2025-07-23 00:28:46
**Content Length:** 946 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Fact
Try It
OrganLabComponentResultMappingFact
The organ lab component result mapping fact maps organ transplantations to lab results obtained from deceased anonymous donors. Change Type: Non-Snapshot
Columns
OrganLabComponentResultMappingKey : bigint
Surrogate key used to uniquely identify the record
OrganTransplantationKey : bigint
Links to OrganTransplantationFact
Organ transplantation associated with the lab component result
LabComponentResultKey : bigint
Links to LabComponentResultFact
Lab component definition
TestDateKey : bigint
Links to DateDim
Date that the lab component result was obtained
TestType : nvarchar(50)
Type of lab test the result component is part of. For example, "Serology" or "Liver Biopsy"
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## OrganTransplantationFact

**Extracted:** 2025-07-23 00:28:57
**Content Length:** 6736 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class F Fact
Try It
OrganTransplantationFact
The organ transplantation fact contains information about organ transplants. Each row represents one organ. Change Type: Non-Snapshot
Columns
OrganTransplantationKey : bigint
Surrogate key used to uniquely identify the record
RecipientPatientDurableKey : bigint
Links to PatientDim
The patient who has received or will be receiving the organ
DonorPatientDurableKey : bigint
Links to PatientDim
The patient who has donated or will be donating the organ
RecipientEpisodeKey : bigint
Links to TransplantEpisodeFact
The transplant episode for the patient who has received or will be receiving the organ
DonorEpisodeKey : bigint
Links to TransplantEpisodeFact
The transplant episode for the patient who has donated or will be donating the organ
TransplantedDate : date
The date when the organ was transplanted
RecoveredDateKey : bigint
Links to DateDim
The date on which the organ was recovered from the donor
RecoveredDate : date
The date on which the organ was recovered from the donor
RecipientCoordinatorDurableKey : bigint
Links to ProviderDim
The provider who is coordinating the recipient's transplant
DonorCoordinatorDurableKey : bigint
Links to ProviderDim
The provider who is coordinating the donor's care
RecoveryFacilityKey : bigint
Links to PlaceOfServiceDim
The facility where the organ was recovered
OrganClass : nvarchar(300)
The organ classification (kidney, liver, etc.)
DonorRelationshipToRecipient : nvarchar(300)
The relationship between the recipient and the donor from the recipient's perspective
DonorRelationshipToRecipientSpecify : nvarchar(300)
The relationship between the recipient and the donor from the recipient's perspective
HlaMatch : nvarchar(300)
The HLA match type between the recipient and the donor
BCellCrossMatchResult : nvarchar(300)
The B cell crossmatch test result between the recipient and the donor
BCellCrossmatchFlow : int
The B cell crossmatch flow between the recipient and the donor
TCellCrossmatchResult : nvarchar(300)
The T cell crossmatch test result between the recipient and the donor
TCellCrossmatchFlow : int
The T cell crossmatch flow between the recipient and the donor
DonorBloodType : nvarchar(50)
The donor's blood type. This will only populate for deceased donors.
DonorTransplantId : nvarchar(50)
The donor's transplant ID from the regional organ management network
OrganStatus : nvarchar(300)
The organ's status
DonorType : nvarchar(300)
The donor type (Live, DBD, DCD, etc.)
RecipientDeathDate : date
The recipient's date of death
AntigenAMismatches : tinyint
The number of A mismatches between the recipient and the donor
RecipientManagingCenter : nvarchar(300)
The transplant center managing the recipient
AntigenBMismatches : tinyint
The number of B mismatches between the recipient and the donor
AntigenDrMismatches : tinyint
The number of DR mismatches between the recipient and the donor
DonorClass : nvarchar(300)
The criteria the organ can be listed as (standard or expanded)
KidneyDonorProfileIndex : tinyint
The percentage score of the donor risk profile index
OrganFailureDate : date
The date on which the transplanted organ failed
OrganFailureMethod : nvarchar(300)
The method by which the organ failure date was determined
OrganRemovalDate : date
The date the organ was removed from the recipient after the organ failed
OrganFailurePrimaryReason : nvarchar(300)
The primary reason for organ failure from the organ management organization's list of reasons
OrganFailurePrimaryReasonSpecify : nvarchar(300)
The primary reason for organ failure from the organ management organization's list of reasons
OrganProcurementOrganization : nvarchar(300)
The organ procurement organization
SurgicalProcedure : nvarchar(300)
The procedure type used in the transplant of the organ
ReceivedOn : nvarchar(300)
What the organ was received on (ice, pump, etc.)
StayedOn : nvarchar(300)
What the organ stayed on after being received (ice, pump, etc.)
DonorClampOnInstantLocal : datetime
When the donor cross clamp was put on
RecipientAnastomosisInstantLocal : datetime
The recipient anastomosis start time
RecipientPortalClampOffInstantLocal : datetime
When the portal clamp was removed
RecipientClampOffInstantLocal : datetime
When the recipient cross clamp was taken off. This uses the arterial clamp for liver transplants.
ColdIschemiaMinutes : bigint
The time the organ spent in cold ischemia in minutes
WarmIschemiaMinutes : bigint
The time the organ spent in warm ischemia in minutes
TotalIschemiaMinutes : bigint
The total ischemia time in minutes
DonorCauseOfDeath : nvarchar(300)
The cause of the donor's death
DonorCauseOfDeathSpecify : nvarchar(300)
The cause of the donor's death
DonorDeathDate : date
The date of the donor's death
DonorBirthDate : date
The donor's date of birth
DonorSex : nvarchar(300)
The donor's sex assigned at birth
DonorAge : numeric(6,3)
The donor's age at procurement in years
DonorHeightInches : numeric(4,1)
The donor's height at procurement in inches
DonorWeightOunces : numeric(6,1)
The donor's weight at procurement in ounces
DonorTobaccoUse : nvarchar(300)
Whether or not the donor used tobacco prior to procurement
DonorAlcoholUse : nvarchar(300)
Whether or not the donor used alcohol prior to procurement
DonorDrugUse : nvarchar(300)
Whether or not the donor used drugs prior to procurement
RecoveryFacilitySpecify : nvarchar(300)
The facility where the organ was recovered
PressorGivenToDonor : tinyint
Whether pressors were given to the donor. This will only populate for deceased donors.
PitressinGivenToDonor : tinyint
Whether Pitressin was given to the donor. This will only populate for deceased donors.
DonorHasHypertension : tinyint
Whether or not the donor had hypertension prior to procurement. This will only populate for deceased donors.
DonorHasDiabetes : tinyint
Whether or not the donor had diabetes prior to procurement. This will only populate for deceased donors.
DonorHasCancer : tinyint
Whether or not the donor had cancer prior to procurement. This will only populate for deceased donors.
InductionMedicationComboKey : bigint
Links to InductionMedicationBridge
Induction medications given to the recipient
DonorMeetsRiskCriteria : tinyint
Whether or not the donor met criteria for an increased risk of blood-borne disease transmission
DonorRiskCriteriaComboKey : bigint
Links to OrganDonorRiskCriteriaBridge
The criteria that caused the donor to be an increased risk for blood-borne disease transmission. This will only populate for deceased donors.
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## OutgoingCapitationPaymentFact

**Extracted:** 2025-07-23 00:29:07
**Content Length:** 6633 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class G Fact
Try It
OutgoingCapitationPaymentFact
The outgoing capitation payment fact stores information on each paid capitation payment. Each row represents a member level payment. Change Type: Non-Snapshot
Columns
OutgoingCapitationPaymentKey : bigint
Surrogate key used to uniquely identify the record
Amount : numeric(18,2)
The amount associated with the transaction
EffectiveDateKey : bigint
Links to DateDim
The effective date of the transaction
EligibilityDateKey : bigint
Links to DateDim
The eligibility date of the transaction
PaymentDateKey : bigint
Links to DateDim
The date the payment associated with the transaction was made
IsUpToDateTransaction : nvarchar(50)
Indicates if the row is the latest transaction in an adjustment chain for PCP capitation and specialty capitation transactions that do not use a member list. This will be '*Not Applicable' for specialty capitation transactions that use a member list.
CarrierEpicId : nvarchar(50)
The Epic ID of the carrier (MCR) record associated with the transaction
CarrierName : nvarchar(50)
The name of the carrier associated with the transaction
CorporationEpicId : nvarchar(50)
The Epic ID of the corporation (CPG) record associated with the transaction
CorporationName : nvarchar(100)
The name of the corporation associated with the transaction
CoverageKey : bigint
Links to CoverageDim
The coverage associated with the transaction
MemberGroupEpicId : nvarchar(50)
The Epic ID of the member group (MGR) record associated with the transaction
MemberGroupName : nvarchar(200)
The name of the member group associated with the transaction
RiskPanelEpicId : nvarchar(50)
The Epic ID of the risk panel (RKP) record associated with the transaction
RiskPanelName : nvarchar(50)
The name of the risk panel associated with the transaction
DivisionEpicId : nvarchar(50)
The Epic ID of the division (DPG) record associated with the transaction
DivisionName : nvarchar(300)
The name of the division associated with the transaction
EmployerGroupKey : bigint
Links to ManagedCareEmployerDim
The employer group associated with the transaction
EmployerGroupEpicId : nvarchar(50)
The Epic ID of the employer group (PPG) record associated with the transaction
EmployerGroupName : nvarchar(300)
The name of the employer group associated with the transaction
LineOfBusinessEpicId : nvarchar(50)
The Epic ID of the line of business (EAF) record associated with the transaction
LineOfBusinessName : nvarchar(300)
The name of the line of business associated with the transaction
NetworkEpicId : nvarchar(50)
The Epic ID of the network (NET) record associated with the transaction
NetworkName : nvarchar(200)
The name of the network associated with the transaction
PrimaryCareProviderDurableKey : bigint
Links to ProviderDim
The primary care provider associated with the transaction
RiskPoolEpicId : nvarchar(50)
The Epic ID of the risk pool (POL) record associated with the transaction
ServiceAreaKey : bigint
Links to DepartmentDim
The service area associated with the transaction
IsRetro : tinyint
1/0 column that indicates if the transaction was a retro transaction. A retro transaction is a transaction that results from subsequent capitation calculation that effectively replaces the older transaction.
Specialty : nvarchar(300)
The specialty associated with the transaction
TransactionEpicId : nvarchar(50)
The Epic ID associated with the transaction
VendorKey : bigint
Links to VendorDim
The vendor associated with the transaction
BenefitPlanKey : bigint
Links to CoverageDim
The benefit plan of the member in the transaction
ReplacementTransactionKey : bigint
Links to OutgoingCapitationPaymentFact
The more recently created transaction that replaces this transaction
ReplacesTransactionKey : bigint
Links to OutgoingCapitationPaymentFact
The out-of-date transaction that this transaction replaces
PatientDurableKey : bigint
Links to PatientDim
The member associated with the transaction
OwningBusinessSegmentKey : bigint
Links to DepartmentDim
The owning business segment associated with the transaction
CheckKey : bigint
Links to ApCheckFact
The check associated with the transaction
CapitationType : nvarchar(50)
Column indicating if the transaction was a specialty capitation or PCP capitation
ProductType : nvarchar(300)
The name of the product type associated with the transaction
CapitationCode : nvarchar(300)
The transaction's capitation code
PatientDateOfBirthKey : bigint
Links to DateDim
The member's date of birth at the time of the transaction's creation. This is included because this affects the determination of the transaction's amount.
PatientSex : nvarchar(300)
The member's sex at the time of the transaction's creation. This is included because this affects the determination of the transaction's amount.
PaymentWithholdReason : nvarchar(300)
The withhold reason for the transaction, only applicable for specialty capitation
MedicareAdvantageContractNumber : nvarchar(50)
The Medicare Advantage contract number of the member associated with the transaction
MemberGroupAssociationExtensionValue : nvarchar(300)
The value returned by the association extension on the member group for the associated member
RetroLevel : numeric(18,0)
The retro computation level associated with the transaction. The level corresponds to the iteration of retro on which the transaction was created.
PaymentStatus : nvarchar(50)
Describes what the status associated with the transaction is in terms of its actual payment. The value can be Computed, Released to AP (Account Payable), Batched, or Paid.
PrimaryLocationKey : bigint
Links to DepartmentDim
The primary location associated with the transaction
AdjustmentType : nvarchar(300)
Indicates whether the transaction is an adjustment, reversal, or original
ReversesTransactionKey : bigint
Links to OutgoingCapitationPaymentFact
The transaction that this transaction reverses
ReversedByTransactionKey : bigint
Links to OutgoingCapitationPaymentFact
The transaction that reverses this transaction
AttributedRegionKey : bigint
Links to PlaceOfServiceDim
The region to which the transaction is attributed
AttributedMedicalGroupKey : bigint
Links to PlaceOfServiceDim
The medical group to which the transaction is attributed
BatchRunDateKey : bigint
Links to DateDim
The date when the batch associated with the transaction was run
RiskPoolName : nvarchar(50)
The name of the risk pool associated with the transaction
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## PathInstSmartGrpMedOrdTempMappingFact

**Extracted:** 2025-07-23 00:29:17
**Content Length:** 1020 characters

**Content:**
```
PathInstSmartGrpMedOrdTempMappingFact
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Fact
Try It
PathInstSmartGrpMedOrdTempMappingFact
The pathway instance SmartGroup medication order template mapping fact contains information on the list of medication order template records in SmartGroup instances. Change Type: Non-Snapshot
Columns
PathInstSmartGrpMedOrdTempMappingKey : bigint
Surrogate key used to uniquely identify the record
PathwayInstanceSmartGroupKey : bigint
Links to PathwayInstanceSmartGroupFact
The SmartGroup instance containing medication order template records
MedicationOrderTemplateKey : bigint
Links to MedicationOrderTemplateDim
The medication order template record contained in a SmartGroup instance
PartitionDateKey : bigint
Links to DateDim
This column is only used for partitioning and should not be used for reporting
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## PathInstSmartGrpProcOrdTempMappingFact

**Extracted:** 2025-07-23 00:29:27
**Content Length:** 1005 characters

**Content:**
```
PathInstSmartGrpProcOrdTempMappingFact
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Fact
Try It
PathInstSmartGrpProcOrdTempMappingFact
The pathway instance SmartGroup procedure order template mapping fact contains information on the list of procedure order template records in SmartGroup instances. Change Type: Non-Snapshot
Columns
PathInstSmartGrpProcOrdTempMappingKey : bigint
Surrogate key used to uniquely identify the record
PathwayInstanceSmartGroupKey : bigint
Links to PathwayInstanceSmartGroupFact
The SmartGroup instance containing procedure order template records
ProcedureOrderTemplateKey : bigint
Links to ProcedureOrderTemplateDim
The procedure order template contained in a SmartGroup instance
PartitionDateKey : bigint
Links to DateDim
This column is only for partitioning and should not be used for reporting
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## PathInstSmartGrpSmrtSetInfoMappingFact

**Extracted:** 2025-07-23 00:29:37
**Content Length:** 956 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Fact
Try It
PathInstSmartGrpSmrtSetInfoMappingFact
The pathway instance SmartGroup SmartSet information mapping fact contains information on the list of SmartSet information records in SmartGroup instances. Change Type: Non-Snapshot
Columns
PathInstSmartGrpSmrtSetInfoMappingKey : bigint
Surrogate key used to uniquely identify the record
PathwayInstanceSmartGroupKey : bigint
Links to PathwayInstanceSmartGroupFact
The SmartGroup instance containing SmartSet information records
SmartSetInformationKey : bigint
Links to SmartSetInformationDim
The SmartSet information record contained in a SmartGroup instance
PartitionDateKey : bigint
Links to DateDim
This column is only used for partitioning and should not be used for reporting
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## PathwayInstanceDocumentationFact

**Extracted:** 2025-07-23 00:29:47
**Content Length:** 2238 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Fact
Try It
PathwayInstanceDocumentationFact
The pathway instance documentation fact contains information on SmartSet information documentation items completed during a pathway instance. Each row represents a documentation item. For data loaded from Clarity, all documentation items linked to a SmartGroup instance are extracted. Change Type: Non-Snapshot
Columns
PathwayInstanceDocumentationKey : bigint
Surrogate key used to uniquely identify the record
PathwayInstanceOutcomeKey : bigint
Links to PathwayInstanceOutcomeFact
The pathway outcome documentation linked to this information item
PathwayInstanceSmartGroupKey : bigint
Links to PathwayInstanceSmartGroupFact
The pathway SmartGroup this information item was part of
PathwayInstanceStepKey : bigint
Links to PathwayInstanceStepFact
The pathway step this information item was part of
PathwayInstanceKey : bigint
Links to PathwayInstanceFact
The pathway instance this information item was part of
SmartSetInformationKey : bigint
Links to SmartSetInformationDim
The SmartSet information template this information item documentation was created from
ApplyingUserDurableKey : bigint
Links to EmployeeDim
The user who applied the information item to the pathway instance
ItemAppliedInstant : datetime
The date and time the information item was applied to the pathway
ItemAppliedDateKey : bigint
Links to DateDim
The date the information item was applied to the pathway instance
ItemAppliedTimeOfDayKey : bigint
Links to TimeOfDayDim
The time of day the information item was applied to the pathway instance
Name : nvarchar(200)
The record name of the information item instance
DisplayName : nvarchar(300)
The display name of the information item instance
DocumentationTypeValue : int
The category value for the type of documentation this information item contains
DocumentationTypeName : nvarchar(300)
The type of documentation this information item contains
PathwayInstanceDocumentationEpicId : numeric(18,0)
The Epic record ID of the information item instance
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## PathwayInstanceFact

**Extracted:** 2025-07-23 00:29:57
**Content Length:** 3002 characters

**Content:**
```
PathwayInstanceFact
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class D Fact
Try It
PathwayInstanceFact
The pathway instance fact contains information about pathway instances. Each row represents a single pathway instance. Change Type: Non-Snapshot
Columns
PathwayInstanceKey : bigint
Surrogate key used to uniquely identify the record
SourcePathwayTemplateKey : bigint
Links to PathwayTemplateDim
The pathway template record the pathway instance was created from
CreationEmployeeDurableKey : bigint
Links to EmployeeDim
The user who created the pathway instance
StartEmployeeDurableKey : bigint
Links to EmployeeDim
The user who started the pathway instance
DiscontinueEmployeeDurableKey : bigint
Links to EmployeeDim
The user who discontinued the pathway instance
CompletedEmployeeDurableKey : bigint
Links to EmployeeDim
The user who completed the pathway instance
PatientDurableKey : bigint
Links to PatientDim
The patient on the pathway instance
PrimaryEncounterKey : bigint
Links to EncounterFact
The primary encounter associated with the pathway instance
PrimaryHospitalAdmissionKey : bigint
Links to HospitalAdmissionFact
The primary hospital admission associated with the pathway instance
Name : nvarchar(300)
The name of the pathway instance record
DisplayName : nvarchar(500)
The display name of the pathway instance record
PathwayStatusValue : int
The category value of the status of the pathway instance
PathwayStatusName : nvarchar(300)
The name of the status of the pathway instance
DiscontinueReasonValue : int
The category value of the reason the pathway was discontinued
DiscontinueReasonName : nvarchar(300)
The name of the reason the pathway was discontinued
CreationDateKey : bigint
Links to DateDim
The date the pathway instance was created
StartInstant : datetime
The date and time the pathway instance was started
StartDateKey : bigint
Links to DateDim
The date the pathway instance was started
StartTimeOfDayKey : bigint
Links to TimeOfDayDim
The time of day the pathway instance was started
CompletedInstant : datetime
The date and time the pathway instance was completed
CompletedDateKey : bigint
Links to DateDim
The date the pathway instance was completed
CompletedTimeOfDayKey : bigint
Links to TimeOfDayDim
The time of day the pathway instance was completed
DiscontinueInstant : datetime
The date and time the pathway instance was discontinued
DiscontinueDateKey : bigint
Links to DateDim
The date the pathway instance was discontinued
DiscontinueTimeOfDayKey : bigint
Links to TimeOfDayDim
The time of day the pathway instance was discontinued
PathwayInstanceEpicId : numeric(18,0)
The Epic ID of the pathway instance record
WasPathwaySuggested : tinyint
1/0 column that indicates whether the pathway instance was suggested to a user. This column equals 1 if the pathway was suggested, 0 otherwise.
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## PathwayInstanceOutcomeFact

**Extracted:** 2025-07-23 00:30:07
**Content Length:** 1542 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Fact
Try It
PathwayInstanceOutcomeFact
The pathway instance outcome fact contains record-level information about target outcomes documented during clinical pathway instances. Each row represents an outcome in a pathway step instance. For data loaded from Clarity, all outcomes created from outcome templates used for pathways are extracted. Change Type: Non-Snapshot
Columns
PathwayInstanceOutcomeKey : bigint
Surrogate key used to uniquely identify the record
PatientDurableKey : bigint
Links to PatientDim
The patient associated with the pathway outcome instance
EncounterKey : bigint
Links to EncounterFact
The encounter the pathway outcome instance was documented in
HospitalAdmissionKey : bigint
Links to HospitalAdmissionFact
The hospital admission associated with the pathway outcome instance
PathwayOutcomeTemplateKey : bigint
Links to PathwayOutcomeTemplateDim
The pathway outcome template the outcome instance was created from
CreationInstant : datetime
The date and time the pathway outcome instance was created
CreationDateKey : bigint
Links to DateDim
The date the pathway outcome instance was created
CreationTimeOfDayKey : bigint
Links to TimeOfDayDim
The time of day the pathway outcome instance was created
PathwayInstanceOutcomeEpicId : nvarchar(50)
The Epic record ID of the pathway outcome instance
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## PathwayInstanceOutcomeHistoryFact

**Extracted:** 2025-07-23 00:30:17
**Content Length:** 2091 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Fact
Try It
PathwayInstanceOutcomeHistoryFact
The pathway instance outcome fact contains information about each edit of outcomes documented during clinical pathway instances. Each row represents an edit to a pathway outcome. For data loaded from Clarity, all edits for outcomes created from outcome templates used for pathways are extracted. Change Type: Non-Snapshot
Columns
PathwayInstanceOutcomeHistoryKey : bigint
Surrogate key used to uniquely identify the record
PathwayInstanceOutcomeKey : bigint
Links to PathwayInstanceOutcomeFact
The pathway instance outcome this edit was for
EditUserDurableKey : bigint
Links to EmployeeDim
The user who made the edit to the pathway outcome
EditInstant : datetime
The date and time the pathway outcome was edited
EditDateKey : bigint
Links to DateDim
The date the pathway outcome was edited
EditTimeOfDayKey : bigint
Links to TimeOfDayDim
The time of day the pathway outcome was edited
StartDateKey : bigint
Links to DateDim
The date on which work toward the pathway outcome should begin
DisplayName : nvarchar(300)
The display name of the outcome in this edit
ContactTypeValue : int
The category value for the type of edit made to the pathway outcome
ContactTypeName : nvarchar(300)
The type of edit made to the pathway outcome
PathwayOutcomeValue : int
The category value of the pathway outcome documented during this edit
PathwayOutcomeName : nvarchar(300)
The pathway outcome documented during this edit
SuggestedOutcomeValue : int
The category value of the suggested outcome value presented to a user based on an alert. This column converts the value from ALT 1040 into a value in the IGO 165 category list.
SuggestedOutcomeValueName : nvarchar(300)
The value of the suggested outcome value presented to a user based on an alert. This column converts the value from ALT 1040 into a value in the IGO 165 category list.
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## PathwayInstanceSectionFact

**Extracted:** 2025-07-23 00:30:26
**Content Length:** 1318 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Fact
Try It
PathwayInstanceSectionFact
The pathway instance section fact contains information about sections in steps in instances of clinical pathways. Each row represents a section in a pathway instance. For data loaded from clarity, all pathway instance sections are extracted. Change Type: Non-Snapshot
Columns
PathwayInstanceSectionKey : bigint
Surrogate key used to uniquely identify the record
PathwayInstanceKey : bigint
Links to PathwayInstanceFact
The pathway instance this section is a part of
PathwayInstanceStepKey : bigint
Links to PathwayInstanceStepFact
The pathway step this section is part of
SourcePathwayTemplateSectionKey : bigint
Links to SmartSetSectionDim
The SmartSet section used as a template for this pathway section
CreatedByUserDurableKey : bigint
Links to EmployeeDim
The user who created the pathway section
Name : nvarchar(300)
The name of the pathway section
PathwayInstanceSectionEpicId : numeric(18,0)
The Epic record ID of the pathway section
PartitionDateKey : bigint
Links to DateDim
This column is only used for partitioning and should not be reported on
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## PathwayInstanceSmartGroupFact

**Extracted:** 2025-07-23 00:30:36
**Content Length:** 1234 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Fact
Try It
PathwayInstanceSmartGroupFact
The pathway instance SmartGroup fact contains information about SmartGroups in sections of steps of clinical pathways. Each row represents a SmartGroup in a pathway instance. For data loaded from Clarity, all SmartGroups instances are extracted. Change Type: Non-Snapshot
Columns
PathwayInstanceSmartGroupKey : bigint
Surrogate key used to uniquely identify the record
PathwayInstanceKey : bigint
Links to PathwayInstanceFact
The pathway instance the SmartGroup is part of
SourceSmartGroupKey : bigint
Links to SmartGroupDim
The SmartGroup template the pathway SmartGroup was created from
CreatedByUserDurableKey : bigint
Links to EmployeeDim
The user who created the pathway SmartGroup
PathwayInstanceSmartGroupEpicId : numeric(18,0)
The Epic record ID of the pathway SmartGroup
Name : nvarchar(300)
The record name of the pathway instance SmartGroup
PartitionDateKey : bigint
Links to DateDim
This column is used for partitioning and should not be used for reporting
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## PathwayInstanceStepFact

**Extracted:** 2025-07-23 00:30:46
**Content Length:** 4419 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class D Fact
Try It
PathwayInstanceStepFact
The pathway instance step fact contains information about steps in instances of clinical pathways. Each row represents an individual step in a pathway instance. For data loaded from Clarity, all pathway instance steps are extracted. Change Type: Non-Snapshot
Columns
PathwayInstanceStepKey : bigint
Surrogate key used to uniquely identify the record
PathwayInstanceKey : bigint
Links to PathwayInstanceFact
The pathway instance in which the step took place
SourcePathwayTemplateStepHistoryKey : bigint
Links to PathwayTemplateStepHistoryDim
The pathway step template this step was created from
CreatedByUserDurableKey : bigint
Links to EmployeeDim
The user who created the pathway step
EncounterKey : bigint
Links to EncounterFact
The encounter associated with the pathway step
HospitalAdmissionKey : bigint
Links to HospitalAdmissionFact
The hospital admission associated with the step
ScheduledStartInstant : datetime
The date and time on which the step was scheduled to start
ScheduledStartDateKey : bigint
Links to DateDim
The date on which the step was scheduled to start
ScheduledStartTimeOfDayKey : bigint
Links to TimeOfDayDim
The time of day on which the step was scheduled to start
ManualStartInstant : datetime
The date and time on which the step was manually started
ManualStartDateKey : bigint
Links to DateDim
The date the step was manually started
ManualStartTimeOfDayKey : bigint
Links to TimeOfDayDim
The time of day the step was manually started
ManualStartUserDurableKey : bigint
Links to EmployeeDim
If the step was manually started, the user who started the pathway step
ScheduledEndInstant : datetime
The date and time the step was scheduled to end
ScheduledEndDateKey : bigint
Links to DateDim
The date on which the step was scheduled to end
ScheduledEndTimeOfDayKey : bigint
Links to TimeOfDayDim
The time of day on which the step was scheduled to end
EndInstant : datetime
The date and time the step ended. For steps that were active when the pathway instance itself was discontinued or completed, this is the discontinuation or completion date and time of the pathway instance. Otherwise, this is the start date and time of the next step in the pathway.
EndDateKey : bigint
Links to DateDim
The date the step ended. For steps that were active when the pathway instance itself was discontinued or completed, this is the discontinuation or completion date of the pathway instance. Otherwise, this is the start date of the next step in the pathway.
EndTimeOfDayKey : bigint
Links to TimeOfDayDim
The time the step ended. For steps that were active when the pathway instance itself was discontinued or completed, this is the discontinuation or completion time of the pathway instance. Otherwise, this is the start time of the next step in the pathway.
Name : nvarchar(300)
The pathway instance step name
PathwayInstanceStepEpicId : numeric(18,0)
The Epic record ID of the pathway instance step
ScheduledDurationInSeconds : numeric(18,0)
The scheduled duration of the step
DurationInSeconds : numeric(18,0)
The number of seconds the pathway step was active. For steps that were manually started, this is the difference between the manual start time and the step end time. For steps that were automatically started, this is the difference between the scheduled start time and the step end time. For active steps, this is null.
StepSequence : int
The step's sequence in the pathway, starting with 1
NeedsManualStart : tinyint
Whether the step needs to be manually started by a user. This column is 1 if the step needs to be manually started, 0 otherwise.
WasManuallyStarted : tinyint
Whether the step was manually started by a user. This column contains 1 if the step was started manually, 0 otherwise.
WasStepActiveAtDiscontinuation : tinyint
Whether the step was the active step at the time the linked pathway instance was discontinued. If the pathway was not discontinued, this column is NULL. If the pathway was discontinued, this column contains 1 if the step was active when the pathway was discontinued, 0 otherwise.
PartitionDateKey : bigint
Links to DateDim
This column is for partitioning only and should not be used for reporting
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## PathwayInstanceVarianceCommentTextFact

**Extracted:** 2025-07-23 00:30:57
**Content Length:** 928 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Fact
Try It
PathwayInstanceVarianceCommentTextFact
The pathway instance variance comment text fact contains user-entered comments associated with variances documented on pathway outcomes. Each row represents a comment entered alongside a variance. For data loaded from Clarity, all variances documented on outcomes created from outcome templates used for clinical pathways are extracted. Change Type: Non-Snapshot
Columns
PathwayInstanceVarianceCommentTextKey : bigint
Surrogate key used to uniquely identify the record
PathwayInstanceVarianceKey : bigint
Links to PathwayInstanceVarianceFact
The outcome variance documentation this comment is for
CommentText : nvarchar(MAX)
The full text of the comment
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## PathwayInstanceVarianceFact

**Extracted:** 2025-07-23 00:31:07
**Content Length:** 1981 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Fact
Try It
PathwayInstanceVarianceFact
The pathway instance variance fact contains information on outcome variances documented during clinical pathway instances. Each row represents a variance documented on a target outcome. For data loaded from Clarity, all variances documented on outcomes created from outcome templates used for clinical pathways are extracted. Change Type: Non-Snapshot
Columns
PathwayInstanceVarianceKey : bigint
Surrogate key used to uniquely identify the record
PathwayInstanceOutcomeHistoryKey : bigint
Links to PathwayInstanceOutcomeHistoryFact
The pathway outcome contact the variance is documented on
PathwayInstanceOutcomeKey : bigint
Links to PathwayInstanceOutcomeFact
The pathway outcome the variance is documented on
EncounterKey : bigint
Links to EncounterFact
The patient encounter associated with this outcome variance
HospitalAdmissionKey : bigint
Links to HospitalAdmissionFact
The hospital admission encounter associated with this outcome variance
CreateUserDurableKey : bigint
Links to EmployeeDim
The user who documented the outcome variance
CreationDateKey : bigint
Links to DateDim
The date the outcome variance was created
CreationTimeOfDayKey : bigint
Links to TimeOfDayDim
The time of day the outcome variance was created
CreationInstant : datetime
The date and time the outcome variance was created
PathwayInstanceVarianceEpicId : nvarchar(50)
The Epic ID of the outcome variance (IVR) record
VarianceCategoryValue : int
The variance category value
VarianceCategoryName : nvarchar(300)
The name of the variance category
DisplayName : nvarchar(300)
The display name of the outcome variance
PathwayVarianceTypeKey : bigint
Links to PathwayVarianceTypeDim
The variance type the variance instance was created from
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## PathwayInstSectionSmrtGrpMappingFact

**Extracted:** 2025-07-23 00:31:16
**Content Length:** 1125 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Fact
Try It
PathwayInstSectionSmrtGrpMappingFact
The pathway instance section SmartGroup mapping fact contains information on the list of SmartGroup instances in pathway section records, including all SmartGroups that are nested inside SmartGroups. Each row represents a SmartGroup in or nested within other SmartGroups in a pathway section. For data loaded from Clarity, all SmartGroups in pathway sections are extracted. Change Type: Non-Snapshot
Columns
PathwayInstSectionSmrtGrpMappingKey : bigint
Surrogate key used to uniquely identify the record
PathwayInstanceSectionKey : bigint
Links to PathwayInstanceSectionFact
The pathway section containing SmartGroups
PathwayInstanceSmartGroupKey : bigint
Links to PathwayInstanceSmartGroupFact
The SmartGroup contained in a pathway section
PartitionDateKey : bigint
Links to DateDim
This column is for partitioning and should not be used for reporting
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## PathwayOutcomeTemplateDim

**Extracted:** 2025-07-23 00:31:26
**Content Length:** 722 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Dim
Try It
PathwayOutcomeTemplateDim
The pathway outcome template dimension contains information about pathway outcome templates. Change Type: Non-Snapshot
Columns
PathwayOutcomeTemplateKey : bigint
Surrogate key used to uniquely identify the record
OutcomeEvaluationBpaBuildKey : bigint
Links to PathwayOutcomeEvaluationBpaBuildDim
The BestPractice Advisory build record (LGL) used to suggest values for outcomes created from the outcome template
PathwayOutcomeTemplateEpicId : numeric(18,0)
The Epic ID of the pathway outcome template (IGT) record
Name : nvarchar(300)
The name of the pathway outcome template (IGT) record
```

---

## PathwayTemplateDim

**Extracted:** 2025-07-23 00:31:36
**Content Length:** 553 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Dim
Try It
PathwayTemplateDim
The pathway template dimension contains information about pathway templates. Change Type: Non-Snapshot
Columns
PathwayTemplateKey : bigint
Surrogate key used to uniquely identify the record
PathwayTemplateEpicId : numeric(18,0)
The Epic ID of the pathway template (PRL) record
Name : nvarchar(200)
The name of the pathway template (PRL) record
DisplayName : nvarchar(500)
The display name of the pathway template (PRL) record
```

---

## PathwayTemplateStepHistoryDim

**Extracted:** 2025-07-23 00:31:46
**Content Length:** 1318 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Dim
Try It
PathwayTemplateStepHistoryDim
The pathway template step history dimension contains information about pathway template step section contacts. Change Type: Non-Snapshot
Columns
PathwayTemplateStepHistoryKey : bigint
Surrogate key used to uniquely identify the record
PathwayTemplateStepEpicId : numeric(18,0)
The Epic ID of the pathway step/phase template record
VersionDate : date
The date the step version was created
VersionDateKey : bigint
Links to DateDim
The date the step version was created
DisplayName : nvarchar(300)
The display name of the pathway step template version
Duration : numeric(18,0)
The duration of the step
DurationUnitValue : int
The category value of the unit of time the step duration is measured in
DurationUnitName : nvarchar(300)
The name of the unit of time the step duration is measured in
IsManuallyStarted : tinyint
1/0 column that indicates whether the step needs to be manually started. This column returns 1 if the step needs to be manually started and 0 if it does not.
VersionStatusValue : int
The release status of the pathway template step version, in numeric form
VersionStatusName : nvarchar(300)
The release status of the pathway template step version, in string form
```

---

## PathwayVarianceTypeDim

**Extracted:** 2025-07-23 00:31:56
**Content Length:** 773 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Dim
Try It
PathwayVarianceTypeDim
The pathway variance type dimension contains information about types of variances that can be documented on clinical pathway outcomes. Change Type: Non-Snapshot
Columns
PathwayVarianceTypeKey : bigint
Surrogate key used to uniquely identify the record
PathwayVarianceTypeEpicId : nvarchar(50)
The Epic ID of the variance type
Name : nvarchar(100)
The name of the variance type
DisplayName : nvarchar(300)
The display name of the variance type
VarianceCategoryValue : int
The category value of the variance category used for this variance type
VarianceCategoryName : nvarchar(300)
The name of the variance category used for this variance type
```

---

## PatientAssignedStaticTaskDim

**Extracted:** 2025-07-23 00:32:06
**Content Length:** 721 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Dim
Try It
PatientAssignedStaticTaskDim
The patient-assigned static task dimension contains information about static tasks. Each row represents a static task. Change Type: Non-Snapshot
Columns
PatientAssignedStaticTaskKey : bigint
Surrogate key used to uniquely identify the record
FlowsheetRowComboKey : bigint
Links to PatientAssignedStaticTaskFloRowBridge
The flowsheet rows combination associated with the task
PatientAssignedStaticTaskEpicId : numeric(18,0)
Epic ID of the task. This column identifies LTR records.
Name : nvarchar(300)
Name of the static task record
Type : nvarchar(300)
Type of the static task record
```

---

## PatientAssignedStaticTaskFloRowBridge

**Extracted:** 2025-07-23 00:32:16
**Content Length:** 518 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class A Helper
Try It
PatientAssignedStaticTaskFloRowBridge
The patient-assigned task flowsheet row bridge contains information about flowsheet rows of each task. Each row represents a flowsheet row. Change Type: Non-Snapshot
Columns
PatientAssignedStaticTaskFloRowComboKey : bigint
Surrogate key used to uniquely identify the record
FlowsheetRowKey : bigint
Links to FlowsheetRowDim
One of the flowsheet rows in the combination
```

---

## PatientAssignedTaskFact

**Extracted:** 2025-07-23 00:32:26
**Content Length:** 3074 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class D Fact
Try It
PatientAssignedTaskFact
The patient-assigned task fact contains information about all tasks assigned to the patient, including completed and on-going tasks. These tasks may be part of a patient's care plan or individually assigned. They can be completed by the patient or their proxy on MyChart. Each row represents a task. Change Type: Non-Snapshot
Columns
PatientAssignedTaskKey : bigint
Surrogate key used to uniquely identify the record
PatientAssignedStaticTaskKey : bigint
Links to PatientAssignedStaticTaskDim
The static task record that was used to create the task
CarePlanKey : bigint
Links to CarePlanFact
The care plan the task belongs to
CarePlanTemplateKey : bigint
Links to CarePlanTemplateDim
The care plan template that was used to generate the care plan the task belongs to
PatientDurableKey : bigint
Links to PatientDim
The patient associated with the task
AssignDateKey : bigint
Links to DateDim
Date the task was assigned
DiscontinueDateKey : bigint
Links to DateDim
Date the task was discontinued
TaskStartDateKey : bigint
Links to DateDim
Date the first instance of this task was due
TaskEndDateKey : bigint
Links to DateDim
Date the task ended
QuestionnaireSeriesAssignmentKey : bigint
Links to SurveySeriesAssignmentFact
The survey assignment associated with the task
MedicationOrderKey : bigint
Links to MedicationOrderFact
The medication order associated with the task
AssignInstant : datetime
Date and time the task was assigned
DiscontinueInstant : datetime
Date and time the task was discontinued
TaskStartInstant : datetime
Date and time the first instance of this task was due
PatientAssignedTaskEpicId : nvarchar(50)
Epic ID of the task. This column identifies patient-assigned task (LTK) records.
Name : nvarchar(300)
Name of the task
Type : nvarchar(300)
Type of the task
OverrideFrequencyName : nvarchar(300)
Name of the override frequency associated with the task. When there is no override frequency, this column won't be populated but the actual frequency defaults to a once frequency.
ProblemName : nvarchar(300)
Name of the problem associated with the task
GoalName : nvarchar(300)
Name of the goal associated with the task
TaskTemplateName : nvarchar(300)
Name of the task template associated with the task
QuestionnaireTaskType : nvarchar(300)
Type of the questionnaire task associated with the task. For example, general questionnaire or symptom questionnaire.
EducationPointName : nvarchar(300)
Name of the education point associated with the task
EducationTitleName : nvarchar(300)
Name of the education title associated with the task
EducationTopicName : nvarchar(300)
Name of the education topic associated with the task
TelehealthReasonForVisit : nvarchar(300)
Reason for visit for telehealth visit associated with the task
LinkName : nvarchar(300)
Name of the link associated with the task
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## PatientAssignedTaskInstanceFact

**Extracted:** 2025-07-23 00:32:36
**Content Length:** 1721 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Fact
Try It
PatientAssignedTaskInstanceFact
The patient-assigned task instance fact contains information about patient-assigned task instances. Each row represents a single patient-assigned task instance. Change Type: Non-Snapshot
Columns
PatientAssignedTaskInstanceKey : bigint
Surrogate key used to uniquely identify the record
PatientAssignedTaskKey : bigint
Links to PatientAssignedTaskFact
Patient-assigned task associated with the patient-assigned task instance
PatientAssignedStaticTaskKey : bigint
Links to PatientAssignedStaticTaskDim
Patient-assigned static task associated with the patient-assigned task instance
CarePlanKey : bigint
Links to CarePlanFact
Care plan associated with the patient-assigned task instance
CarePlanTemplateKey : bigint
Links to CarePlanTemplateDim
Care plan template associated with the patient-assigned task instance
PatientDurableKey : bigint
Links to PatientDim
Patient associated with the patient-assigned task instance
TargetDateKey : bigint
Links to DateDim
Date on which the task instance was scheduled to be done
FirstCompletedInstant : datetime
Date and time at which the task instance was first completed
OutreachEpicID : numeric(18,0)
Epic ID of the outreach record. This column identifies outreach (RCH) records.
OutreachEpicContactNumber : int
Epic contact number of the outreach contact. This column identifies outreach (RCH) contact number.
PatientAssignedTaskInstanceState : nvarchar(300)
Completion state of the patient-assigned task instance
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## PatientAssignedTaskInstanceMappingFact

**Extracted:** 2025-07-23 00:32:46
**Content Length:** 1432 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Fact
Try It
PatientAssignedTaskInstanceMappingFact
The patient-assigned task mapping instance fact contains mappings between patient-assigned task instances and anchor events for their care plan. Each row represents a single patient-assigned task instance-to-event relationship. Only task instances which are part of an outpatient care plan will be included. Change Type: Non-Snapshot
Columns
PatientAssignedTaskInstanceMappingKey : bigint
Surrogate key used to uniquely identify the record
PatientAssignedTaskInstanceKey : bigint
Links to PatientAssignedTaskInstanceFact
Patient-assigned task instance associated with an anchor event
SurgicalCaseKey : bigint
Links to SurgicalCaseFact
Surgical case associated with the patient-assigned task instance
AdmissionKey : bigint
Links to HospitalAdmissionFact
Admission associated with the patient-assigned task instance
PregnancyKey : bigint
Links to PregnancyFact
Pregnancy associated with the patient-assigned task instance
TargetDateKey : bigint
Links to DateDim
The date on which patient-assigned task instance was targeted to be done
AnchorEventDateKey : bigint
Links to DateDim
The date of the anchor event associated with the patient-assigned task instance
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## PatientCommunicationDraftOwnerFact

**Extracted:** 2025-07-23 00:32:55
**Content Length:** 1115 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Fact
Try It
PatientCommunicationDraftOwnerFact
The patient communication draft owner fact stores communication details for a routed letter. It contains draft owner and routed letter information for letters created and routed using the communication management module. Change Type: Non-Snapshot
Columns
PatientCommunicationDraftOwnerKey : bigint
Surrogate key used to uniquely identify the record
PatientCommunicationManagementKey : bigint
Links to PatientCommunicationManagementFact
Patient communication associated with the draft owner
LetterCreationDateKey : bigint
Links to DateDim
The creation date of the letter
DraftOwnerEmployeeDurableKey : bigint
Links to EmployeeDim
User associated with the draft owner
DraftOwnerInBasketRegistryKey : bigint
Links to InBasketRegistryDim
In Basket Registry associated with the draft owner
RoutingStatus : nvarchar(300)
Send status for the recipient
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## PatientCommunicationManagementFact

**Extracted:** 2025-07-23 00:33:05
**Content Length:** 3335 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class D Fact
Try It
PatientCommunicationManagementFact
The patient communication management fact stores communication details for a patient. It contains recipient, sender, and communication information for communications created and sent using the communication management module. Change Type: Non-Snapshot
Columns
PatientCommunicationManagementKey : bigint
Surrogate key used to uniquely identify the record
ContactDateKey : bigint
Links to DateDim
The creation date of the patient encounter
PatientDurableKey : bigint
Links to PatientDim
The patient ID of the encounter where the communication instance is created
SenderDurableKey : bigint
Links to EmployeeDim
The sender of the communication instance
EncounterKey : bigint
Links to EncounterFact
Encounter associated with the communication
DepartmentKey : bigint
Links to DepartmentDim
Department associated with the communication
LetterAuthorEmployeeDurableKey : bigint
Links to EmployeeDim
Provider associated with the communication
ReceiverPatientDurableKey : bigint
Links to PatientDim
Patient associated with the receiver
ReceiverProviderDurableKey : bigint
Links to ProviderDim
Provider associated with the receiver
ReceiverDepartmentKey : bigint
Links to DepartmentDim
Department associated with the receiver
ReceiverEmployeeDurableKey : bigint
Links to EmployeeDim
User associated with the receiver
ReceiverInBasketRegistryKey : bigint
Links to InBasketRegistryDim
In Basket Registry associated with the receiver
ClinicalNoteKey : bigint
Links to ClinicalNoteFact
Note associated with the communication
CommunicationJobIdentifier : nvarchar(100)
The identifier for this communication. Identifiers are unique to a set of communications within a single encounter. When UsingCommunicationManagement = 1, this column can be used to determine when rows represent other recipients of the same communication.
LetterGenericNoteEpicId : nvarchar(50)
The ID of the generic note of the communication instance
LetterReportEpicId : nvarchar(50)
The ID of the report attached to the communication instance
LetterReportName : nvarchar(300)
The name of report attached to the communication instance
LetterTemplateEpicId : nvarchar(50)
The ID of the letter template attached to the communication instance
LetterTemplateName : nvarchar(300)
The name of letter template attached to the communication instance
ReceiverName : nvarchar(300)
The receiver of the communication instance
SendMethod : nvarchar(300)
The method which the communication instance has been sent with
Status : nvarchar(300)
The status of the communication instance
CommunicationVoidReason : nvarchar(300)
When Status is Voided, this contains the reason that a communication was voided.
LetterStatus : nvarchar(300)
Status of the communication
LetterReason : nvarchar(300)
Reason for the communication
TimeSent : datetime
The date and time the communication instance was sent (local time)
TimeSentUTC : datetime
The date and time the communication instance was sent (UTC time)
UsingCommunicationManagement : tinyint
1/0 column that indicates whether a communication or letter is attributed to the Patient Communication Load package. This column returns 1 for communications sent by the Communication Management module and 0 otherwise.
```

---

## PatientDim

**Extracted:** 2025-07-23 00:33:16
**Content Length:** 9565 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class F Dim
Try It
PatientDim
The patient dimension contains information about patients. Each row represents a patient record for a date range. This table contains both current and historical information. For current records, IsCurrent has a value of 1. Historical records contain information that is valid for the date range specified by the StartDate and EndDate columns. Change Type: Snapshot
Columns
PatientKey : bigint
Surrogate key used to uniquely identify the record
DurableKey : bigint
Durable key used to identify the record
ProblemComboKey : bigint
Links to DiagnosisBridge
All active problems for the patient. This column will be changed in the future to have no change tracking (Type 1).
PrimaryCareProviderKey : bigint
Links to ProviderDim
Primary care provider for the patient. This column will be changed in the future to have no change tracking (Type 1).
PrimaryCareProviderDurableKey : bigint
Links to ProviderDim
Primary care provider for the patient. This column will be changed in the future to have no change tracking (Type 1).
PatientRaceComboKey : bigint
Links to PatientRaceBridge
All patient races for the patient
PatientTypeComboKey : bigint
Links to PatientTypeBridge
All patient types for the patient
PreliminaryCauseOfDeathDiagnosisKey : bigint
Links to DiagnosisDim
Preliminary cause of death for the patient
ConfirmationStatusComboKey : bigint
Links to PatientConfirmationStatusBridge
All confirmation statuses for the patient
AddressKey : bigint
Links to AddressDim
Address for the patient's residence
AreaDeprivationIndexKey : bigint
Links to AreaDeprivationIndexFact
Area Deprivation Index ranking for the patient
PatientEpicId : nvarchar(50)
Epic ID of the patient. This column identifies patient (EPT) records.
ExternalIdBundleEpicId : nvarchar(50)
Epic ID of the external ID bundle. This column identifies requistion grouper (RQG) records
Name : nvarchar(200)
Full name of the patient
PreferredName : nvarchar(300)
Preferred name of the patient
FirstName : nvarchar(200)
First name of the patient
MiddleName : nvarchar(200)
Middle name of the patient
LastName : nvarchar(300)
Last name of the patient
Ssn : nvarchar(200)
Social Security number (SSN) for the patient
EnterpriseId : nvarchar(100)
Enterprise ID for the patient
PrimaryMrn : nvarchar(150)
Primary medical record number (MRN) for the patient. This column will be changed in the future to have no change tracking (Type 1).
PatientVerificationEmployeeDurableKey : bigint
Links to EmployeeDim
User who most recently verified the patient
Sex : nvarchar(300)
Sex of the patient. For Epic data, this is the legal sex of the patient as defined by a government body.
SexAssignedAtBirth : nvarchar(300)
Sex assigned at birth as determined by a medical or birthing professional
GenderIdentity : nvarchar(300)
Gender identity of the patient
PreferredLanguage : nvarchar(300)
Preferred language of the patient
Ethnicity : nvarchar(300)
Primary ethnicity of the patient
FirstRace : nvarchar(300)
First race associated with the patient
SecondRace : nvarchar(300)
Second race associated with the patient
ThirdRace : nvarchar(300)
Third race associated with the patient
FourthRace : nvarchar(300)
Fourth race associated with the patient
FifthRace : nvarchar(300)
Fifth race associated with the patient
BirthDate : date
Birth date of the patient
DeathDate : date
Death date of the patient
DeathInstant : datetime
Date and time of the patient's death
DeathLocation : nvarchar(300)
Location of the patient's death
Status : nvarchar(300)
Status of the patient. For Epic data, this column can contain Alive, Deceased, or other values.
Address : nvarchar(150)
Street address for the patient's residence. This column will be changed in the future to have no change tracking (Type 1). Use AddressHistoryFact for historical address information.
City : nvarchar(50)
City of the patient's residence. This column will be changed in the future to have no change tracking (Type 1). Use AddressHistoryFact for historical address information.
County : nvarchar(300)
County of the patient's residence. This column will be changed in the future to have no change tracking (Type 1). Use AddressHistoryFact for historical address information.
StateOrProvince : nvarchar(300)
State or province of the patient's residence. This column will be changed in the future to have no change tracking (Type 1). Use AddressHistoryFact for historical address information.
StateOrProvinceAbbreviation : nvarchar(300)
Abbreviated name of the state or province of the patient's residence. This column will be changed in the future to have no change tracking (Type 1).
Country : nvarchar(300)
Country of the patient's residence. This column will be changed in the future to have no change tracking (Type 1). Use AddressHistoryFact for historical address information.
PostalCodeKey : bigint
Links to PostalCodeDim
Postal code of the patient's residence
PostalCode : nvarchar(100)
Postal code for the patient's residence. This column will be changed in the future to have no change tracking (Type 1). Use AddressHistoryFact for historical address information.
CensusTractKey : bigint
Links to CensusTractDim
Census tract of the patient's residence
CensusBlockGroupFipsCode : nvarchar(50)
Census block group of the patient's residence
HomePhoneNumber : nvarchar(200)
Home phone number for the patient
WorkPhoneNumber : nvarchar(200)
Work phone number for the patient
EmailAddress : nvarchar(300)
Email address of the patient
SexualOrientation : nvarchar(300)
Sexual orientation of the patient. For Epic data, this column will store a value indicating "other" if multiple values are entered for sexual orientation.
MaritalStatus : nvarchar(300)
Marital status of the patient. This column will be changed in the future to have no change tracking (Type 1).
Religion : nvarchar(300)
Religion for the patient
CountryOfOrigin : nvarchar(300)
The country in which a patient was born
IndigenousStatus : nvarchar(300)
Indicates whether a patient is considered indigenous
CoiCensusTractKey : bigint
Links to CensusTractDim
Census tract of the patient's residence for use in determining their Child Opportunity Index scores.
SmokingStatus : nvarchar(300)
Smoking status of the patient. This column will be changed in the future to have no change tracking (Type 1).
PrimaryFinancialClass : nvarchar(300)
This column should no longer be used and will be removed in a future version. As a replacement, use CoverageDim.CoverageFinancialClass. This column will be changed in the future to have no change tracking (Type 1).
HighestLevelOfEducation : nvarchar(300)
Highest level of education completed by the patient
MyChartStatus : nvarchar(300)
MyChart status of the patient
LastImmunizationQueryInstantUtc : datetime
Instant (UTC) when external immunizations were last queried. This timestamp is updated after every registry query, regardless of whether there were actually any changes/additions/deletions in the patient's immunizations.
HasDialysisEpisode : tinyint
1/0 column that indicates whether the patient is a current or historic dialysis patient. This column returns 1 if the patient is or was ever on dialysis and 0 otherwise.
Restricted : tinyint
1/0 column that indicates whether the patient's records are limited to authorized personnel. This column returns 1 if the patient's records are limited to authorized personnel and 0 if the patient's records aren't limited to authorized personnel.
IsHistoricalPatient : tinyint
1/0 column that indicates whether the patient is a historical patient. A patient is considered a historical patient if the encounters associated with that patient are all defined as historical encounters in Epic. This column returns 1 if the patient is a historical patient and 0 if the patient is not a historical patient.
Test : tinyint
1/0 column that indicates whether the patient is a test patient. This column returns 1 if the patient is a test patient and 0 if the patient isn't a test patient.
IsValid : tinyint
1/0 column that indicates whether the patient is a valid patient. This column returns 1 if the patient is a valid patient and 0 if the patient is not valid. For Epic data, valid patients are active, not soft-deleted, not test patients, not temporary, not fetuses, not administrative research patients, and do not have a lab species specified.
DualStatusCode : nvarchar(50)
CMS Code that describes dual enrollment status
OriginalMedicareEntitlementReasonCode : nvarchar(50)
CMS code that describes the conditions surrounding a patient's initial enrollment with Medicare
MedicarePartAEntitlementStartDate : date
Earliest date where a member is entitled to Medicare Part A benefits
MedicarePartBEntitlementStartDate : date
Earliest date where a member is entitled to Medicare Part B benefits
MedicareHospiceEnrollmentStartDate : date
The date the member enrolled in Hospice
MedicareHospiceEnrollmentEndDate : date
The date the member ended Hospice
PrimaryCauseOfRenalFailureDiagnosisKey : bigint
Links to DiagnosisDim
The patient's primary cause of renal failure diagnosis
StartDate : date
The date of the execution that loaded a change to at least one column that has snapshot tracking enabled. For the first row loaded for the record this will be an arbitrary date in the past.
EndDate : date
The day before the next StartDate for the record. For the IsCurrent = 1 row, this will be an arbitrary date in the future.
IsCurrent : bit
1 indicates this is the most recent information, otherwise 0
```

---

## PatientInfectionFact

**Extracted:** 2025-07-23 00:33:26
**Content Length:** 2481 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Fact
Try It
PatientInfectionFact
The PatientInfectionFact contains information about infections documented on patients' charts. These are sometimes referred to as reasons for isolation. Each row represents an infection episode as documented in the chart. For Epic data, encounter-level infections will appear as a separate row for each encounter in which they were documented. Change Type: Non-Snapshot
Columns
PatientInfectionKey : bigint
Surrogate key used to uniquely identify the record
PatientDurableKey : bigint
Links to PatientDim
Patient with the infection
OnsetDateKey : bigint
Links to DateDim
The earliest date the patient is known to have the infection
OnsetDate : date
The earliest date the patient is known to have the infection
AddingEmployeeDurableKey : bigint
Links to EmployeeDim
Employee who added the infection to the patient's chart
AddingProviderDurableKey : bigint
Links to ProviderDim
Provider who added the infection to the patient's chart
ResolvingEmployeeDurableKey : bigint
Links to EmployeeDim
Employee who marked the infection as resolved
ResolvingProviderDurableKey : bigint
Links to ProviderDim
Provider who marked the infection as resolved
InfectionName : nvarchar(300)
Name of the infection
InfectionLevel : nvarchar(300)
Level at which the infection is documented. For Epic data, this can be for the patient (across encounters) or for a single encounter.
InfectionStatus : nvarchar(300)
Current status of the infection. For Epic data, this can be active, resolved, expired, or encounter ended.
SpecimenSource : nvarchar(300)
The specimen source associated with the infection
SpecimenType : nvarchar(300)
The specimen type associated with the infection
InfectionAddMethod : nvarchar(300)
The method used to add the infection
AddedInstant : datetime
The instant (UTC) the infection was added to the patient's chart
AddedInstantLocal : datetime
The instant (local) the infection was added to the patient's chart
ResolvedInstant : datetime
The instant (UTC) the infection was marked as resolved
ResolvedLocalDateKey : bigint
Links to DateDim
The date (local) the infection was marked as resolved
ResolvedLocalTimeOfDayKey : bigint
Links to TimeOfDayDim
The time (local) the infection was marked as resolved
ResolvedInstantLocal : datetime
The instant (local) the infection was marked as resolved
PatientInfectionEpicId : bigint
Epic infection record ID
```

---

## PatientInfectionIsolationMappingFact

**Extracted:** 2025-07-23 00:33:36
**Content Length:** 842 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Fact
Try It
PatientInfectionIsolationMappingFact
The patient infection isolation mapping fact maps linked infections and isolations. Change Type: Non-Snapshot
Columns
PatientInfectionIsolationMappingKey : bigint
Surrogate key used to uniquely identify the record
PatientIsolationKey : bigint
Links to PatientIsolationFact
The isolation that's linked to an infection
PatientInfectionKey : bigint
Links to PatientInfectionFact
The infection that's linked to an isolation
IsolationAddedDate : date
The date that the isolation was added
IsolationAddedDateKey : bigint
Links to DateDim
The date that the isolation was added
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## PatientIsolationFact

**Extracted:** 2025-07-23 00:33:46
**Content Length:** 2284 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Fact
Try It
PatientIsolationFact
The PatientIsolationFact contains information about isolations documented on patients' charts. These are the measures put in place to stop the spread of infection. Each row represents an isolation episode as documented in the chart. Change Type: Non-Snapshot
Columns
PatientIsolationKey : bigint
Surrogate key used to uniquely identify the record
PatientDurableKey : bigint
Links to PatientDim
Patient with the isolation
EncounterKey : bigint
Links to EncounterFact
Encounter associated with the isolation
IsolationName : nvarchar(300)
Name of the isolation
IsolationStatus : nvarchar(300)
Current status of the isolation. For Epic data, this can be active, removed, deleted, or encounter ended.
AddedDate : date
Date that the isolation was added to the patient's chart
AddedDateKey : bigint
Links to DateDim
Date that the isolation was added to the patient's chart
AddedInstantLocal : datetime
The instant (local) the isolation was added to the patient's chart
AddedInstantUtc : datetime
The instant (UTC) the isolation was added to the patient's chart
AddingEmployeeDurableKey : bigint
Links to EmployeeDim
Employee who added the isolation to the patient's chart
AddingProviderDurableKey : bigint
Links to ProviderDim
Provider who added the isolation to the patient's chart
IsolationAddMethod : nvarchar(300)
The method used to add the isolation
RemovedDate : date
Date that the isolation was removed from the patient's chart
RemovedDateKey : bigint
Links to DateDim
Date that the isolation was removed from the patient's chart
RemovedInstantLocal : datetime
The instant (local) the isolation was removed
RemovedInstantUtc : datetime
The instant (UTC) the isolation was removed
RemovingEmployeeDurableKey : bigint
Links to EmployeeDim
Employee who marked the isolation as removed
RemovingProviderDurableKey : bigint
Links to ProviderDim
Provider who marked the isolation as removed
PatientIsolationEpicId : bigint
Epic isolation record ID
IsolationOrderKey : bigint
Links to ProcedureOrderFact
Order used to add the isolation
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## PatientLocationEventFact

**Extracted:** 2025-07-23 00:33:56
**Content Length:** 2304 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Fact
Try It
PatientLocationEventFact
The patient location event fact contains information about where a patient was located at a given point in time during an encounter. For hospital stays, each row represents a patient's location for a given period of time. For outpatient encounters, each row represents a department. For Epic data, this fact includes information from admissions, transfers, patient location updates, and outpatient encounters. Change Type: Non-Snapshot
Columns
PatientLocationEventKey : bigint
Surrogate key used to uniquely identify the record
PatientKey : bigint
Links to PatientDim
Patient for the event
PatientDurableKey : bigint
Links to PatientDim
Patient for the event
EncounterKey : bigint
Links to EncounterFact
Encounter associated with the event
LocationKey : bigint
Links to DepartmentDim
Location associated with the patient location event. For Epic data, this is the Bed or Patient Location Facility in which the patient was physically located.
CensusLocationKey : bigint
Links to DepartmentDim
Census location associated with the patient location event. For Epic data, this is the Bed in which the patient was bedded.
DepartmentKey : bigint
Links to DepartmentDim
Department or Patient Location Facility associated with the patient location event. For Epic data, this is the Department or Patient Location Facility in which the patient was physically located.
StartDateKey : bigint
Links to DateDim
Start date of the event
StartTimeOfDayKey : bigint
Links to TimeOfDayDim
Start time of day of the event
EndDateKey : bigint
Links to DateDim
End date of the event
EndTimeOfDayKey : bigint
Links to TimeOfDayDim
End time of day of the event
EventType : nvarchar(300)
The event that caused the patient to arrive in the location
StartInstant : datetime
Start date and time of the event
EndInstant : datetime
End date and time of the event
InHouse : tinyint
1/0 column that indicates whether the patient was in the hospital. This column returns 1 if the patient location event took place in the hospital and 0 if the patient was on a leave of absence.
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## PatientRaceBridge

**Extracted:** 2025-07-23 00:34:05
**Content Length:** 493 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class A Helper
Try It
PatientRaceBridge
The patient race bridge contains unique combinations of races associated with patients. Each row represents a patient race in a combination. Change Type: Non-Snapshot
Columns
PatientRaceComboKey : bigint
Combination key used to identify a unique combination of patient races
PatientRaceKey : bigint
Links to CategoryDim
One of the patient races in the combination
```

---

## PatientTypeBridge

**Extracted:** 2025-07-23 00:34:15
**Content Length:** 497 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class A Helper
Try It
PatientTypeBridge
The patient type bridge contains unique combinations of types associated with patients. Each row represents a patient type in a combination. Change Type: Non-Snapshot
Columns
PatientTypeComboKey : bigint
Surrogate key used to uniquely identify a unique combination of patient types
CategoryKey : bigint
Links to CategoryDim
One of the patient types in the combination
```

---

## ProspectivePatientAttributeBridge

**Extracted:** 2025-07-23 00:34:25
**Content Length:** 575 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class A Helper
Try It
ProspectivePatientAttributeBridge
The prospective patient attribute bridge contains unique combinations of attributes associated with prospective patients. Each row represents a prospective patient attribute in a combination. Change Type: Non-Snapshot
Columns
ProspectivePatientAttributeComboKey : bigint
Surrogate key used to uniquely identify the record
AttributeCategoryKey : bigint
Links to CategoryDim
ID lookup from CategoryIdType, CategoryId to CategoryDim
```

---

## ProspectivePatientDim

**Extracted:** 2025-07-23 00:34:35
**Content Length:** 4215 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class D Dim
Try It
ProspectivePatientDim
The prospective patient dimension contains information about individuals who may or may not currently be patients. Each row represents a single prospective patient. Note that if a link to patient has been established, demographic data from PatientDim should be considered the source of truth. Change Type: Non-Snapshot
Columns
ProspectivePatientKey : bigint
Surrogate key used to uniquely identify the record
PatientKey : bigint
Links to PatientDim
Existing patient associated with the prospective patient
PatientDurableKey : bigint
Links to PatientDim
Existing patient associated with the prospective patient
ProspectivePatientAttributeComboKey : bigint
Links to ProspectivePatientAttributeBridge
ID lookup from ProspectivePatientAttributeComboType, ProspectivePatientAttributeComboId, to ProspectivePatientAttributeBridge
ProspectivePatientRaceComboKey : bigint
Links to ProspectivePatientRaceBridge
ID lookup from ProspectivePatientRaceComboIdType, ProspectivePatientRaceComboId to ProspectivePatientRaceBridge
AddressKey : bigint
Links to AddressDim
Address for the prospective patient's residence
ProspectivePatientEpicId : nvarchar(50)
Epic ID of the prospective patient. This column identifies prospective patient (RQG) records.
Name : nvarchar(250)
Name of the prospective patient
Email : nvarchar(250)
Email address of the prospective patient
BirthDate : date
Birth date of the prospective patient
Sex : nvarchar(300)
Sex of the prospective patient. For Epic data, this is the legal sex of the prospective patient as defined by a government body.
SexAssignedAtBirth : nvarchar(300)
Sex assigned at birth as determined by a medical or birthing professional
GenderIdentity : nvarchar(300)
Gender identity of the prospective patient
NationalIdentifier : nvarchar(200)
National Identifier for the prospective patient
Ethnicity : nvarchar(300)
Primary ethnicity of the prospective patient
PreferredLanguage : nvarchar(300)
Preferred language of the prospective patient
Address : nvarchar(150)
Street address of the prospective patient's residence
City : nvarchar(50)
City of the prospective patient's residence
StateOrProvince : nvarchar(300)
State or Province of the prospective patient's residence
StateOrProvinceAbbreviation : nvarchar(300)
Abbreviated name of the state or province of the prospective patient's residence
PostalCodeKey : bigint
Links to PostalCodeDim
Postal code lookup for the prospective patient's residence
PostalCode : nvarchar(100)
Postal code of the prospective patient's residence
County : nvarchar(300)
County of the prospective patient's residence
Country : nvarchar(300)
Country of the prospective patient's residence
HomePhoneNumber : nvarchar(200)
Home phone number of the prospective patient
MobilePhoneNumber : nvarchar(200)
Mobile phone number of the prospective patient
WorkPhoneNumber : nvarchar(200)
Work phone number of the prospective patient
CreationSource : nvarchar(300)
Creation source of the prospective patient
CreationDate : date
Date the prospective patient record was created. For Epic data, the date the prospective patient was first added to Chronicles.
ConfirmedPatientDate : date
Date the link between this prospective patient and an existing patient record was confirmed
ConfirmedPatient : tinyint
1/0 value that indicates if the link between this prospective patient and an existing patient record has been confirmed. This column returns 1 if the link has been confirmed and 0 if it has not been confirmed.
CreationFormName : nvarchar(300)
The name of the prospective patient form from which the prospective patient was created.
CreationUtmSource : nvarchar(300)
Query string value for utm_source parameter of the prospect form
CreationUtmMedium : nvarchar(300)
Query string value for utm_medium parameter of the prospect form
CreationUtmCampaign : nvarchar(300)
Query string value for utm_campaign parameter of the prospect form
CreationUtmContent : nvarchar(300)
Query string value for utm_content parameter of the prospect form
CreationUtmTerm : nvarchar(300)
Query string value for utm_term parameter of the prospect form
```

---

## ProspectivePatientExternalIdFact

**Extracted:** 2025-07-23 00:34:45
**Content Length:** 1017 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Fact
Try It
ProspectivePatientExternalIdFact
The prospective patient external ID fact table contains information about the external IDs associated with prospective patients. Each row represents a prospective patient per ID type. Change Type: Non-Snapshot
Columns
ProspectivePatientMappingKey : bigint
Surrogate key used to uniquely identify the record
ProspectivePatientKey : bigint
Links to ProspectivePatientDim
Link to the associated prospective patient
EffectiveFromDateKey : bigint
Links to DateDim
Link to the date the ID is effective from
EffectiveToDateKey : bigint
Links to DateDim
Link to the date the ID is effective to
ExternalIdType : nvarchar(300)
The ID type of the external ID for the prospective patient
ExternalId : nvarchar(100)
The external ID for the prospective patient
EffectiveFromDate : date
The date which this ID is effective from
EffectiveToDate : date
The date which this ID is effective to
```

---

## ProspectivePatientRaceBridge

**Extracted:** 2025-07-23 00:34:55
**Content Length:** 545 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class A Helper
Try It
ProspectivePatientRaceBridge
The prospective patient race bridge contains unique combinations of races associated with prospective patients. Each row represents a prospective patient race in a combination. Change Type: Non-Snapshot
Columns
ProspectivePatientRaceComboKey : bigint
Surrogate key used to uniquely identify the record
RaceCategoryKey : bigint
Links to CategoryDim
ID lookup from CategoryIdType, CategoryId to CategoryDim
```

---

## PayerCalculatedOutcomeFact

**Extracted:** 2025-07-23 00:35:05
**Content Length:** 6953 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class D Fact
Try It
PayerCalculatedOutcomeFact
The payer calculated outcome fact includes payer calculated outcomes for quality measures. Each row represents a payer calculated outcome for a patient or for an episode for a patient, for a program, measurement period, measure, summary date, and product line. Change Type: Non-Snapshot
Columns
PayerCalculatedOutcomeKey : bigint
Surrogate key used to uniquely identify the record
PatientDurableKey : bigint
Links to PatientDim
The patient associated with the outcome
PerformancePeriodStartDateKey : bigint
Links to DateDim
The start date of the performance period for the outcome
PerformancePeriodEndDateKey : bigint
Links to DateDim
The end date of the performance period for the outcome
ContractKey : bigint
Links to ContractDim
The program associated with the outcome
OutcomeSourceKey : bigint
Links to SourceDim
The source of the outcome
SummaryDateKey : bigint
Links to DateDim
The end date of the summary period associated with the outcome
CalculatedDateKey : bigint
Links to DateDim
The date when the outcome was calculated
EffectiveStartDateKey : bigint
Links to DateDim
The start of an effective period an outcome can be attributed to. For outcomes with a calculated date on or after the performance period, this column will only be populated for the outcome with the most recent calculated date.
EffectiveEndDateKey : bigint
Links to DateDim
The end of an effective period an outcome can be attributed to. This date is derived from the EffectiveStartDate of other outcomes for the same patient, performance period, source organization, program, measure, event date, measure period pattern, line of business, and benefit plan. When there are no additional following outcomes or the outcomes EffectiveStartDate is greater than or equal to the performance period end date, the EffectiveEndDate will not be populated.
EventDateKey : bigint
Links to DateDim
The date of the event that qualifies for the outcome
ClinicalDueDateKey : bigint
Links to DateDim
The next date that a clinical service that satisfies the measure is due based on data from the primary sources
LastRelevantServiceDateKey : bigint
Links to DateDim
The last date a measure-satisfying service was completed using data from the primary sources
IndexStartDateKey : bigint
Links to DateDim
Index prescription start date relevant to an adherence measure
FirstMedicationMostRecentFillDateKey : bigint
Links to DateDim
Most recent fill date of the first medication relevant to an adherence measure
SecondMedicationMostRecentFillDateKey : bigint
Links to DateDim
Most recent fill date of the second medication relevant to an adherence measure
ThirdMedicationMostRecentFillDateKey : bigint
Links to DateDim
Most recent fill date of the third medication relevant to an adherence measure
LastImpactableDateKey : bigint
Links to DateDim
The last date on which a patient can still meet the measure's target adherence rate by the end of the measurement year
OutcomeEpicId : numeric(18,0)
The ID of the calculated outcome. This column identifies registry data (RDI) records.
Numerator : numeric(18,4)
The numerator for the outcome using data from the primary sources
Denominator : numeric(18,4)
The denominator for the outcome using data from the primary sources
DenominatorException : numeric(18,4)
Amount excluded from the denominator based on the optional exclusion criteria when the numerator is 0 for the measure. Use this column for reporting the amount excluded by the optional exclusion criteria.
DenominatorExclusion : numeric(18,4)
Amount excluded from the denominator based on the required exclusion criteria. Use this column for reporting the amount excluded by the required exclusion criteria.
Outcome : nvarchar(300)
The outcome value. This column is a single value that says whether the patient or event is in the numerator for the measure, in the denominator only, or excluded from the measure.
PeriodPattern : nvarchar(300)
The period pattern of the outcome
SourceMeasureEpicId : numeric(18,0)
The analytics aggregate measure associated with the outcome. This column identifies quality measure (LQM) records.
SourceMeasureName : nvarchar(200)
The name of the analytics aggregate measure associated with the outcome
SourceMeasureTitle : nvarchar(300)
The user-facing title of the analytics aggregate measure associated with the outcome
SourceMeasureCareGapType : nvarchar(300)
The care gap type of the analytics aggregate measure associated with the outcome
SourceMeasureOutcomeVersion : nvarchar(50)
The version of the analytics aggregate measure associated with the outcome
EquivalentCqlMeasureEpicId : nvarchar(50)
The equivalent CQL measure associated with the outcome. This column identifies quality measure (LQM) records.
LineOfBusiness : nvarchar(100)
The line of business associated with the quality measure outcome
BenefitPlan : nvarchar(100)
The benefit plan associated with the quality measure outcome
ProportionOfDaysCovered : numeric(18,4)
Proportion of days covered by medications during the treatment period relevant to an adherence measure
FirstMedicationName : nvarchar(200)
Name of the first medication relevant to an adherence measure
FirstMedicationCodeType : nvarchar(50)
Code type of the first medication relevant to an adherence measure
FirstMedicationCode : nvarchar(300)
Code of the first medication relevant to an adherence measure
FirstMedicationMostRecentDaysSupply : smallint
Days supply of the most recent dispense of the first medication relevant to an adherence measure
SecondMedicationName : nvarchar(200)
Name of the second medication relevant to an adherence measure
SecondMedicationCodeType : nvarchar(50)
Code type of the second medication relevant to an adherence measure
SecondMedicationCode : nvarchar(300)
Code of the second medication relevant to an adherence measure
SecondMedicationMostRecentDaysSupply : smallint
Days supply of the most recent dispense of the second medication relevant to an adherence measure
ThirdMedicationName : nvarchar(200)
Name of the third medication relevant to an adherence measure
ThirdMedicationCodeType : nvarchar(50)
Code type of the third medication relevant to an adherence measure
ThirdMedicationCode : nvarchar(300)
Code of the third medication relevant to an adherence measure
ThirdMedicationMostRecentDaysSupply : smallint
Days supply of the most recent dispense of the third medication relevant to an adherence measure
HasOnlyOneFill : tinyint
1/0 column that indicates whether the patient has only received one of the fills needed to meet the measure's denominator criteria
IsImpactable : tinyint
1/0 column that indicates whether the patient can still meet the measure's target adherence rate by the end of the measurement year
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## PerfusionRecordFact

**Extracted:** 2025-07-23 00:35:15
**Content Length:** 5065 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class E Fact
Try It
PerfusionRecordFact
The perfusion record fact contains information about perfusion records. Each row represents a perfusion record. Change Type: Non-Snapshot
Columns
PerfusionRecordKey : bigint
Surrogate key used to uniquely identify the record
PerfusionRecordEpicId : nvarchar(50)
Epic ID of the perfusion record. This column identifies summary block (HSB) records.
AnesthesiaRecordKey : bigint
Links to AnesthesiaRecordFact
Anesthesia record associated with the perfusion record
AnesthesiaRegistryMetricKey : bigint
Links to AnesthesiaRegistryMetricFact
For Epic data, the registry record containing data for Anesthesia registry metrics associated with the perfusion record
PatientDurableKey : bigint
Links to PatientDim
Patient associated with the perfusion record
SurgicalCaseKey : bigint
Links to SurgicalCaseFact
Primary surgical case associated with the perfusion record
PerfusionDayOfSurgeryEncounterKey : bigint
Links to EncounterFact
The encounter containing day of surgery data for the perfusion record. For Epic data, this is the type 52 encounter.
PerfusionNoteEncounterKey : bigint
Links to EncounterFact
The encounter containing note data and other data that applies to the entire perfusion episode. For Epic data, this is the type 53 encounter.
HospitalEncounterKey : bigint
Links to EncounterFact
The encounter associated with the hospital admission or hospital outpatient visit with which the procedure is associated
PrimarySurgeonDurableKey : bigint
Links to ProviderDim
The primary surgeon for the record
DepartmentKey : bigint
Links to DepartmentDim
The department in which the perfusion procedure was performed
OperatingRoomKey : bigint
Links to DepartmentDim
The operating room in which the procedure took place
LogLocationKey : bigint
Links to DepartmentDim
The log location of the primary log associated with the perfusion record
PerfusionDateKey : bigint
Links to DateDim
The date of the perfusion record
PrimaryProcedureName : nvarchar(500)
The primary procedure name associated with the perfusion record. This can contain the surgical procedure, procedure appointment, or ad hoc procedure.
SurgicalService : nvarchar(300)
The surgical service of the primary procedure associated with the perfusion record
PerfusionStartInstant : datetime
The date and time perfusion started for the perfusion record
PerfusionStartTimeOfDayKey : bigint
Links to TimeOfDayDim
The time of perfusion start for the associated perfusion record
PerfusionStartDateKey : bigint
Links to DateDim
The date of perfusion start for the associated perfusion record
PerfusionEndInstant : datetime
The date and time perfusion stopped for the associated perfusion record
PerfusionEndTimeOfDayKey : bigint
Links to TimeOfDayDim
The time perfusion stopped for the associated perfusion record
PerfusionEndDateKey : bigint
Links to DateDim
The date perfusion stopped for the associated perfusion record
AdmissionTimeOfDayKey : bigint
Links to TimeOfDayDim
The time of the patient admission associated with the perfusion record
AdmissionDateKey : bigint
Links to DateDim
The date of the admission associated with the perfusion record
DischargeInstant : datetime
The date and time of the discharge for the associated perfusion record
DischargeTimeOfDayKey : bigint
Links to TimeOfDayDim
The time of the discharge associated with the perfusion record
DischargeDateKey : bigint
Links to DateDim
The date of the discharge associated with the perfusion record
InRoomInstant : datetime
The date and time the patient was in the room for the associated perfusion record
InRoomTimeOfDayKey : bigint
Links to TimeOfDayDim
The time the patient was in the room for the associated perfusion record
InRoomDateKey : bigint
Links to DateDim
The date the patient was in the room for the associated perfusion record
OutOfRoomInstant : datetime
The date and time the patient was out of the room for the associated perfusion record
OutOfRoomTimeOfDayKey : bigint
Links to TimeOfDayDim
The time the patient was out of the room for the associated perfusion record
OutOfRoomDateKey : bigint
Links to DateDim
The date the patient was out of the room for the associated perfusion record
ProcedureStartInstant : datetime
The date and time the procedure began for the associated perfusion record
ProcedureStartTimeOfDayKey : bigint
Links to TimeOfDayDim
The time the procedure began for the associated perfusion record
ProcedureStartDateKey : bigint
Links to DateDim
The date the procedure began for the associated perfusion record
ProcedureEndInstant : datetime
The date and time the procedure ended for the associated perfusion record
ProcedureEndTimeOfDayKey : bigint
Links to TimeOfDayDim
The time the procedure ended for the associated perfusion record
ProcedureEndDateKey : bigint
Links to DateDim
The date the procedure ended for the associated perfusion record
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## PharmacyDim

**Extracted:** 2025-07-23 00:35:25
**Content Length:** 1781 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Dim
Try It
PharmacyDim
The pharmacy dimension contains information about pharmacies. Each row represents a pharmacy. Change Type: Non-Snapshot
Columns
PharmacyKey : bigint
Surrogate key used to uniquely identify the record
PharmacyEpicId : numeric(18,0)
Epic ID of the pharmacy. This column identifies pharmacy (PHR) records.
Name : nvarchar(300)
Name of the pharmacy
Type : nvarchar(300)
Type of the pharmacy. For Epic data, this column can contain Internal, External, or Integrated.
PhysicalType : nvarchar(300)
Physical type of the pharmacy. For Epic data, this column can contain Standard, Automated Dispensing Station, Robotic Dispensing System, Automated Prescription Filling System, or other values.
PharmacyProviderDurableKey : bigint
Links to ProviderDim
Provider for the National Provider Identifier (NPI) associated with the pharmacy
Npi : nvarchar(50)
National Provider Identifier (NPI) for the pharmacy
StateId : nvarchar(200)
State-specific ID for the pharmacy
DeaNumber : nvarchar(50)
Drug Enforcement Administration (DEA) number for the pharmacy
NcpdpNumber : nvarchar(200)
National Council for Prescription Drug Programs (NCPDP) number for the pharmacy
FacilityAdministeredMedicationsSupported : tinyint
1/0 column that indicates whether the pharmacy supports facility administered medications. This column returns 1 if the pharmacy supports facility administered medications and 0 if the pharmacy doesn't support facility administered medications.
PrescriptionsSupported : tinyint
1/0 column that indicates whether the pharmacy supports prescriptions. This column returns 1 if the pharmacy supports prescriptions and 0 if the pharmacy doesn't support prescriptions.
```

---

## PlaceOfServiceDim

**Extracted:** 2025-07-23 00:35:35
**Content Length:** 1774 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Dim
Try It
PlaceOfServiceDim
The place of service dimension contains information about billing places of service. Each row represents a billing place of service. For Epic data, the dimension contains data for facility locations, places of service, service areas, regions, and medical groups. Change Type: Non-Snapshot
Columns
PlaceOfServiceKey : bigint
Surrogate key used to uniquely identify the record
ProviderDurableKey : bigint
Links to ProviderDim
Provider associated with the place of service
PlaceOfServiceEpicId : nvarchar(50)
Epic ID of the place of service. This column identifies place of service (EAF) records.
Name : nvarchar(200)
Name of the place of service
Type : nvarchar(300)
Place of service type. For Epic data, this includes Urgent Care Facility, Inpatient Hospital, Outpatient Hospital, or other values.
FacilityType : nvarchar(300)
Facility type for the place of service. For Epic data, this column can contain Location, Place of Service, Service Area, Region, or Group.
LocationCcn : nvarchar(300)
Centers for Medicare and Medicaid Services Certification Number (CCN) for the location
PhoneNumber : nvarchar(50)
Phone number for the place of service
Address : nvarchar(250)
Street address for the place of service
City : nvarchar(100)
City for the place of service
StateOrProvince : nvarchar(300)
State or province for the place of service
PostalCode : nvarchar(50)
Postal code for the place of service
County : nvarchar(300)
County for the place of service
Country : nvarchar(300)
Country for the place of service
EmailAddress : nvarchar(300)
Email address for the place of service
WebAddress : nvarchar(300)
Web address (URL) for the place of service
```

---

## PostalCodeDim

**Extracted:** 2025-07-23 00:35:45
**Content Length:** 381 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Dim
Try It
PostalCodeDim
The postal code dimension contains information about postal codes. Each row represents a 5 digit US postal code. Change Type: Non-Snapshot
Columns
PostalCodeKey : bigint
Surrogate key used to uniquely identify the record
PostalCode : nvarchar(50)
Postal code
```

---

## PregnancyFact

**Extracted:** 2025-07-23 00:35:56
**Content Length:** 9037 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class D Fact
Try It
PregnancyFact
The pregnancy fact contains information about pregnancies. Each row represents a patient's pregnancy. Change Type: Non-Snapshot
Columns
PregnancyKey : bigint
Surrogate key used to uniquely identify the record
PatientKey : bigint
Links to PatientDim
Patient who is pregnant
PatientDurableKey : bigint
Links to PatientDim
Patient who is pregnant
EpisodeKey : bigint
Links to EpisodeFact
Pregnancy episode
WorkingEstimatedDateOfDeliveryKey : bigint
Links to DateDim
Working estimated date of delivery for the pregnancy
EpisodeStartDateKey : bigint
Links to DateDim
Date the clinician created the pregnancy episode. Note that this is not the date the pregnancy began. For historical pregnancy episodes, this is the day that the pregnancy was added to the patient's obstetric history.
EpisodeEndDateKey : bigint
Links to DateDim
Date the clinician resolved the pregnancy episode. Note that this is not the delivery date. For historical pregnancy episodes, this does not have a value.
LastDeliveryDateKey : bigint
Links to DateDim
Date of the last delivery for the pregnancy. If a fuzzy date was documented, this is the earliest date that the fuzzy date could represent. The LastDeliveryDateConfidentToYear, LastDeliveryDateConfidentToMonth, LastDeliveryDateConfidentToDate, and LastDeliveryDateConfidentToTime columns indicate whether a fuzzy date was documented and at what level of confidence.
LastDeliveryTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day of the last delivery for the pregnancy. If the last delivery date is any less confident than to the time, this is the UTC representation of midnight in the time zone of the encounter that the delivery was documented.
LastDeliveryInstant : datetime
Date and time of the last delivery for the pregnancy. If a fuzzy date was documented, this is the earliest date and time that the fuzzy date could represent. The LastDeliveryDateConfidentToYear, LastDeliveryDateConfidentToMonth, LastDeliveryDateConfidentToDate, and LastDeliveryDateConfidentToTime columns indicate whether a fuzzy date was documented and at what level of confidence.
PregnancyEstimatedStartDateKey : bigint
Links to DateDim
Estimated start date for the pregnancy. If an estimated date of delivery is documented, this will be 280 days prior to that date. Otherwise if a gestational age for the last delivery is documented and the last delivery date is at least confident to the month, this will be the last delivery date subtracted by the gestational age. Otherwise if the pregnancy is not historical, this will be the episode start date. Otherwise this will be NULL.
PregnancyEstimatedStartDate : date
Estimated start date for the pregnancy. If an estimated date of delivery is documented, this will be 280 days prior to that date. Otherwise if a gestational age for the last delivery is documented and the last delivery date is at least confident to the month, this will be the last delivery date subtracted by the gestational age. Otherwise if the pregnancy is not historical, this will be the episode start date. Otherwise this will be NULL.
PregnancyEstimatedEndDate : date
The estimated end date for the pregnancy. This is the last delivery date if it is confident to at least the month. Otherwise, this is the episode end date if it is less than 28 days after the working estimated delivery date (EDD) or before the working EDD or within 308 days of the episode start if the working EDD is not documented. Otherwise, this is the working EDD plus 28 days if it is documented. Otherwise, this is the episode start date plus 308 days if it is not a historical pregnancy. Otherwise, this is NULL.
PregnancyOutcomeComboKey : bigint
Links to PregnancyOutcomeBridge
All outcome types associated with this pregnancy
PregnancyEpicId : numeric(18,0)
Epic ID of the pregnancy. This column identifies pregnancy (HSB) records.
SourceKey : bigint
Links to SourceDim
Source of the data in this line
PregravidWeight : numeric(18,1)
Patient's weight prior to pregnancy in ounces
PregravidBmi : numeric(18,1)
Patient's body mass index prior to pregnancy
NumberOfFetuses : tinyint
Total number of fetuses involved in this pregnancy
PregnancyGravidaCount : tinyint
Gravida count as of this pregnancy. This pregnancy is included in the count.
PregnancyParaCount : tinyint
Para count as of this pregnancy. This pregnancy is not included in the count.
PregnancyPriorFetalDemiseCount : tinyint
Fetal demise count as of this pregnancy. Abortion outcomes are not included in this count. This pregnancy's outcomes are not included in the count.
LastDeliveryGestationalAge : int
Gestational age in days for the last delivery for the pregnancy, based on OB History documentation.
PriorCesarean : tinyint
1/0 column that indicates whether the patient had a cesarean delivery prior to this pregnancy. This column returns 1 if they have a prior outcome in their obstetric history with a cesarean delivery method, 0 if none of their prior outcomes have a cesarean delivery method, and NULL if they have no prior outcomes.
IsHistorical : tinyint
1/0 column that indicates whether this pregnancy is a historical pregnancy documented directly in the patient's obstetric history. This column returns 1 if the pregnancy is historical, and 0 if it is a regular pregnancy.
LastDeliveryDateConfidentToYear : tinyint
1/0 column that indicates if the last delivery date and time are only confident to the year. This column returns 1 if they are only confident to the year, 0 if they are confident to another level, and NULL if no delivery date was found.
LastDeliveryDateConfidentToMonth : tinyint
1/0 column that indicates if the last delivery date and time are only confident to the month. This column returns 1 if they are only confident to the month, 0 if they are confident to another level, and NULL if no delivery date was found.
LastDeliveryDateConfidentToDate : tinyint
1/0 column that indicates if the last delivery date and time are only confident to the date. This column returns 1 if they are only confident to the date, 0 if they are confident to another level, and NULL if no delivery date was found.
LastDeliveryDateConfidentToTime : tinyint
1/0 column that indicates if the last delivery date and time are fully confident. This column returns 1 if they are fully confident, 0 if they are confident to another level, and NULL if no delivery date was found.
HadCesarean : tinyint
1/0 column that indicates whether the patient had a cesarean delivery on this pregnancy. This column returns 1 if they have a delivery linked to this pregnancy with a cesarean delivery method, and 0 otherwise.
HadFetalDemise : tinyint
1/0 column that indicates whether the patient had a non-abortion fetal demise on this pregnancy. This column returns 1 if they have a non-abortion birth linked to this pregnancy with a fetal demise living status, and 0 otherwise.
HadNeonatalDemise : tinyint
1/0 column that indicates whether the patient had a neonatal demise on a birth linked to this pregnancy. This column returns 1 when there is not a last known living status and there is a recorded date of death that is not greater than 28 days after the date of birth. Otherwise, this column returns 0 when there is not a last known living status. Otherwise, this column returns 1 when the last known living status is 3-Neonatal Demise. Otherwise, this column returns 1 when the living status at birth is not 1-Yes, 4-FetalDemise, or in the Fetal Demise configuration mapping and matches the last known living status. Otherwise, this column returns 1 when the last known living status is in the Neonatal Demise configuration mapping. Otherwise, this column returns 0 when the living status at birth is 4-Fetal Demise or in the Fetal Demise configuration mapping. Otherwise, this column returns 1 when the recorded date of death is not greater than 28 days after the date of birth. Otherwise, this column returns 0.
HasDelivery : tinyint
1/0 column that indicates whether a delivery occurred for this pregnancy. This column returns 1 if the pregnancy episode is resolved, there is a delivery record with a birth instant linked to the pregnancy, or there is a delivery record that is included in OB History linked to the pregnancy. It returns 0 otherwise.
HasDeliverySummary : tinyint
1/0 column that indicates whether a delivery for this pregnancy was documented in the Delivery Summary. This column returns 1 if there is a non-historical delivery record with a birth instant linked to the pregnancy, or there is a non-historical delivery record that is included in OB History linked to the pregnancy. It returns 0 otherwise. Delivery records created for fetal charts or created with the Link to Mom navigator section must have the Delivery Summary signed for this column to return 1.
PlannedAdoptionType : nvarchar(300)
Planned adoption type for the pregnancy
PlannedDeliveryMethod : nvarchar(300)
Planned delivery method for the pregnancy
```

---

## PregnancyOutcomeBridge

**Extracted:** 2025-07-23 00:36:05
**Content Length:** 507 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class A Helper
Try It
PregnancyOutcomeBridge
The pregnancy outcome bridge contains unique combinations of outcome types associated with pregnancies. Each row represents an outcome type in a combination. Change Type: Non-Snapshot
Columns
PregnancyOutcomeComboKey : bigint
Combination key used to identify a unique combination of outcomes
CategoryKey : bigint
Links to CategoryDim
One of the outcomes in the combination
```

---

## PrescriptionTransferFact

**Extracted:** 2025-07-23 00:36:15
**Content Length:** 1615 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Fact
Try It
PrescriptionTransferFact
The prescription transfer fact contains information about prescription transfers. Each row represents a prescription transfer. Change Type: Non-Snapshot
Columns
PrescriptionTransferKey : bigint
Surrogate key used to uniquely identify the record
PatientKey : bigint
Links to PatientDim
Patient associated with the order getting transferred
PatientDurableKey : bigint
Links to PatientDim
Patient associated with the order getting transferred
MedicationOrderKey : bigint
Links to MedicationOrderFact
Parent order associated with the prescription transfer
SourcePharmacyKey : bigint
Links to PharmacyDim
Pharmacy where the prescription was transferred from
DestinationPharmacyKey : bigint
Links to PharmacyDim
Pharmacy where the prescription was transferred to
TransferDateKey : bigint
Links to DateDim
Date of the prescription transfer
TransferTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day the prescription was transferred
TransferInstant : datetime
Date and time the prescription was transferred
SourcePharmacyNameFreeText : nvarchar(300)
Free text name of the pharmacy where the prescription was transferred from. For Epic data, this is populated when the pharmacy the prescription was transferred from does not exist in the system.
DestinationPharmacyNameFreeText : nvarchar(300)
Free text name of the pharmacy where the prescription was transferred to. For Epic data, this is populated when the pharmacy the prescription was transferred to does not exist in the system.
```

---

## ProblemListFact

**Extracted:** 2025-07-23 00:36:25
**Content Length:** 2323 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Fact
Try It
ProblemListFact
The problem list fact contains information about problem list diagnoses attributed to patients. Each row represents a diagnosis on the problem list for a patient. Change Type: Non-Snapshot
Columns
ProblemListKey : bigint
Surrogate key used to uniquely identify the record
DiagnosisKey : bigint
Links to DiagnosisDim
Diagnosis associated with the problem list entry
PatientKey : bigint
Links to PatientDim
Patient associated with the problem list entry
PatientDurableKey : bigint
Links to PatientDim
Patient associated with the problem list entry
ProblemListEpicId : nvarchar(50)
Epic ID of the problem. This column identifies problem list diagnosis (LPL) records.
EncounterKey : bigint
Links to EncounterFact
Encounter on which the problem list diagnosis was added to the patient.
DepartmentKey : bigint
Links to DepartmentDim
Department for the encounter on which the problem list diagnosis was added to the patient.
StartDateKey : bigint
Links to DateDim
Problem list diagnosis noted date. For Epic data, the value is the noted date when available, otherwise the date of entry.
EndDateKey : bigint
Links to DateDim
Problem list resolved date
DocumentedByEmployeeKey : bigint
Links to EmployeeDim
Employee who added the problem list diagnosis to the patient
DocumentedByEmployeeDurableKey : bigint
Links to EmployeeDim
Employee who added the problem list diagnosis to the patient
Status : nvarchar(300)
Status of the problem list diagnosis. For Epic data, this column can contain Active or Resolved statuses.
PresentOnAdmission : nvarchar(300)
Indicates the present on admission status for the problem list diagnosis, as of the encounter on which the problem list diagnosis was added to the patient.
HospitalDiagnosis : tinyint
1/0 column that indicates whether the problem list diagnosis was a hospital diagnosis, as of the encounter on which the problem list diagnosis was added to the patient. This column returns 1 if the diagnosis was a hospital diagnosis on that encounter and 0 if the diagnosis wasn't a hospital diagnosis.
Chronic : tinyint
1/0 column that indicates whether the diagnosis is chronic. This column returns 1 if the diagnosis is chronic and 0 if the diagnosis isn't chronic.
```

---

## ProcedureDim

**Extracted:** 2025-07-23 00:36:35
**Content Length:** 3900 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Dim
Try It
ProcedureDim
The procedure dimension contains information about procedures. Each row represents a procedure for a date range. This table contains both current and historical information. For current records, IsCurrent has a value of 1. Historical records contain information that is valid for the date range specified by the StartDate and EndDate columns. For Epic data, this dimension includes only charge procedures. Change Type: Snapshot
Columns
ProcedureKey : bigint
Surrogate key used to uniquely identify the record
DurableKey : bigint
Durable key used to identify the record
ProcedureEpicId : numeric(18,0)
Epic ID of the procedure. This column identifies procedure (EAP) records.
ClinicalClassificationSoftwareGroupEpicId : nvarchar(50)
Epic ID of the procedure group based on the Clinical Classification Software (CCS) from the Healthcare Cost and Utilization Project (HCUP) sponsored by the Agency for Healthcare Research and Quality (AHRQ). This column is only populated for surgical procedures.
Name : nvarchar(300)
Name of the procedure
ShortName : nvarchar(300)
Shortened name of the procedure
PatientFriendlyName : nvarchar(4000)
Patient friendly name of the procedure
Category : nvarchar(200)
Category associated with the procedure
ProcedureCategoryEpicId : nvarchar(300)
Epic ID of the procedure category.
Code : nvarchar(50)
Code associated with the procedure
CodeSet : nvarchar(300)
Code set associated with the procedure
RevenueCode : nvarchar(50)
Revenue code associated with the procedure
CptCode : nvarchar(50)
Current Procedural Terminology (CPT) code associated with the procedure. This column will be changed in the future to have no change tracking (Type 1).
HcpcsCode : nvarchar(50)
Healthcare Common Procedure Coding System (HCPCS) code associated with the procedure. This column will be changed in the future to have no change tracking (Type 1).
AdaCode : nvarchar(50)
American Dental Association (ADA) code associated with the procedure. This column will be changed in the future to have no change tracking (Type 1).
AsaCode : nvarchar(50)
American Society of Anesthesiologists (ASA) code associated with the procedure. This column will be changed in the future to have no change tracking (Type 1).
OtherCodeType : nvarchar(300)
Code type associated with the procedure for code types other than CPT, HCPCS, ADA, or ASA codes. This column will be changed in the future to have no change tracking (Type 1).
OtherCode : nvarchar(50)
Code associated with the procedure for code types other than CPT, HCPCS, ADA, or ASA codes. This column will be changed in the future to have no change tracking (Type 1).
Level : nvarchar(300)
Level of the procedure. For Epic data, this column is only populated for surgical procedures.
ResultReportType : nvarchar(300)
The type of procedure defined by result report type within a procedure or procedure category.
ScreeningProgramProcedureType : nvarchar(300)
The type of screening program procedure. This can be either screening, diagnostic, or biopsy.
IsLungScreeningProgramProcedure : tinyint
1/0 Column that indicates whether the procedure is in the Lung Screening program. The column returns 1 if the study is in the program and 0 if it is not.
StandardizedModalityType : nvarchar(300)
The standardized modality type associated with either the procedure itself or the procedure category it is a part of.
StartDate : date
The date of the execution that loaded a change to at least one column that has snapshot tracking enabled. For the first row loaded for the record this will be an arbitrary date in the past.
EndDate : date
The day before the next StartDate for the record. For the IsCurrent = 1 row, this will be an arbitrary date in the future.
IsCurrent : bit
1 indicates this is the most recent information, otherwise 0
```

---

## ProcedureEventFact

**Extracted:** 2025-07-23 00:36:46
**Content Length:** 4286 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class D Fact
Try It
ProcedureEventFact
The procedure event fact contains information about procedures attributed to patients. Each row represents an event attributing a procedure to a patient. Change Type: Non-Snapshot
Columns
ProcedureEventKey : bigint
Surrogate key used to uniquely identify the record
ProcedureKey : bigint
Links to ProcedureDim
Procedure for the event
ProcedureDurableKey : bigint
Links to ProcedureDim
Procedure for the event
PatientKey : bigint
Links to PatientDim
Patient for the event
PatientDurableKey : bigint
Links to PatientDim
Patient for the event
EncounterKey : bigint
Links to EncounterFact
Encounter associated with the procedure event
ProcedureStartDateKey : bigint
Links to DateDim
Start date of the procedure event
ProcedureStartTimeOfDayKey : bigint
Links to TimeOfDayDim
Start time of the procedure event
ProcedureEndDateKey : bigint
Links to DateDim
End date of the procedure event
ProcedureEndTimeOfDayKey : bigint
Links to TimeOfDayDim
End time of the procedure event
PerformingProviderKey : bigint
Links to ProviderDim
Performing provider associated with the procedure event
PerformingProviderDurableKey : bigint
Links to ProviderDim
Performing provider associated with the procedure event
BillingProviderDurableKey : bigint
Links to ProviderDim
Billing provider associated with the procedure event
AnesthesiaProviderKey : bigint
Links to ProviderDim
Anesthesia provider associated with the procedure event
AnesthesiaProviderDurableKey : bigint
Links to ProviderDim
Anesthesia provider associated with the procedure event
ReferringProviderKey : bigint
Links to ProviderDim
Referring provider associated with the procedure event
ReferringProviderDurableKey : bigint
Links to ProviderDim
Referring provider associated with the procedure event
SourceKey : bigint
Links to SourceDim
Source type for the procedure event. If there are multiple sources, use SourceComboKey.
SourceComboKey : bigint
Links to ProcedureEventSourceBridge
Sources of the procedure event. Use this instead of SourceKey if there are multiple sources.
TerminologyComboKey : bigint
Links to ProcedureEventTerminologyBridge
Terminology concepts associated with a procedure event.
FirstModifierConceptKey : bigint
Links to TerminologyConceptDim
The terminology concept that represents the first modifier associated with the procedure event
FirstModifierCategoryKey : bigint
Links to CategoryDim
The category corresponding to the first modifier for the procedure event
Type : nvarchar(300)
Type of procedure event
FirstModifier : nvarchar(50)
First modifier associated with the procedure event
SecondModifier : nvarchar(50)
Second modifier associated with the procedure event
ThirdModifier : nvarchar(50)
Third modifier associated with the procedure event
FourthModifier : nvarchar(50)
Fourth modifier associated with the procedure event
ProcedureCodeSet : nvarchar(300)
Code set associated with the procedure event
ProcedureCode : nvarchar(50)
Code associated with the procedure event
Quantity : numeric(18,5)
Number of times the procedure was performed
ProcedureStartInstant : datetime
Start date and time of the procedure event
ProcedureEndInstant : datetime
End date and time of the procedure event
IsUnsuccessfulAttempt : tinyint
1/0 column that indicates whether the procedure was marked as an unsuccessful attempt. This column returns 1 if the procedure attempt was evaluated as unsuccessful and should be excluded from clinical decision support. Otherwise, it returns 0.
IsOrderFromOutsideSource : tinyint
1/0 column that indicates whether the entire order, including the request for testing and its results, is from an outside source. This column returns 1 if the order was from an outside source and 0 otherwise.
IsEpicLabOrder : tinyint
1/0 column that indicates whether the order (ORD) is a lab order from the Epic medical record. This column returns 1 if the order is a lab order from the Epic medical record and 0 otherwise.
ExtSupplementalEncounterKey : bigint
Links to ExtSupplementalEncounterFact
The external supplemental encounter for the event
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## ProcedureMappingDim

**Extracted:** 2025-07-23 00:36:55
**Content Length:** 1509 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Dim
Try It
ProcedureMappingDim
The procedure mapping dimension contains information about mappings from procedures to standard concepts. Each row represents a procedure mapped to a standard concept for a defined standard, such as CPT®, HCPCS, ICD-10-PCS, SNOMED CT®, or other similar values. As a snapshot (Type-2) table, all non-current rows represent an audit trail of when a mapping has changed in Caboodle. Change Type: Snapshot
Columns
ProcedureMappingKey : bigint
Surrogate key used to uniquely identify the record
DurableKey : bigint
Durable key used to identify the record
ProcedureDurableKey : bigint
Links to ProcedureDim
The entity in ProcedureDim associated with the standard concept. This column will be changed in the future to have no change tracking (Type 1).
TerminologyConceptKey : bigint
Links to TerminologyConceptDim
Standard concept in TerminologyConceptDim associated with the procedure. This column will be changed in the future to have no change tracking (Type 1).
StartDate : date
The date of the execution that loaded a change to at least one column that has snapshot tracking enabled. For the first row loaded for the record this will be an arbitrary date in the past.
EndDate : date
The day before the next StartDate for the record. For the IsCurrent = 1 row, this will be an arbitrary date in the future.
IsCurrent : bit
1 indicates this is the most recent information, otherwise 0
```

---

## ProcedureOrderFact

**Extracted:** 2025-07-23 00:37:06
**Content Length:** 6095 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class E Fact
Try It
ProcedureOrderFact
The procedure order fact contains information about procedure orders. Each row represents an order. For Epic data, this fact excludes most child orders (child orders related to Anesthesia procedures are included), pended orders, orders created through an interface, and historical orders. Change Type: Non-Snapshot
Columns
ProcedureOrderKey : bigint
Surrogate key used to uniquely identify the record
PatientKey : bigint
Links to PatientDim
Patient for whom the order was placed
PatientDurableKey : bigint
Links to PatientDim
Patient for whom the order was placed
EncounterKey : bigint
Links to EncounterFact
Encounter associated with the order
DepartmentKey : bigint
Links to DepartmentDim
Department associated with the order
ProcedureKey : bigint
Links to ProcedureDim
Procedure ordered
ProcedureDurableKey : bigint
Links to ProcedureDim
Procedure ordered
AssociatedDiagnosisComboKey : bigint
Links to DiagnosisBridge
All diagnoses associated with the order
OriginalOrderProviderDurableKey : bigint
Links to ProviderDim
The ordering provider at the time the order was signed or sign & held
OrderedByEmployeeKey : bigint
Links to EmployeeDim
Employee who placed the order
OrderedByEmployeeDurableKey : bigint
Links to EmployeeDim
Employee who placed the order
OrderedByProviderKey : bigint
Links to ProviderDim
Provider who is responsible for the order. For Epic data, this column is rarely populated for outpatient orders.
OrderedByProviderDurableKey : bigint
Links to ProviderDim
Provider who is responsible for the order. For Epic data, this column is rarely populated for outpatient orders.
OriginalAuthorizingProviderDurableKey : bigint
Links to ProviderDim
The authorizing provider at the time the order was signed or sign & held
AuthorizedByProviderKey : bigint
Links to ProviderDim
Provider who authorized the order
AuthorizedByProviderDurableKey : bigint
Links to ProviderDim
Provider who authorized the order
LabDurableKey : bigint
Links to LabDim
The lab or resulting agency for this order
ResultsFollowUpEncounterKey : bigint
Links to EncounterFact
The first patient encounter that followed up with the patient about the results of this order
OrderedDateKey : bigint
Links to DateDim
Date the order was placed
OrderedTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day the order was placed
ResultsFollowUpEncounterDateKey : bigint
Links to DateDim
The date that the first results follow up encounter occurred
DiscontinuedDateKey : bigint
Links to DateDim
The date the order was discontinued or canceled
SpecimenReceivedDateKey : bigint
Links to DateDim
The date the specimen used in the procedure was received
FirstFinalDateKey : bigint
Links to DateDim
The earliest date that finalized results for this order were received (as opposed to edited results)
ProcedureOrderEpicId : numeric(18,0)
Epic ID of the procedure order. This column identifies order (ORD) records.
Type : nvarchar(300)
Order type
Class : nvarchar(300)
Order class
Mode : nvarchar(300)
Ordering mode. For Epic data, this column can contain Outpatient or Inpatient.
Source : nvarchar(300)
Order source. For Epic data, this column can contain Admission Navigator, Clinician Orders, Order Entry, or other values.
Status : nvarchar(300)
Order status
StandingStatus : nvarchar(50)
Standing status of the order. For Epic data, this column can contain Normal, Standing or Future.
OrderPriority : nvarchar(300)
Priority associated with the procedure order
SetSource : nvarchar(500)
Name of the order set that the procedure order originated from
Cpoe : tinyint
1/0 column that indicates whether the order was submitted using computerized physician order entry (CPOE), based on comparing the ordering provider to the ordering user. This column returns 1 if the order was submitted using CPOE and 0 if the order wasn't submitted using CPOE.
Verbal : tinyint
1/0 column that indicates whether the procedure order is a verbal order. This column returns 1 if the procedure order is a verbal order and 0 if the procedure order isn't a verbal order.
RequiresCosign : tinyint
1/0 column that indicates whether the procedure order requires a cosign. This column returns 1 if the procedure order requires a cosign and 0 if the procedure order doesn't require a cosign.
Cosigned : tinyint
1/0 column that indicates whether the procedure order was cosigned. This column returns 1 if the procedure order was cosigned and 0 if the procedure order wasn't cosigned. For Epic data, this column is only populated for standard (non-verbal) orders.
VerbalSigned : tinyint
1/0 column that indicates whether the procedure order was verbally signed. This column returns 1 if the procedure order was verbally signed and 0 if the procedure order wasn't verbally signed.
Protocol : tinyint
1/0 column that indicates whether the procedure order is a protocol order. This column returns 1 if the procedure order is a protocol order and 0 if the procedure order isn't a protocol order.
IsUnsuccessfulAttempt : tinyint
1/0 column that indicates whether the procedure was unsuccessfully attempted. This column returns 1 if the procedure attempt was evaluated as unsuccessful and should be excluded from clinical decision support. Otherwise, it returns 0.
IsFromOutsideSource : tinyint
1/0 column that indicates whether the entire order, including the request for testing and its results, is from an outside source. This column returns 1 if the order was from an outside source and 0 otherwise.
IsChildOrder : tinyint
1/0 column that indicates whether the order is a child order. This column returns 1 if the procedure order is a child order and 0 if the procedure order is not a child order.
VerbalOrderMode : nvarchar(300)
Verbal order mode for the order
PathwayInstanceSmartGroupKey : bigint
Links to PathwayInstanceSmartGroupFact
The SmartGroup in a clinical pathway instance for this order
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## ProcedureTerminologyBridge

**Extracted:** 2025-07-23 00:37:15
**Content Length:** 562 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class A Helper
Try It
ProcedureTerminologyBridge
The procedure terminology bridge contains unique combinations of procedure codes associated with other records. Each row represents a procedure code in a combination. Change Type: Non-Snapshot
Columns
ProcedureTerminologyComboKey : bigint
Combination key used to identify a unique combination of procedure codes
ProcedureTerminologyKey : bigint
Links to ProcedureTerminologyDim
One of the procedure codes in the combination
```

---

## ProcedureTerminologyConceptDim

**Extracted:** 2025-07-23 00:37:25
**Content Length:** 1885 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Dim
Try It
ProcedureTerminologyConceptDim
The procedure terminology concept dimension contains information about concepts used for mapping and grouping. Concepts are external identifiers used to map to a record, a value, or another concept. Each row represents a standard value for a defined procedure standard. Change Type: Non-Snapshot
Columns
ProcedureTerminologyConceptKey : bigint
Surrogate key used to uniquely identify the record
TerminologyConceptKey : bigint
Links to TerminologyConceptDim
Concept associated with the procedure
StandardId : nvarchar(50)
ID of the standard
CodeType : nvarchar(300)
Code type of the procedure terminology concept
Code : nvarchar(50)
Code of the procedure terminology concept
Name : nvarchar(300)
Name of the procedure terminology concept
ClinicalClassificationSoftwareGroupName : nvarchar(300)
Procedure group based on the Clinical Classification Software (CCS) from the Healthcare Cost and Utilization Project (HCUP) sponsored by the Agency for Healthcare Research and Quality (AHRQ)
ClinicalClassificationLevelOne : nvarchar(300)
First level of procedure group based on the Clinical Classification Software (CCS) from the Healthcare Cost and Utilization Project (HCUP) sponsored by the Agency for Healthcare Research and Quality (AHRQ)
ClinicalClassificationLevelTwo : nvarchar(300)
Second level of procedure group based on the Clinical Classification Software (CCS) from the Healthcare Cost and Utilization Project (HCUP) sponsored by the Agency for Healthcare Research and Quality (AHRQ)
ClinicalClassificationLevelThree : nvarchar(300)
Third level of procedure group based on the Clinical Classification Software (CCS) from the Healthcare Cost and Utilization Project (HCUP) sponsored by the Agency for Healthcare Research and Quality (AHRQ)
```

---

## ProcedureTerminologyDim

**Extracted:** 2025-07-23 00:37:35
**Content Length:** 716 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Dim
Try It
ProcedureTerminologyDim
ProcedureTerminologyDim will be deprecated in a future release. Instead, you should use ProcedureMappingDim. The procedure terminology dimension contains information about procedure codes. Each row represents a code. For Epic data, the dimension includes ICD-9-CM codes, ICD-10-PCS codes, and CPT codes. Change Type: Non-Snapshot
Columns
ProcedureTerminologyKey : bigint
Surrogate key used to uniquely identify the record
Code : nvarchar(300)
Code associated with the procedure
Name : nvarchar(300)
Name of the procedure
CodeSet : nvarchar(300)
Code set associated with the procedure
```

---

## ProviderBridge

**Extracted:** 2025-07-23 00:37:45
**Content Length:** 466 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Dim
Try It
ProviderBridge
The provider bridge contains unique combinations of providers associated with other records. Each row represents a provider in a combination. Change Type: Non-Snapshot
Columns
ProviderComboKey : bigint
Combination key used to identify a set of providers
ProviderDurableKey : bigint
Links to ProviderDim
One of the providers in the combination
```

---

## ProviderDepartmentMappingFact

**Extracted:** 2025-07-23 00:37:55
**Content Length:** 596 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Fact
Try It
ProviderDepartmentMappingFact
The provider department mapping fact contains information about departments for providers. Each row represents a provider and one of their associated departments. Change Type: Non-Snapshot
Columns
ProviderDepartmentMappingKey : bigint
Surrogate key used to uniquely identify the record
ProviderDurableKey : bigint
Links to ProviderDim
Provider associated with a department
DepartmentKey : bigint
Links to DepartmentDim
Department associated with a provider
```

---

## ProviderDim

**Extracted:** 2025-07-23 00:38:05
**Content Length:** 7607 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class E Dim
Try It
ProviderDim
The provider dimension contains information about providers. Each row represents a provider for a date range. This table contains both current and historical information. For current records, IsCurrent has a value of 1. Historical records contain information that is valid for the date range specified by the StartDate and EndDate columns. Change Type: Snapshot
Columns
ProviderKey : bigint
Surrogate key used to uniquely identify the record
DurableKey : bigint
Durable key used to identify the record
EmployeeDurableKey : bigint
Links to EmployeeDim
The employee associated with this provider
ProviderEpicId : nvarchar(50)
Epic ID of the provider. This column identifies provider (SER) records.
EmployeeEpicId : nvarchar(50)
Epic ID of the employee. This column identifies user (EMP) records.
Name : nvarchar(200)
Name of the provider
Upin : nvarchar(50)
Unique Physician Identification Number (UPIN) for the provider
Npi : nvarchar(50)
National Provider Identifier (NPI) for the provider
DeaNumber : nvarchar(50)
The Drug Enforcement Administration (DEA) number for the provider
MedicareIdNumber : nvarchar(50)
Medicare ID number for the provider
MedicaidIdNumber : nvarchar(50)
Medicaid ID number for the provider
Sex : nvarchar(300)
Sex of the provider
PrimaryDepartmentEpicId : nvarchar(50)
Epic ID of the primary department with which the provider is associated. This column will be changed in the future to have no change tracking (Type 1).
PrimaryDepartment : nvarchar(300)
Name of the primary department with which the provider is associated. This column will be changed in the future to have no change tracking (Type 1).
PrimaryLocation : nvarchar(200)
Name of the location associated with the primary department with which the provider is associated. This column will be changed in the future to have no change tracking (Type 1).
PrimaryServiceArea : nvarchar(200)
Name of the service area associated with the primary department with which the provider is associated. This column will be changed in the future to have no change tracking (Type 1).
Type : nvarchar(300)
Type of the provider. This column will be changed in the future to have no change tracking (Type 1).
ClinicianTitle : nvarchar(300)
Clinician title for the provider. This column will be changed in the future to have no change tracking (Type 1).
PrimarySpecialty : nvarchar(300)
Primary specialty of the provider. This column will be changed in the future to have no change tracking (Type 1). Use ProviderSpecialtyHistoryDim for historical specialty information.
PrimarySpecialtyTaxonomyCode : nvarchar(50)
Taxonomy code for the provider's primary specialty. This column will be changed in the future to have no change tracking (Type 1).
PrimarySpecialtyTaxonomyName : nvarchar(300)
Name of the taxonomy code for the provider's primary specialty. This column will be changed in the future to have no change tracking (Type 1).
PrimarySpecialtyCmsCode : nvarchar(50)
Centers for Medicare & Medicaid Services (CMS) code for the provider's primary specialty. This column will be changed in the future to have no change tracking (Type 1).
PrimarySpecialtyCmsName : nvarchar(300)
Name of the Centers for Medicare & Medicaid Services (CMS) code for the provider's primary specialty. This column will be changed in the future to have no change tracking (Type 1).
SecondSpecialty : nvarchar(300)
Second specialty of the provider. This column will be changed in the future to have no change tracking (Type 1). Use ProviderSpecialtyHistoryDim for historical specialty information.
ThirdSpecialty : nvarchar(300)
Third specialty of the provider. This column will be changed in the future to have no change tracking (Type 1). Use ProviderSpecialtyHistoryDim for historical specialty information.
FourthSpecialty : nvarchar(300)
Fourth specialty of the provider. This column will be changed in the future to have no change tracking (Type 1). Use ProviderSpecialtyHistoryDim for historical specialty information.
FifthSpecialty : nvarchar(300)
Fifth specialty of the provider. This column will be changed in the future to have no change tracking (Type 1). Use ProviderSpecialtyHistoryDim for historical specialty information.
SixthSpecialty : nvarchar(300)
Sixth specialty of the provider. This column will be changed in the future to have no change tracking (Type 1). Use ProviderSpecialtyHistoryDim for historical specialty information.
OfficePhoneNumber : nvarchar(50)
Office phone number for the provider
Email : nvarchar(150)
Email address for the provider
OfficeAddress : nvarchar(150)
Street address for the provider's office. This column will be changed in the future to have no change tracking (Type 1).
OfficeCity : nvarchar(150)
City of the provider's office. This column will be changed in the future to have no change tracking (Type 1).
OfficeCounty : nvarchar(300)
County of the provider's office. This column will be changed in the future to have no change tracking (Type 1).
OfficeStateOrProvince : nvarchar(300)
State or province of the provider's office. This column will be changed in the future to have no change tracking (Type 1).
OfficeStateOrProvinceAbbreviation : nvarchar(300)
Abbreviated state or province of the provider's office. This column will be changed in the future to have no change tracking (Type 1).
OfficeCountry : nvarchar(300)
Country of the provider's office. This column will be changed in the future to have no change tracking (Type 1).
OfficePostalCode : nvarchar(100)
Postal code of the provider's office. This column will be changed in the future to have no change tracking (Type 1).
EntityType : nvarchar(50)
Type of entity the provider is. Acceptable values are "Individual", "Group", or "Organization".
AnesthesiaProviderGroup : nvarchar(300)
Anesthesia provider group to which the provider belongs, if applicable. This column will be changed in the future to have no change tracking (Type 1).
ProviderDirectoryEpicId : nvarchar(50)
Epic ID of the provider directory data record. This column identifies third-party directory data (TDD) records.
Resident : tinyint
1/0 column that indicates whether the provider is a resident. This column returns 1 if the provider is a resident and 0 if the provider isn't a resident. This column will be changed in the future to have no change tracking (Type 1).
Generic : tinyint
1/0 column that indicates whether the provider is marked as generic. This column returns 1 if the provider was marked as generic and 0 if the provider wasn't marked as generic.
IsMedicationAuthorizingProvider : tinyint
1/0 column that indicates whether the provider can authorize medications. This column returns 1 if the provider can authorize medications and 0 if the provider can't authorize medications.
PrimaryReadingSpecialty : nvarchar(300)
Primary reading specialty for this provider, which is used for imaging physicians.
IsActiveForScheduling : tinyint
1/0 column that indicates whether the provider is active for scheduling
IsHonorRollProvider : tinyint
1/0 column that indicates whether the provider is measured in Honor Roll
StartDate : date
The date of the execution that loaded a change to at least one column that has snapshot tracking enabled. For the first row loaded for the record this will be an arbitrary date in the past.
EndDate : date
The day before the next StartDate for the record. For the IsCurrent = 1 row, this will be an arbitrary date in the future.
IsCurrent : bit
1 indicates this is the most recent information, otherwise 0
```

---

## ProviderSpecialtyHistoryDim

**Extracted:** 2025-07-23 00:38:15
**Content Length:** 1250 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class C Dim
Try It
ProviderSpecialtyHistoryDim
The provider specialty history dimension contains information about provider specialties history. Each row represents a provider specialty for a date range. Change Type: Non-Snapshot
Columns
ProviderSpecialtyHistoryKey : bigint
Surrogate key used to uniquely identify the record
ProviderDurableKey : bigint
Links to ProviderDim
Provider associated with the specialty
Specialty : nvarchar(300)
Specialty of the provider
SpecialtyAbbreviation : nvarchar(300)
Abbreviation for the specialty of the provider
SpecialtyNumber : int
For data from Epic, this is the line number of the given Specialty. Sometimes the first specialty is considered the primary specialty.
SpecialtyEpicCategoryId : nvarchar(50)
Recognized code for the specialty of the provider
EffectiveStartDateKey : bigint
Links to DateDim
Earliest date the specialty was active for the provider
EffectiveStartDate : date
Earliest date the specialty was active for the provider
EffectiveEndDateKey : bigint
Links to DateDim
Latest date the specialty was active for the provider
EffectiveEndDate : date
Latest date the specialty was active for the provider
```

---

## PumpAdministrationFact

**Extracted:** 2025-07-23 00:38:25
**Content Length:** 8337 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class F Fact
Try It
PumpAdministrationFact
The pump administration fact contains medication administrations by pumps. Each row represents one pump administration attempt. For Epic data, this table only includes administrations done with pump integration. Change Type: Non-Snapshot
Columns
PumpAdministrationKey : bigint
Surrogate key used to uniquely identify the record
MedicationOrderKey : bigint
Links to MedicationOrderFact
Medication order associated with the administration
PatientDurableKey : bigint
Links to PatientDim
Patient associated with the administration
DepartmentKey : bigint
Links to DepartmentDim
Department the patient was in when the administration began
EmployeeDurableKey : bigint
Links to EmployeeDim
User who administered the medication
AdministrationDateKey : bigint
Links to DateDim
Date the order details were sent to the pump
AdministrationTimeOfDayKey : bigint
Links to TimeOfDayDim
Time of day the order details were sent to the pump
MarMedicationKey : bigint
Links to MedicationDim
Medication as specified on the MAR
PumpMedicationKey : bigint
Links to MedicationDim
Medication as specified on the pump
PumpKey : bigint
Links to PumpDim
Pump device associated with the administration
AdministrationInstantLocal : datetime
Date and time of day the order details were sent to the pump
MarMedicationRate : numeric(18,4)
Medication rate as specified on the MAR
PumpMedicationRate : numeric(18,4)
Medication rate from the pump
MarMedicationRateUnit : nvarchar(300)
Unit for the medication rate as specified on the MAR
PumpMedicationRateUnit : nvarchar(300)
Unit for the medication rate from the pump
HasMedicationRateDifference : tinyint
1/0 column that indicates if the rate is different between the MAR and the pump. This column returns 1 if the rate or rate unit is different and 0 otherwise.
MarMedicationDose : numeric(18,4)
Medication dose as specified on the MAR
PumpMedicationDose : numeric(18,4)
Medication dose as specified on the pump
MarMedicationDoseUnit : nvarchar(300)
Unit for the medication dose as specified on the MAR
PumpMedicationDoseUnit : nvarchar(300)
Unit for the medication dose as specified on the pump
HasMedicationDoseDifference : tinyint
1/0 column that indicates if the dose is different between the MAR and the pump. This column returns 1 if the dose or dose unit is different and 0 otherwise.
MarMedicationConcentration : numeric(18,4)
Medication concentration as specified on the MAR
PumpMedicationConcentration : numeric(18,4)
Medication concentration as specified on the pump
MarMedicationConcentrationUnit : nvarchar(300)
Unit for the medication concentration as specified on the MAR
PumpMedicationConcentrationUnit : nvarchar(300)
Unit for the medication concentration as specified on the pump
HasMedicationConcentrationDifference : tinyint
1/0 column that indicates if the medication concentration is different between the MAR and the pump. This column returns 1 if the medication concentration or concentration unit is different and 0 otherwise.
MarPcaLoadingDose : numeric(18,4)
PCA loading dose as specified on the MAR
PumpPcaLoadingDose : numeric(18,4)
PCA loading dose as specified on the pump
MarPcaLoadingDoseUnit : nvarchar(300)
Unit for the PCA loading dose as specified on the MAR
PumpPcaLoadingDoseUnit : nvarchar(300)
Unit for the PCA loading dose as specified on the pump
HasPcaLoadingDoseDifference : tinyint
1/0 column that indicates if the PCA loading dose is different between the MAR and the pump. This column returns 1 if the PCA loading dose or loading dose unit is different and 0 otherwise.
MarPcaBolusDose : numeric(18,4)
PCA bolus dose as specified on the MAR
PumpPcaBolusDose : numeric(18,4)
PCA bolus dose as specified on the pump
MarPcaBolusDoseUnit : nvarchar(300)
Unit for the PCA bolus dose as specified on the MAR
PumpPcaBolusDoseUnit : nvarchar(300)
Unit for the PCA bolus dose as specified on the pump
HasPcaBolusDoseDifference : tinyint
1/0 column that indicates if the PCA bolus dose is different between the MAR and the pump. This column returns 1 if the PCA bolus does or bolus dose unit is different and 0 otherwise.
MarPcaLockoutDuration : smallint
PCA lockout duration as specified on the MAR
PumpPcaLockoutDuration : smallint
PCA lockout duration as specified on the pump
MarPcaLockoutDurationUnit : nvarchar(300)
Unit for the PCA lockout duration as specified on the MAR
PumpPcaLockoutDurationUnit : nvarchar(300)
Unit for the PCA lockout duration as specified on the pump
HasPcaLockoutDurationDifference : tinyint
1/0 column that indicates if the PCA lockout duration is different between the MAR and the pump. This column returns 1 if the PCA lockout duration or lockout duration unit is different and 0 otherwise.
MarPcaBasalRate : numeric(18,4)
PCA basal rate as specified on the MAR
PumpPcaBasalRate : numeric(18,4)
PCA basal rate as specified on the pump
MarPcaBasalRateUnit : nvarchar(300)
Unit for the PCA basal rate as specified on the MAR
PumpPcaBasalRateUnit : nvarchar(300)
Unit for the PCA basal rate as specified on the pump
HasPcaBasalRateDifference : tinyint
1/0 column that indicates if the PCA basal rate is different between the MAR and the pump. This column returns 1 if the PCA basal rate or basal rate unit is different and 0 otherwise.
MarPcaDoseLimit : numeric(18,4)
PCA dose limit as specified on the MAR
PumpPcaDoseLimit : numeric(18,4)
PCA dose limit as specified on the pump
MarPcaDoseLimitUnit : nvarchar(300)
Unit for the PCA dose limit as specified on the MAR
PumpPcaDoseLimitUnit : nvarchar(300)
Unit for the PCA dose limit as specified on the pump
HasPcaDoseLimitDifference : tinyint
1/0 column that indicates if the PCA dose limit is different between the MAR and the pump. This column returns 1 if the PCA dose limit number of hours, dose limit, or dose limit unit is different and 0 otherwise.
MarPatientWeightInKilograms : numeric(18,3)
Patient weight as specified on the MAR or patient's chart
PumpPatientWeightInKilograms : numeric(18,3)
Patient weight as specified on the pump
HasPatientWeightDifference : tinyint
1/0 column that indicates if the patient weight is different between the patient chart and the pump. This column returns 1 if the patient weight is different and 0 otherwise.
MarPatientBodySurfaceAreaInSquareMeters : numeric(18,2)
Patient's body surface area as specified on the MAR or patient's chart
PumpPatientBodySurfaceAreaInSquareMeters : numeric(18,2)
Patient's body surface area as specified on the pump
HasPatientBodySurfaceAreaDifference : tinyint
1/0 column that indicates if the patient's body surface area is different between the patient chart and the pump. This column returns 1 if the patient's body surface area is different and 0 otherwise.
MarPatientHeightInInches : numeric(18,2)
Patient height as specified on the MAR or patient's chart
PumpPatientHeightInInches : numeric(18,2)
Patient height as specified on the pump
HasPatientHeightDifference : tinyint
1/0 column that indicates if the patient height is different between the patient chart and the pump. This column returns 1 if the patient height is different and 0 otherwise.
MarPcaDoseLimitNumberOfHours : smallint
Number of hours the dose limit is applicable for as specified on the MAR
PumpPcaDoseLimitNumberOfHours : smallint
Number of hours the dose limit is applicable for as specified on the pump
MarPcaMaxDosesPerHour : smallint
PCA number of max doses per hour as specified on the MAR
PumpPcaMaxDosesPerHour : smallint
PCA number of max doses per hour as specified on the pump
HasPcaMaxDosesPerHourDifference : tinyint
1/0 column that indicates if the PCA number of max doses per hour is different between the MAR and the pump. This column returns 1 if the PCA max doses is different and 0 otherwise.
HasUserOverride : tinyint
1/0 column that indicates if the user overrode a difference between the MAR and the pump. This column returns 1 if the user overrode a difference and 0 otherwise.
IsSecondaryChannel : tinyint
1/0 column that indicates if the administration is on the secondary channel. This column returns 1 if the pump is on the secondary channel and 0 otherwise.
Count : tinyint
Artificial measure on which calculations can be done. The value is 0 for rows marked as deleted, 1 otherwise.
```

---

## PumpDim

**Extracted:** 2025-07-23 00:38:35
**Content Length:** 906 characters

**Content:**
```
General Information
Supported User Types:
Backend Systems and Non-OAuth 2.0
API Type:
Kit Class B Dim
Try It
PumpDim
The pump dimension contains information about infusion pumps. Each row represents one infusion pump. Change Type: Non-Snapshot
Columns
PumpKey : bigint
Surrogate key used to uniquely identify the record
Name : nvarchar(300)
Name of the pump
DeviceType : nvarchar(300)
Device type for the pump
InterfaceType : nvarchar(300)
Interface type linked to the pump
ActiveState : nvarchar(300)
The current state of the pump device. For Epic data, this identifies soft-deleted and hidden pump records.
PrimaryExternalId : nvarchar(50)
The external identifier for this pump. If the pump has more than one, this column only has the first.
IsPca : tinyint
1/0 column that indicates if this pump is a patient controlled analgesic (PCA). This column returns 1 if the device is a PCA pump and 0 otherwise.
```

---

## PumpDocumentationFact

**Extracted:** 2025-07-23 00:38:39
**Content Length:** 0 characters

**Error:** ERROR: Error processing PumpDocumentationFact: Message: stale element reference: stale element not found
  (Session info: chrome=138.0.7204.158); For documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#staleelementreferenceexception
Stacktrace:
	GetHandleVerifier [0x0x7ff6f0d1e935+77845]
	GetHandleVerifier [0x0x7ff6f0d1e990+77936]
	(No symbol) [0x0x7ff6f0ad9cda]
	(No symbol) [0x0x7ff6f0af00f4]
	(No symbol) [0x0x7ff6f0aeebc3]
	(No symbol) [0x0x7ff6f0ae23d9]
	(No symbol) [0x0x7ff6f0ae2553]
	(No symbol) [0x0x7ff6f0ae028f]
	(No symbol) [0x0x7ff6f0ae4a61]
	(No symbol) [0x0x7ff6f0b81e4b]
	(No symbol) [0x0x7ff6f0b588ca]
	(No symbol) [0x0x7ff6f0b80b07]
	(No symbol) [0x0x7ff6f0b586a3]
	(No symbol) [0x0x7ff6f0b21791]
	(No symbol) [0x0x7ff6f0b22523]
	GetHandleVerifier [0x0x7ff6f0ff684d+3059501]
	GetHandleVerifier [0x0x7ff6f0ff0c0d+3035885]
	GetHandleVerifier [0x0x7ff6f1010400+3164896]
	GetHandleVerifier [0x0x7ff6f0d38c3e+185118]
	GetHandleVerifier [0x0x7ff6f0d4054f+216111]
	GetHandleVerifier [0x0x7ff6f0d272e4+113092]
	GetHandleVerifier [0x0x7ff6f0d27499+113529]
	GetHandleVerifier [0x0x7ff6f0d0e298+10616]
	BaseThreadInitThunk [0x0x7ffe0cede8d7+23]
	RtlUserThreadStart [0x0x7ffe0e93c34c+44]


---

