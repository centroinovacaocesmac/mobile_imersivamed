export type Modelo = {
    id: string;
    modelo: any;
    nome?: string;
    descricao?: string;
}

const modelos: Modelo[] = [ 
    { id: "coracao", modelo: require("@assets/Model3D/Heart/coracao.glb") },
    { id: "pulmao", modelo: require("@assets/Model3D/Lung/pulmao.glb") },
    { id: "arteria", modelo: require("@assets/Model3D/Artery/arteria.glb") },
    { id: "veias", modelo: require("@assets/Model3D/Veins/veias.glb") },
    { id: "capilares", modelo: require("@assets/Model3D/Capillaries/capilares.glb") },
    { id: "sistemica", modelo: require("@assets/Model3D/Systemic/sistemica.glb") },
]

const ModelosService = {
    getModelos: () => modelos,

    getModelo: (id: string): Modelo | undefined => {
        return modelos.find(modelo => modelo.id === id)
    }
}

export const useModeloService = () => ModelosService;