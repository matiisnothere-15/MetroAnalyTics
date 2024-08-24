import { initializeApp } from "firebase/app";
import { collection, query, where, getDocs, getFirestore, DocumentData, setDoc, doc} from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';

export class Firebase {

    inicializarFirebase() {
        const firebaseConfig = {
            apiKey: "AIzaSyCdJM-YKqV5y3nuBEKO4Xd31t57mf2n-_0",
            authDomain: "metroanalytics-240d9.firebaseapp.com",
            projectId: "metroanalytics-240d9",
            storageBucket: "metroanalytics-240d9.appspot.com",
            messagingSenderId: "232498878871",
            appId: "1:232498878871:web:7479972af5137a4cb34cd2",
            measurementId: "G-QSJN5NX1NR"
        };
        initializeApp(firebaseConfig)
    }


    //CRUD FIREBASE
    async obtenerDatosFlujoPass(linea: string) {
        const q = query(collection(getFirestore(), "TORNIQUETE"), where("linea", "==", linea));
        const querySnapshot = await getDocs(q);
        let estaciones: DocumentData[] = [];
        querySnapshot.forEach((doc) => {
            estaciones.push(doc.data())
        });
        return estaciones;
    }

    async obtenerDatosTiempo(linea: string) {
        const q = query(collection(getFirestore(), "TIEMPO_DE_TRASLADO"), where("linea", "==", linea));
        const querySnapshot = await getDocs(q);
        let estaciones: DocumentData[] = [];
        querySnapshot.forEach((doc) => {
            estaciones.push(doc.data())
        });
        return estaciones;
    }

    async obtenerDatosBuses() {
        const q = query(collection(getFirestore(), "TORNIQUETE"), where("tipo", "==", "bus"));
        const querySnapshot = await getDocs(q);
        let recorridos: DocumentData[] = [];
        querySnapshot.forEach((doc) => {
            recorridos.push(doc.data())
        });
        return recorridos;
    }

    async obtenerDatosEstacionesOrigen(linea: string) {
        const q = query(collection(getFirestore(), "TORNIQUETE"), where("tipo_estacion", "==", "origen"), where("linea", "==", linea));
        const querySnapshot = await getDocs(q);
        let estaciones: DocumentData[] = [];
        querySnapshot.forEach((doc) => {
            estaciones.push(doc.data())
        });
        return estaciones;
    }

    async insertarFlujoPas(conteo: number, lineaIn: string, nombreEstacion: string) {
        await setDoc(doc(getFirestore(), "TORNIQUETE", uuidv4()), {
            conteo: conteo,
            linea: lineaIn,
            nombre_estacion: nombreEstacion
        });
    }

    //CORREGIR
    async insertarTiempotras(estacion_destino: string, estacion_origen: string, fecha: string, linea: string, tiempo: number) {
        await setDoc(doc(getFirestore(), "TIEMPO_DE_TRASLADO", uuidv4()), {
            estacion_destino: estacion_destino,
            estacion_origen: estacion_origen,
            fecha: fecha,
            linea: linea,
            tiempo: tiempo
        });
    }
    async insertarEstorigen(conteo: number, lineaIn: string, nombreEstacion: string) {
        await setDoc(doc(getFirestore(), "TORNIQUETE", uuidv4()), {
            conteo: conteo,
            linea: lineaIn,
            nombre_estacion: nombreEstacion,
            tipo_estacion: 'origen'
        });
    }
    async insertarRecorridoBuses(conteo: number, bus: string, tipo: string) {
        await setDoc(doc(getFirestore(), "TORNIQUETE", uuidv4()), {
            conteo: conteo,
            numBus: bus,
            tipo: tipo
        });
    }
}