document.addEventListener('DOMContentLoaded', () => {
    const valA = document.getElementById('valA');
    const valB = document.getElementById('valB');
    const valC = document.getElementById('valC');
    const valD = document.getElementById('valD');
    const calculateBtn = document.getElementById('calculateBtn');
    const resetBtn = document.getElementById('resetBtn');

    calculateBtn.addEventListener('click', () => {
        const a = parseFloat(valA.value);
        const b = parseFloat(valB.value);
        const c = parseFloat(valC.value);
        const d = parseFloat(valD.value);

        // 입력되지 않은 필드를 확인 (정확히 하나의 필드가 비어 있어야 함)
        const emptyFields = [valA, valB, valC, valD].filter(input => input.value === '');

        if (emptyFields.length !== 1) {
            alert('계산할 값 하나를 비워두고 나머지 세 값을 입력해주세요.');
            return;
        }

        try {
            if (valD.value === '') {
                // D = B * C / A
                if (a === 0) throw new Error('A는 0이 될 수 없습니다.');
                valD.value = (b * c) / a;
            } else if (valC.value === '') {
                // C = A * D / B
                if (b === 0) throw new Error('B는 0이 될 수 없습니다.');
                valC.value = (a * d) / b;
            } else if (valB.value === '') {
                // B = A * D / C
                if (c === 0) throw new Error('C는 0이 될 수 없습니다.');
                valB.value = (a * d) / c;
            } else if (valA.value === '') {
                // A = B * C / D
                if (d === 0) throw new Error('D는 0이 될 수 없습니다.');
                valA.value = (b * c) / d;
            }
        } catch (error) {
            alert(`오류: ${error.message}`);
        }
    });

    resetBtn.addEventListener('click', () => {
        valA.value = '';
        valB.value = '';
        valC.value = '';
        valD.value = '';
    });
});