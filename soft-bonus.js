// setup

let mostRecentBlockedTwitterAccounts = [];
    
let blockedTwitterAccounts =  [];
    
let newAccountsToBlock = [];


let lang = 'FR';

let textHolder = {
    'FR': {
        'newBlockedAccountsNumberFiesta': `nouveaux comptes vont être bloqués. Yay !`,
        'identicalLists': "Les listes sont identiques, pas de nouveau compte à bloquer aujourd hui ;) !",
        'alreadyRan': 'Vous avez déjà exécuté le script, le relancer maintenant serait inutile.'
    },
    'EN': {
        'newBlockedAccountsNumberFiesta': 'new accounts will be blocked. Yay !',
        'identicalLists': 'The lists are the same, no new account to block today ;) !',
        'alreadyRan': 'You already ran the script, running it once more would be useless.'
    }
}

let ranAlready = false;

// functions
    
function GimmeTheNewAccountsToBlock(mostRecentRef, currentRealRef, toFill) {
    for (const accountID of mostRecentRef) {
        console.log(accountID);
        if (!currentRealRef.includes(accountID)) {
                toFill.push(accountID);
        }
    }
}
    
function createTheListPlease(newBlocks) {
    let theblockString = '';
    for(const accountID of newBlocks) {
        theblockString += `${accountID} \n`;
    }
    console.log(theblockString);
}


// the part that does the work

if(newAccountsToBlock.length === 0 && !ranAlready) {
    ranAlready = true;
    GimmeTheNewAccountsToBlock(mostRecentBlockedTwitterAccounts, blockedTwitterAccounts, newAccountsToBlock);
} else {
    console.log(textHolder[lang]['alreadyRan']);
}
    
     
if(newAccountsToBlock.length > 0 && ranAlready) {
    console.log(`${newAccountsToBlock.length} ${textHolder[lang]['newBlockedAccountsNumberFiesta']}`);

    createTheListPlease(newAccountsToBlock);
} else {
    console.log(newAccountsToBlock.length);
    console.log(textHolder[lang]['identicalLists']);
}