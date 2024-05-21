// script.js
const amendments = [
    { number: 1, text: "Freedom of religion, speech, press, assembly, and petition." },
    { number: 2, text: "Right to keep and bear arms." },
    { number: 3, text: "No quartering of soldiers in private houses during peacetime. Also there are no supreme court cases involving this amendment." },
    { number: 4, text: "Freedom from unreasonable searches and seizures. Mapp v Ohio, illegal search/fake warrant. Exclusionary Rule was created from this." },
    { number: 5, text: "Right to due process, double jeopardy, self-incrimination, eminent domain.These are your rights under the Fifth Amendment: A grand jury indictment is necessary to indict you for a serious crime (except for crimes committed within the military).You cannot be tried for the same crime twice (double jeopardy).You cannot be forced to provide evidence of guilt. You have the right to remain silent.Your life, liberty, or property cannot be taken without due process." },
    { number: 6, text: "Rights of accused persons in criminal cases." },
    { number: 7, text: "Right to a jury trial in civil cases. The Seventh Amendment guarantees the right to a jury trial in civil cases where the value in dispute exceeds twenty dollars. It also ensures that any fact determined by a jury cannot be re-examined by another court, preserving the integrity of the jury's findings in accordance with common law principles. This amendment helps protect citizens' rights to a fair trial in civil disputes." },
    { number: 8, text: "Freedom from excessive bail, cruel and unusual punishments." },
    { number: 9, text: "Other rights of the people.The enumeration in the Constitution, of certain rights, shall not be construed to deny or disparage others retained by the people. This means Unenumerated rights unlisted rights are protected and do exist."},
    { number: 10, text: "Powers reserved to the states." },
    { number: 11, text: "Authority of federal courts restricted." },
    { number: 12, text: "Election of the President and Vice President." },
    { number: 13, text: "Abolition of slavery." },
    { number: 14, text: "Rights of citizenship." },
    { number: 15, text: "Right to vote not denied by race." },
    { number: 16, text: "Federal income tax authorized." },
    { number: 17, text: "Election of Senators by popular vote." },
    { number: 18, text: "Prohibition of liquor." },
    { number: 19, text: "Women's right to vote." },
    { number: 20, text: "Terms of the President and Congress; replacing the President." },
    { number: 21, text: "Repeal of Prohibition." },
    { number: 22, text: "Limitation of Presidents to two terms." },
    { number: 23, text: "Presidential vote for District of Columbia." },
    { number: 24, text: "Abolition of poll taxes." },
    { number: 25, text: "Presidential disability and succession." },
    { number: 26, text: "Right to vote at age 18." },
    { number: 27, text: "Congressional pay increases." },
];

let currentIndex = 0;

const front = document.getElementById('front');
const back = document.getElementById('back');
const flashcard = document.getElementById('flashcard');

function updateFlashcard(index) {
    front.innerText = `Amendment ${amendments[index].number}`;
    back.innerText = amendments[index].text;
}

function flipToFront() {
    if (flashcard.classList.contains('flipped')) {
        flashcard.classList.remove('flipped');
    }
}

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateFlashcard(currentIndex);
        flipToFront();
    }
});

document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentIndex < amendments.length - 1) {
        currentIndex++;
        updateFlashcard(currentIndex);
        flipToFront();
    }
});

document.getElementById('homeBtn').addEventListener('click', () => {
    currentIndex = 0;
    updateFlashcard(currentIndex);
    flipToFront();
});

document.getElementById('practiceBtn').addEventListener('click', () => {
    currentIndex = Math.floor(Math.random() * amendments.length);
    updateFlashcard(currentIndex);
    flipToFront();
});

flashcard.addEventListener('click', () => {
    flashcard.classList.toggle('flipped');
});

// Initialize the first flashcard
updateFlashcard(currentIndex);
