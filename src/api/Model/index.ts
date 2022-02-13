export interface EndPoints {
    get?:
        | 'athleteChart'
        | 'countries'
        | 'profile'
        | 'progress'
        | 'totalReferrals'
        | 'notifications'
        | 'payments'
        | 'coachMyField'
        | 'favorites'
        | 'fields'
        | 'commentVideoList'
        | 'exerciseType'
        | 'trainerRecords'
        | 'plans'
        | 'athletes'
        | 'athleteMyField'
        | 'athleteNotifs'
        | 'withdrawals'
        | 'balances'
        | 'points'
        | 'records'
        | 'myAthletes'
        | 'myFields'
        | 'serverExercises'
        | 'trainerNotifs'
        | 'addTrainer'
        | 'messages'
        | 'search'
        | 'myPlan'
        | 'myTransactions'
    post?:
        | 'contactUs'
        | 'signUp'
        | 'signIn'
        | 'phrases'
        | 'athleteMyField'
        | 'serverExercises'
        | 'trainerNotifs'
        | 'verify'
        | 'forgetPassword'
        | 'refreshToken'
        | 'withdrawals'
        | 'otp'
        | 'answerRequests'
        | 'athleteRequest'
        | 'fieldInfo'
        | 'records'
        | 'trainerProgress'
        | 'favorites'
        | 'progress'
        |'checkUserName'
    put?: 'changePassword'
    patch?: 'profile' | 'athletes' | 'progress' | 'sportyPlan'
}
