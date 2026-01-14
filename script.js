        /* ========================================
           スクロール時のフェードイン効果
           ======================================== */
        
        // Intersection Observerを使用して要素が画面に入ったら表示
        const observerOptions = {
            threshold: 0.1, // 要素の10%が見えたら発火
            rootMargin: '0px 0px -50px 0px' // 下から50px手前で発火
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // 画面に入ったら.visibleクラスを追加
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // すべての.fade-in要素を監視
        const fadeElements = document.querySelectorAll('.fade-in');
        fadeElements.forEach(el => observer.observe(el));

        /* ========================================
           ボタンのクリックイベント（サンプル）
           ======================================== */
        document.querySelectorAll('.btn').forEach(btn => {
            btn.addEventListener('click', () => {
                alert('ボタンがクリックされました!');
            });
        });

        /* ========================================
           カードのクリックイベント（サンプル）
           ======================================== */
        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('click', () => {
                const title = card.querySelector('.card-title').textContent;
                alert(`${title} がクリックされました!`);
            });
        });