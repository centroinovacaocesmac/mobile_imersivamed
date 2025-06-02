import { View } from "react-native";
import { useGLTF } from "@react-three/drei/native";
import { Canvas } from "@react-three/fiber/native";
import { Suspense } from "react";
import { Modelo } from "@services/model.services";
import { Asset } from "expo-asset"
import { useEffect, useState } from "react";
import useControls from "r3f-native-orbitcontrols";

function ModeloObject({ modelo }: { modelo: Modelo }){
    const asset = Asset.fromModule(modelo.modelo);
    const {scene} = useGLTF(asset.uri) as any;
    return <primitive object={scene}/>
}

export default function Model3D({modelo}: {modelo: Modelo}){
    const [OrbitControls, events] = useControls();

    return(
        <View className="w-full h-[600px]" {...events}>
            <Canvas
                camera={{ position: [-6, 0, 16], fov: 36}}
                gl={{
                    debug: {
                        checkShaderErrors: false,
                        onShaderError: null,
                    }
                }}
                onCreated={(state) => {
                    const _gl = state.gl.getContext();
                    const pixelStorei = _gl.pixelStorei.bind(_gl);
                    _gl.pixelStorei = function (...args){
                        const [parameter] = args;
                        if(parameter === _gl.UNPACK_FLIP_Y_WEBGL){
                            return pixelStorei(...args);
                        }
                    }
                }}
            >
                <OrbitControls enablePan={false}/>
                <directionalLight position={[1, 0, 0]} intensity={5}/>
                <directionalLight position={[-1, 0, 0]} intensity={5}/>
                <directionalLight position={[0, 1, 0]} intensity={5}/>
                <directionalLight position={[0, -1, 0]} intensity={5}/>
                <directionalLight position={[0, 0, -1]} intensity={5}/>
                <directionalLight position={[0, 0, 1]} intensity={5}/>
                <Suspense>
                    <ModeloObject modelo={modelo}/>
                </Suspense>
            </Canvas>
        </View>
    )
}