export interface Props {
    navigation: any
}

export type ContactInformation = {
    webSite: string,
    whatsapp: string,
    telegram: string,
    instagram: string,
    email: string,
    address: string,
    phoneNumber: string,
    addressImage: string,
    addressMap: {
        lat: string,
        lon: string
    },
}

