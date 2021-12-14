import {
  IonCard,
  IonCardContent,
  IonContent,
  IonPage,
  IonMenuButton,
  IonButtons,
  IonHeader,
  IonToolbar,
} from "@ionic/react";
export default function AboutPage() {
  console.log("in about");
  return (
    <IonPage id="main-content">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardContent>
            <div>About us</div>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
}
