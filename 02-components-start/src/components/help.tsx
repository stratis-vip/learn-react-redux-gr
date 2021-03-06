import React from "react";

const Help = () => {
  return <div className="container">
    <h4>Οδηγίες για την χρήση της εφαρμογής</h4>
    <ol>
      <h5>
        <li>Περιήγηση</li>
      </h5>
      <img src='./imgs/browse.png' className="img-fluid"/>
      <ul className="list-unstyled">
        Στην εικόνα βλέπουμε μια τυπική σελίδα περιήγησης στην οποία τα διάφορα μέρη έχουν αριθμηθεί ως εξής:
        <li><strong>1</strong> Πόσες εγγραφές υπάρχουν με τα συγκεκριμένα κριτήρια.</li>
        <li><strong>2</strong> Πόσα κείμενα εμφανίζονται ανά σελίδα.</li>
        <li><strong>3</strong> Η τρέχουσα σελίδα είναι σημειωμένη με μπλε περίγραμμα</li>
        <li><strong>4</strong> Αν έχουμε περιηγηθεί μετά την δεύτερη σελίδα, υπάρχει η συντόμευση για την 1η σελίδα.
        </li>
        <li><strong>5</strong> Ποιά σειρά έχει το τρέχον κείμενο στα αποτελέσματα.</li>
        <li><strong>6</strong> ΑΚ: ο αριθμός καταχώρισης στη βάση δεδομένων. Εντός των αγκυλών(με τη σειρά που
          εμφανίζονται): Η κατηγορία, ο αριθμός καταχώρισης στην κατηγορία, η ημερομηνία συγγραφής.
        </li>
        <li><strong>7</strong> Το σώμα του κειμένου</li>
        <li><strong>8</strong> Αν το κείμενο είναι μακροσκελές, περικόπτεται. Πατώντας στο «περισσότερα» εμφανίζεται
          όλο.
        </li>
      </ul>

      <h5 className="mt-3">
        <li>Μενού <strong>«Εμφάνιση Επιλογών»</strong></li>
      </h5>
      <ul className="list-unstyled">
        <ul className="list-unstyled">
          <li>Παρουσιάζει τις επιλογές που έχουμε δώσει στο σύστημα για να επιλέξει κείμενα.
            Αυτές οι επιλογές περιλαμβάνουν:
          </li>
          <img src='./imgs/options.png' className="img-fluid"/>
          <ul>
            <li className="mt-1">Την κατηγορία που ανήκει το κείμενο</li>
            <li className="mt-1">Την Ταξινόμηση (κατά χρονολογική ή κατά αριθμό καταχώρισης)</li>
            <li className="mt-1">Τον τρόπο εμφάνισης των αποτελεσμάτων (με αύξουσα ή φθίνουσα σειρά)</li>
            <li className="mt-1">Αν θα περιέχει συγκεκριμένο κείμενο (απαιτείται να πατήσετε «Καταχώριση» για να ληφθεί
              υπόψη).
            </li>
            <li className="mt-1">Τον αριθμό καταχώρισης (απαιτείται να πατήσετε «Καταχώριση» για να ληφθεί υπόψη).</li>
            <li className="mt-1">Το πλήκτρο «Αναζήτηση» εκτελεί το ερώτημα στη Βάση δεδομένων και εμφανίζει το
              αποτέλεσμα κλείνοντας τις
              επιλογές
            </li>
            <li className="mt-1">Tο πλήκτρο «Μηδενισμός φίλτρων» εκτελεί το γενικό ερώτημα στη Βάση δεδομένων και
              εμφανίζει το
              αποτέλεσμα κλείνοντας τις επιλογές.
              Το γενικό ερώτημα είναι: αναζήτηση σε όλες τις κατηγορίες χωρίς κανένα περιορισμό και χωρίς κάποια
              ταξινόμηση.
            </li>
          </ul>
        </ul>
      </ul>
      <h5 className="mt-3">
        <li>Η συντόμευση <strong>«Οδηγίες»</strong> εμφανίζει την τρέχουσα σελίδα.</li>
      </h5>
      <h5 className="mt-3">
        <li>Η συντόμευση <strong>«Στατιστικά»</strong> εμφανίζει τα σταατιστικά στοιχεία της βάσης δεδομένων.</li>
      </h5>


    </ol>
  </div>
}

export default Help