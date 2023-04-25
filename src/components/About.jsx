import React from 'react';
import img from './images/aboutportert.jpg'

const stilstranice = {
    //height: 563 + "px",
    paddingTop: 20 + "px",
    paddingBottom: 50 + "px",
    backgroundColor: "#455a64",
}

function About() {
    return (
        <div className="aboutstranica" style={stilstranice}>
        <div className="biografija">

            <div className="deo1">
                <div className="deo1deo1">
                <b>1853-1873 </b>
                Vincent van Gogh was born in the Brabant village of Zundert on 30 March 1853. At the age of 
                eleven, Vincent transferred from the village school in Zundert to a boarding school in 
                Zevenbergen. He drew from time to time, but there was little sign as yet of any special 
                artistic talent. Vincents uncle found the sixteen-year-old Van Gogh a job as a trainee at 
                the international art dealer Goupil & Cie. September 1872 marked the beginning of a life-long 
                correspondence between Vincent and his younger brother Theo.
                </div>
                <div className="deo1deo2">
                <b>1873-1881 </b>
                Vincent tried different jobs, from art dealer to schoolmaster and lay preacher. Vincent was 
                transferred to Paris in 1875  a period in which he became increasingly religious. The letters 
                he wrote to Theo at this time are full of Bible quotes and accounts of church services and 
                sermons. Vincent often included little sketches in the letters he sent his brother Theo and 
                sometimes enclosed a drawing of what he had seen. This eventually led to a turning point in 
                his life, when Theo advised him to concentrate more on his drawing. 
                </div>
                <div className="deo1deo3">
                <b>1881-1887 </b>
                Vincent's parents weren't very happy with his dream of an artist's life. Fortunately, that did 
                not stop Vincent from working hard and improving his skills. Vincent moved back in with his 
                parents, in Nuenen. Here, Vincent van Gogh painted and sketched farmers, weavers and workers. 
                He started working on The Potato Eaters. In Paris, Vincent developed his own, well-known style 
                with bright colours. Yet after two years the hectic city life that had given him so much inspiration 
                in the beginning, became too much.
                </div>
            </div>

            <div className="deo2">
                <div className="deo2deo1">
                    <div className="biografijanaslov">
                        ABOUT VAN GOGH
                    </div>
                </div>
                <div className="deo2deo2">
                    <div className="portretslika">
                        <img className="aboutportret" src={img} />
                    </div>
                </div>
            </div>

            <div className="deo3">
                <div className="deo3deo1">
                <b>1888-1889 </b>
                Vincent's time in South of France was a turbulent period in his life. He fell ill and cut off his ear, 
                but he kept working despite everything. During this time, he even made some of his most famous artworks. 
                Vincent was delighted with the bright light and colours in Arles, and set to work enthusiastically,
                painting orchards in blossom and workers gathering the harvest. His style became looser and more 
                expressive. The morning after he cut off part of his ear, Vincent was admitted to the hospital in Arles.
                </div>
                <div className="deo3deo2">
                <b>1889-1890 </b>
                Vincent van Gogh spent one year in the mental hospital in Saint-Rémy-de-Provence. Despite his unstable 
                mental health, he made about 150 paintings in a year, including Almond Blossom. On his good days, he 
                often painted in the institutions walled garden and he was later allowed to work outside the hospital 
                too.He was also given an extra room inside the clinic to use as a studio, where he produced a series 
                of works, including copies of prints after paintings by artists like Rembrandt and Millet.
                </div>
                <div className="deo3deo3">
                <b>1890 </b>
                Vincent spent the final months of his life in Auvers-sur-Oise: an artists' village near Paris. He 
                made new friends and he threw himself into painting completing virtually a work a day. His health 
                seemed to be improving, too. Yet after a visit to Theo, Vincent grew very concerned about his financial 
                future. No matter how 'healthy and fortifying' Vincent found the countryside, it was to no avail. 
                His illness and his uncertainty about the future became too much.. Vincent ended his life in July 1890.
                </div>
            </div>

        </div>
        </div>
    )
}

export default About;